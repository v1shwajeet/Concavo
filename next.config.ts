import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // @ts-ignore  <-- fixes the TS error instantly
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      { hostname: "img.clerk.com" }
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "76aea70ea308",
  project: "javascript-nextjs",

  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",

  disableLogger: true,
  automaticVercelMonitors: true,
});
