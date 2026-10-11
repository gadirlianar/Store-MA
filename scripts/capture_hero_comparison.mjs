import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  // Viewport matching standard 16:9 desktop (1440x900)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 860 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  await page.goto("http://localhost:3000?skipIntro=1", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  await page.screenshot({ path: "public/hero_exact_match.png" });
  console.log("Hero screenshot captured: public/hero_exact_match.png");

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
