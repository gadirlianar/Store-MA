import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 860 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  await page.goto("http://localhost:3000?skipIntro=1", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);

  // Move mouse smoothly across the screen to activate side shoes and cursor
  await page.mouse.move(300, 300);
  await page.waitForTimeout(200);

  // Move mouse onto the center packaging box to trigger the spotlight window and glowing halo
  // Center box is roughly at (720, 420)
  await page.mouse.move(660, 410, { steps: 15 });
  await page.waitForTimeout(500);

  await page.screenshot({ path: "public/hero_active_interaction.png" });
  console.log("Captured public/hero_active_interaction.png");

  // Move to blank area to capture clear view of shoelace cursor trailing
  await page.mouse.move(950, 220, { steps: 12 });
  await page.waitForTimeout(300);
  await page.screenshot({ path: "public/cursor_motion_capture.png" });
  console.log("Captured public/cursor_motion_capture.png");

  // Also capture shop page
  await page.goto("http://localhost:3000/shop", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: "public/shop_reference_match.png" });
  console.log("Captured public/shop_reference_match.png");

  await browser.close();
  console.log("All captures completed successfully!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
