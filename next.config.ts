import type { NextConfig } from "next";

const DEVELOPMENT_BACKEND_URL = "http://39.106.18.219";

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

export function buildDevelopmentRewrites(
  nodeEnv: string | undefined,
  backendUrl = DEVELOPMENT_BACKEND_URL,
) {
  if (nodeEnv !== "development") return [];

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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [...applicationSecurityHeaders],
      },
    ];
  },
  async rewrites() {
    return buildDevelopmentRewrites(
      process.env.NODE_ENV,
      process.env.BACKEND_URL || DEVELOPMENT_BACKEND_URL,
    );
  },
};

export default nextConfig;
