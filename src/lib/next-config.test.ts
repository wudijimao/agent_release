import assert from "node:assert/strict";
import test from "node:test";

import {
  applicationSecurityHeaders,
  buildDevelopmentRewrites,
} from "../../next.config";

test("development rewrites expose health separately from API routes", () => {
  assert.deepEqual(
    buildDevelopmentRewrites("development", "http://backend.test/"),
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
  assert.deepEqual(buildDevelopmentRewrites("production"), []);
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
