import type { MetadataRoute } from "next";
import { DEMO_MODE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  if (DEMO_MODE) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://srigen.example.com/sitemap.xml",
  };
}
