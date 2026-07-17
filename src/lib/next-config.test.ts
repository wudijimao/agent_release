import assert from "node:assert/strict";
import test from "node:test";

import {
  applicationSecurityHeaders,
  buildBackendRewrites,
} from "../../next.config";

test("backend rewrites expose health separately from API routes in every environment", () => {
  assert.deepEqual(
    buildBackendRewrites("http://backend.test/"),
    [
      {
        source: "/api/health",
        destination: "http://backend.test/health",
      },
      {
        source: "/api/:path*",
        destination: "http://backend.test/api/:path*",
      },
    ],
  );
  assert.deepEqual(buildBackendRewrites(), [
    {
      source: "/api/health",
      destination: "http://39.106.18.219/health",
    },
    {
      source: "/api/:path*",
      destination: "http://39.106.18.219/api/:path*",
    },
  ]);
});

test("application responses carry the migrated security header policy", () => {
  const headers = new Map(
    applicationSecurityHeaders.map(({ key, value }) => [key, value]),
  );

  assert.equal(headers.get("X-Frame-Options"), "DENY");
  assert.equal(headers.get("X-Content-Type-Options"), "nosniff");
  assert.match(headers.get("Content-Security-Policy") || "", /frame-ancestors 'none'/);
  assert.match(headers.get("Permissions-Policy") || "", /camera=\(\)/);
});
