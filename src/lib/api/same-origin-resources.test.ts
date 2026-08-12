import assert from "node:assert/strict";
import test from "node:test";

import { rewriteServiceResourceUrls } from "./same-origin-resources";

test("service object URLs are rewritten to the Next.js same-origin proxy", () => {
  assert.deepEqual(
    rewriteServiceResourceUrls({
      avatarUrl:
        "http://39.106.18.219/bioagent-docs/avatars/user-1/avatar.png",
      uploadUrl:
        "http://39.106.18.219/bioagent-docs/chat/file.pdf?X-Amz-Signature=abc",
      nested: [
        "![figure](http://39.106.18.219/bioagent-docs/derived/figure.png)",
      ],
      externalUrl: "https://example.test/image.png",
    }),
    {
      avatarUrl: "/bioagent-docs/avatars/user-1/avatar.png",
      uploadUrl: "/bioagent-docs/chat/file.pdf?X-Amz-Signature=abc",
      nested: ["![figure](/bioagent-docs/derived/figure.png)"],
      externalUrl: "https://example.test/image.png",
    },
  );
});
