import { chromium } from "playwright";

async function testStorefront() {
  console.log("=== TESTING END-TO-END STOREFRONT FLOW ===");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  // 1. Visit /shop
  console.log("1. Visiting /shop...");
  await page.goto("http://localhost:3000/shop", { waitUntil: "networkidle" });
  const shopHeading = await page.textContent("h1");
  console.log("   Shop Heading:", shopHeading?.trim());
  if (!shopHeading?.includes("ALL SHOES")) throw new Error("Shop heading mismatch");

  // 2. Test Filters
  console.log("2. Testing Collection filter: Runners...");
  await page.click('button:has-text("Runners")');
  await page.waitForTimeout(300);
  const badgeText = await page.textContent("span:has-text('OF 9')");
  console.log("   Filtered badge:", badgeText?.trim());

  // 3. Navigate to Aero Flux
  console.log("3. Navigating to /shop/aero-flux...");
  await page.goto("http://localhost:3000/shop/aero-flux", { waitUntil: "networkidle" });
  const productHeading = await page.textContent("h1");
  console.log("   Product Heading:", productHeading?.trim());
  if (!productHeading?.includes("AERO FLUX")) throw new Error("Product heading mismatch");

  // 4. Test Add to Bag
  console.log("4. Selecting size 10 and adding to bag...");
  await page.click('button:has-text("10")');
  const addBtn = page.locator('button:has-text("ADD TO BAG")');
  await addBtn.click();
  await page.waitForTimeout(500);

  // Check drawer
  const bagTitle = await page.locator('h2:has-text("YOUR BAG")').isVisible();
  console.log("   Bag Drawer Open:", bagTitle);
  if (!bagTitle) throw new Error("Bag drawer did not open after add to bag");

  // 5. Navigate to /checkout
  console.log("5. Navigating to /checkout...");
  await page.goto("http://localhost:3000/checkout", { waitUntil: "networkidle" });
  const checkoutHeading = await page.textContent("h1");
  console.log("   Checkout Heading:", checkoutHeading?.trim());
  if (!checkoutHeading?.includes("CHECKOUT")) throw new Error("Checkout heading mismatch");

  // 6. Test Shipping selection & Place Order
  console.log("6. Selecting Express delivery and placing demo order...");
  const expressOption = page.locator('span:has-text("Express Priority")');
  if (await expressOption.isVisible()) {
    await expressOption.click();
  }
  const continueBtn = page.locator('button:has-text("CONTINUE TO PAYMENT")');
  if (await continueBtn.isVisible()) {
    await continueBtn.click();
    await page.waitForTimeout(300);
  }
  const placeOrderBtn = page.locator('button:has-text("PLACE DEMO ORDER")');
  await placeOrderBtn.click();
  await page.waitForURL(/order-confirmation/, { timeout: 5000 });
  console.log("   Arrived at URL:", page.url());

  // 7. Verify Extension Pages
  console.log("7. Verifying extension static pages...");
  const pagesToTest = [
    { url: "/story", heading: "ENGINEERED WITHOUT COMPROMISE" },
    { url: "/shipping-returns", heading: "SHIPPING & RETURNS" },
    { url: "/faq", heading: "FREQUENT QUESTIONS" },
    { url: "/contact", heading: "CONCIERGE & SUPPORT" },
    { url: "/privacy", heading: "PRIVACY POLICY" },
    { url: "/terms", heading: "TERMS OF SERVICE" },
    { url: "/order-confirmation?orderId=not-found", heading: "ORDER NOT FOUND" },
  ];

  for (const p of pagesToTest) {
    await page.goto(`http://localhost:3000${p.url}`, { waitUntil: "networkidle" });
    const h1 = await page.textContent("h1");
    console.log(`   ${p.url} -> ${h1?.trim()}`);
    if (!h1?.toUpperCase().includes(p.heading)) {
      throw new Error(`Heading mismatch on ${p.url}: got "${h1}"`);
    }
  }

  console.log("\n=== ALL STOREFRONT TESTS PASSED! ===");
  await browser.close();
}

testStorefront().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
