import { chromium } from "playwright";
import fs from "fs";

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  const routes = [
    { name: "Home", path: "/" },
    { name: "Shop All", path: "/shop" },
    { name: "Shop Runners", path: "/shop?collection=Runners" },
    { name: "Shop Court", path: "/shop?collection=Court" },
    { name: "Shop Lifestyle", path: "/shop?collection=Lifestyle" },
    { name: "Shopping Bag", path: "/bag" },
    { name: "Product Aero Flux", path: "/shop/aero-flux" },
    { name: "Product Ghost Runner", path: "/shop/ghost-runner" },
    { name: "Product Terra 247", path: "/shop/terra-247" },
    { name: "Product Court Prime", path: "/shop/court-prime" },
    { name: "The Story", path: "/story" },
    { name: "Shipping & Returns", path: "/shipping-returns" },
    { name: "Drop FAQ", path: "/faq" },
    { name: "Concierge Support", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ];

  console.log("=== STARTING ROUTE AUDIT ===");
  const auditResults = [];

  for (const route of routes) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", msg => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", err => consoleErrors.push(err.message));

    const startTime = Date.now();
    try {
      const response = await page.goto(`http://localhost:3000${route.path}`, {
        waitUntil: "networkidle",
        timeout: 10000
      });
      const status = response ? response.status() : 0;
      const duration = Date.now() - startTime;
      const title = await page.title();
      
      const ok = status === 200 && consoleErrors.length === 0;
      console.log(`[${ok ? "PASS" : "FAIL"}] ${route.name} (${route.path}) -> Status: ${status}, Errors: ${consoleErrors.length}, Time: ${duration}ms, Title: "${title}"`);
      if (consoleErrors.length > 0) {
        console.error("   Errors:", consoleErrors);
      }
      auditResults.push({ ...route, status, errors: consoleErrors, duration, title });
    } catch (e) {
      console.error(`[EXCEPTION] ${route.name} (${route.path}):`, e.message);
      auditResults.push({ ...route, status: "ERROR", errors: [e.message] });
    } finally {
      await page.close();
    }
  }

  // Audit Footer and Lookbook on Home page
  console.log("\n=== AUDITING FOOTER & LOOKBOOK ON HOME PAGE ===");
  const homePage = await context.newPage();
  await homePage.goto("http://localhost:3000/?skipIntro=1", { waitUntil: "networkidle" });
  await homePage.waitForTimeout(1000);

  // 1. Lookbook section checks
  const lookbook = homePage.locator("#lookbook");
  await lookbook.scrollIntoViewIfNeeded();
  await homePage.waitForTimeout(1000);
  await lookbook.screenshot({ path: "public/test_lookbook.png" });
  console.log("Captured Lookbook screenshot: public/test_lookbook.png");

  // 2. Section 10 baseline check
  const craftAssemblyCount = await homePage.getByText("CRAFT & ASSEMBLY").count();
  const archivalRevisionCount = await homePage.getByText("ARCHIVAL REVISION 1.0").count();
  console.log("Craft & Assembly text occurrences (should be 0):", craftAssemblyCount);
  console.log("Archival Revision 1.0 text occurrences (should be 0):", archivalRevisionCount);

  // 3. Footer checks
  const footer = homePage.locator("footer");
  await footer.scrollIntoViewIfNeeded();
  await homePage.waitForTimeout(1000);
  await footer.screenshot({ path: "public/test_footer.png" });
  console.log("Captured Footer screenshot: public/test_footer.png");

  const facebookCount = await footer.getByText("FACEBOOK").count();
  const authenticatedArchiveCount = await footer.getByText("AUTHENTICATED ARCHIVE").count();
  const byAnarGadirliCount = await footer.getByText("BY ANAR GADIRLI").count();

  console.log("Facebook text occurrences in footer (should be 0):", facebookCount);
  console.log("Authenticated Archive text occurrences in footer (should be 0):", authenticatedArchiveCount);
  console.log("By Anar Gadirli occurrences in footer (should be >= 1):", byAnarGadirliCount);

  const socials = ["INSTAGRAM", "X", "TIKTOK", "YOUTUBE"];
  for (const s of socials) {
    const count = await footer.getByText(s).count();
    console.log(`Social "${s}" present (should be >= 1):`, count);
  }

  await browser.close();
}

main().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
