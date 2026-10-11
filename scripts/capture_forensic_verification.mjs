import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  console.log("1. Capturing Preloader at 1000ms (staggered letters + underline)...");
  await page.goto("http://localhost:3000", { waitUntil: "commit" });
  await page.waitForTimeout(1000); // 1000ms: staggered wordmark and expanding underline visible
  await page.screenshot({ path: "public/preloader_staggered.png" });

  console.log("2. Capturing Clean Hero Section...");
  // Navigate with skipIntro=1 to jump directly to hero
  await page.goto("http://localhost:3000?skipIntro=1", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.screenshot({ path: "public/hero_forensic_clean.png" });

  console.log("3. Scrolling to Section 02...");
  const section02 = await page.$("#section02");
  if (section02) {
    await section02.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: "public/section02_forensic_rest.png" });

    console.log("4. Hovering over '8 MM DROP' to trigger 3D Flip to 'HEEL STOCK'...");
    // Find card with text '8 MM DROP'
    const dropCard = await page.locator("text=8 MM DROP").first();
    if (await dropCard.count() > 0) {
      await dropCard.hover();
      await page.waitForTimeout(600);
      await page.screenshot({ path: "public/section02_card_flipped.png" });
    }
  }

  await browser.close();
  console.log("All forensic screenshots captured successfully!");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
