import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Hide the dev-only "N" badge; it sat on top of the footer's Address line while testing.
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
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
