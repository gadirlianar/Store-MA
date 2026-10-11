import { chromium } from "playwright";

async function main() {
  console.log("Launching playwright to verify user's latest requests...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 860 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  // 1. Initial Resting State
  await page.goto("http://localhost:3000?skipIntro=1", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: "public/test_hero_resting.png" });
  console.log("Captured public/test_hero_resting.png");

  // Center hover over box (Enlarged circle spotlight + both shoes)
  await page.mouse.move(720, 420, { steps: 15 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/test_hero_center_hover.png" });
  console.log("Captured public/test_hero_center_hover.png");

  // Left hover (left shoe only, right shoe retracts)
  await page.mouse.move(560, 400, { steps: 15 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/test_hero_left_hover.png" });
  console.log("Captured public/test_hero_left_hover.png");

  // Right hover (right shoe only, left shoe retracts)
  await page.mouse.move(880, 400, { steps: 20 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/test_hero_right_hover.png" });
  console.log("Captured public/test_hero_right_hover.png");

  // 2. Section 02: Specifications (No "02 — THE 001", pristine uncropped 3/4 shoe, and card flip)
  await page.evaluate(() => {
    const el = document.getElementById("section02");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await page.waitForTimeout(600);

  // Hover first card (SR-FOAM) to flip it
  await page.mouse.move(250, 400, { steps: 10 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/test_section02_specs.png" });
  console.log("Captured public/test_section02_specs.png");

  // 3. Section 06: Minimalist Anatomical Blueprint
  await page.evaluate(() => {
    const el = document.getElementById("anatomy");
    if (el) el.scrollIntoView({ behavior: "instant" });
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/test_section06_minimalist.png" });
  console.log("Captured public/test_section06_minimalist.png");

  await browser.close();
  console.log("All verifications completed successfully!");
}

main().catch(console.error);
