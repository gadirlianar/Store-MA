import { chromium } from "playwright";

async function verify() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 860 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  
  // 1. Initial State Capture: Must match User Image 1 (No side shoes, only center box)
  await page.goto("http://localhost:3000?skipIntro=1", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: "public/verify_hero_initial_resting.png" });
  console.log("Captured public/verify_hero_initial_resting.png");

  // 2. Interactive Spotlight Capture: Mouse moves over center box (Shoes glide in, spotlight reveals sneaker)
  await page.mouse.move(700, 420, { steps: 20 });
  await page.waitForTimeout(800);
  await page.screenshot({ path: "public/verify_hero_box_spotlight.png" });
  console.log("Captured public/verify_hero_box_spotlight.png");

  // 3. Shoelace Cursor Capture: Move to upper right open area
  await page.mouse.move(960, 240, { steps: 10 });
  await page.waitForTimeout(300);
  await page.screenshot({ path: "public/verify_cursor_detail.png" });
  console.log("Captured public/verify_cursor_detail.png");

  // 4. Footer Capture: Scroll down to footer to verify clean bottom bar with social pills
  const footer = await page.locator("footer");
  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: "public/verify_footer_socials.png" });
  console.log("Captured public/verify_footer_socials.png");

  await browser.close();
  console.log("All verifications captured successfully!");
}

verify().catch((err) => {
  console.error(err);
  process.exit(1);
});
