import type { NextConfig } from "next";
import path from "node:path";

const DEFAULT_BACKEND_URL = "http://39.106.18.219";

export const applicationSecurityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: "base-uri 'self'; frame-ancestors 'none'; form-action 'self'; object-src 'none'",
  },
] as const;

export function buildBackendRewrites(backendUrl = DEFAULT_BACKEND_URL) {
  const baseUrl = backendUrl.replace(/\/+$/, "");
  return [
    {
      source: "/api/health",
      destination: `${baseUrl}/health`,
    },
    {
      source: "/api/:path*",
      destination: `${baseUrl}/api/:path*`,
    },
  ];
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(process.env.NEXT_OUTPUT_STANDALONE === "1"
    ? {
        output: "standalone" as const,
        outputFileTracingRoot: process.env.NEXT_OUTPUT_TRACING_ROOT
          ? path.resolve(process.env.NEXT_OUTPUT_TRACING_ROOT)
          : path.resolve(process.cwd(), "../.."),
      }
    : {}),
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...applicationSecurityHeaders],
      },
    ];
  },
  async rewrites() {
    return buildBackendRewrites(
      process.env.BIOAGENT_API_URL ||
        process.env.BACKEND_URL ||
        DEFAULT_BACKEND_URL,
    );
  },
};

export default nextConfig;
