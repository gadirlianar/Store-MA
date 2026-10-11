import { chromium } from "playwright";
import { execSync } from "child_process";
import fs from "fs";

const VIEWPORT = { width: 1920, height: 1080 };
const TARGET_URL = process.env.TARGET_URL || "http://localhost:3000?freeze=1";

const GOLDEN_STATES = [
  { id: "hero", scrollY: 0, ref: "reference/golden/hero.png", minSSIM: 0.90 },
  { id: "section02", scrollY: 1000, ref: "reference/golden/section02.png", minSSIM: 0.85 },
  { id: "anatomy", scrollY: 2200, ref: "reference/golden/anatomy.png", minSSIM: 0.90 },
  { id: "lookbook", scrollY: 3302, ref: "reference/golden/lookbook.png", minSSIM: 0.90 },
  { id: "details", scrollY: 4385, ref: "reference/golden/details.png", minSSIM: 0.90 }
];

async function run() {
  console.log("=== SRIGEN 001 FORENSIC VERIFICATION HARNESS ===");
  console.log(`Target URL: ${TARGET_URL}`);
  console.log(`Viewport: ${VIEWPORT.width}x${VIEWPORT.height} @ DPR 1.0\n`);

  fs.mkdirSync("docs/compare", { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1.0,
    colorScheme: "light"
  });

  const page = await context.newPage();

  try {
    await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 15000 });
  } catch {
    console.error("Could not connect to Next.js dev server at " + TARGET_URL);
    await browser.close();
    process.exit(1);
  }

  // Freeze time and deterministic state
  await page.evaluate(() => {
    if (window.__setTime) window.__setTime(0);
    document.body.classList.add("deterministic-freeze");
  });

  const results = [];

  for (const state of GOLDEN_STATES) {
    console.log(`Evaluating state: [${state.id}] at scrollY=${state.scrollY}...`);
    
    // Scroll to position
    await page.evaluate((y) => {
      window.scrollTo(0, y);
    }, state.scrollY);

    await page.waitForTimeout(400); // Allow render settle

    const actualPath = `docs/compare/${state.id}-actual.png`;
    const diffPath = `docs/compare/${state.id}-diff.png`;

    await page.screenshot({ path: actualPath });

    // Run python comparison script
    try {
      const output = execSync(
        `.tools/bin/python scripts/compare.py "${state.ref}" "${actualPath}" "${diffPath}"`,
        { encoding: "utf-8" }
      );
      const metrics = JSON.parse(output);
      const passed = metrics.ssim >= state.minSSIM && metrics.ciede2000 <= 3.0;

      results.push({
        id: state.id,
        ref: state.ref,
        ssim: metrics.ssim,
        ciede2000: metrics.ciede2000,
        threshold: state.minSSIM,
        passed,
        diff: diffPath
      });
    } catch (err) {
      console.error(`Comparison failed for ${state.id}:`, err.message);
      results.push({
        id: state.id,
        ref: state.ref,
        ssim: 0,
        ciede2000: 99,
        threshold: state.minSSIM,
        passed: false,
        error: err.message
      });
    }
  }

  await browser.close();

  // Print Table
  console.log("\n=================== VERIFICATION RESULTS ===================");
  console.table(
    results.map((r) => ({
      Section: r.id,
      SSIM: r.ssim,
      "Min SSIM": r.threshold,
      CIEDE2000: r.ciede2000,
      Status: r.passed ? "PASS" : "FAIL"
    }))
  );

  // Write REPORT.md
  let reportMd = "# Automated Forensic Verification Report\n\n";
  reportMd += `**Run Timestamp**: ${new Date().toISOString()}\n`;
  reportMd += `**Viewport**: ${VIEWPORT.width}x${VIEWPORT.height} (DPR 1.0)\n\n`;
  reportMd += "| Section | SSIM | Required SSIM | CIEDE2000 (Color Delta) | Status |\n";
  reportMd += "|---|---|---|---|---|\n";

  let allPassed = true;
  for (const r of results) {
    reportMd += `| **${r.id}** | ${r.ssim} | ${r.threshold} | ${r.ciede2000} | ${r.passed ? "✅ PASS" : "❌ FAIL"} |\n`;
    if (!r.passed) allPassed = false;
  }

  fs.writeFileSync("docs/compare/REPORT.md", reportMd);
  console.log("\nReport saved to docs/compare/REPORT.md");

  if (!allPassed) {
    console.log("\nSome sections did not meet fidelity thresholds. Check docs/compare/ for diff heatmaps.");
  } else {
    console.log("\nAll evaluated sections passed fidelity thresholds!");
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
