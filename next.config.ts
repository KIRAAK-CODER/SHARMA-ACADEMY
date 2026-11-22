import type { NextConfig } from "next";

// GitHub Pages serves this site from https://kiraak-coder.github.io/SHARMA-ACADEMY/
// so production builds need the repo name as basePath. In dev (and Playwright tests)
// there is no basePath, so localhost:3000/ keeps working.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // static HTML into /out (GitHub Pages has no Node server)
  basePath: isProd ? "/SHARMA-ACADEMY" : "",
  trailingSlash: true, // /batches/ -> batches/index.html, works on any static host
  images: { unoptimized: true }, // image optimizer needs a server
  // Hide the dev-only "N" badge; it sat on top of the footer's Address line while testing.
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
