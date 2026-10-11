import { chromium } from "playwright";

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  const page = await context.newPage();
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => consoleErrors.push(err.message));

  await page.goto("http://localhost:3000/?skipIntro=1", {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(1000);

  // 1. Lookbook
  const lookbook = page.locator("#lookbook");
  await lookbook.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await lookbook.screenshot({ path: "public/verify_lookbook_clean.png" });
  console.log("Captured Lookbook: public/verify_lookbook_clean.png");

  // Verify lookbook texts
  const vol01Count = await lookbook.getByText("VOL. 01").count();
  const frame02Count = await lookbook.getByText("FRAME 02").count();
  console.log("VOL. 01 count (should be 0):", vol01Count);
  console.log("FRAME 02 count (should be 0):", frame02Count);

  // 2. Section 06 Anatomy
  const anatomy = page.locator("#anatomy");
  await anatomy.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await anatomy.screenshot({ path: "public/verify_section06_clean.png" });
  console.log("Captured Section06: public/verify_section06_clean.png");

  // Verify section06 removed texts
  const figCount = await anatomy.getByText("FIG. 001-A").count();
  const calibrationCount = await anatomy.getByText("CALIBRATION NOTE").count();
  const datumCount = await anatomy.getByText("DATUM_L").count();
  console.log("FIG. 001-A count (should be 0):", figCount);
  console.log("CALIBRATION NOTE count (should be 0):", calibrationCount);
  console.log("DATUM count (should be 0):", datumCount);

  // 3. Section 10 Material Archive
  const details = page.locator("#details");
  await details.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await details.screenshot({ path: "public/verify_section10_overhaul.png" });
  console.log("Captured Section10: public/verify_section10_overhaul.png");

  // 4. Footer
  const footer = page.locator("footer");
  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await footer.screenshot({ path: "public/verify_footer_clean.png" });
  console.log("Captured Footer: public/verify_footer_clean.png");

  // Verify footer signature
  const anarCount = await footer.getByText("ANAR GADIRLI").count();
  console.log("ANAR GADIRLI count in footer:", anarCount);
  console.log("Console errors across landing page:", consoleErrors.length);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
