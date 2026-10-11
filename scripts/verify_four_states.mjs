import { chromium } from "playwright";

async function verifyStates() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 860 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  // State 1: Initial Resting State (Matches User Image 1: No side shoes)
  await page.goto("http://localhost:3000?skipIntro=1", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: "public/verify_state1_resting.png" });
  console.log("Captured State 1: Resting state");

  // State 2: Left Hover (Matches User Image 2: Cursor on left side over 'S', Left shoe in, soft aura)
  // Box center is roughly at (720, 420). Left side is around (580, 390).
  await page.mouse.move(580, 390, { steps: 15 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/verify_state2_left_hover.png" });
  console.log("Captured State 2: Left hover");

  // State 3: Right Hover (Matches User Image 3: Cursor on right side over 'N', Right shoe in, soft aura)
  // Right side of box is around (850, 410)
  await page.mouse.move(850, 410, { steps: 20 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/verify_state3_right_hover.png" });
  console.log("Captured State 3: Right hover");

  // State 4: Center Hover (Matches User Image 4: Cursor in center, both shoes in)
  await page.mouse.move(720, 420, { steps: 15 });
  await page.waitForTimeout(700);
  await page.screenshot({ path: "public/verify_state4_center_hover.png" });
  console.log("Captured State 4: Center hover");

  // State 5: Footer with high-contrast luxury social buttons
  const footer = await page.locator("footer");
  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  // Hover over Instagram button to verify zero lag and hover style
  const instagramBtn = page.locator("a:has-text('INSTAGRAM')");
  await instagramBtn.hover();
  await page.waitForTimeout(300);
  await page.screenshot({ path: "public/verify_state5_footer_socials.png" });
  console.log("Captured State 5: Footer with Instagram hover");

  await browser.close();
  console.log("All 5 verification states successfully recorded!");
}

verifyStates().catch((err) => {
  console.error(err);
  process.exit(1);
});
