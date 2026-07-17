import assert from "node:assert/strict";
import test from "node:test";

import { createNavigationAdapter, type NextRouterPort } from "./navigation";

test("navigation adapter delegates without changing route values", () => {
  const calls: Array<[string, string?]> = [];
  const router: NextRouterPort = {
    push: (href) => calls.push(["push", href]),
    replace: (href) => calls.push(["replace", href]),
    back: () => calls.push(["back"]),
  };
  const navigation = createNavigationAdapter(router);

  navigation.push("/chat/new?source=home");
  navigation.replace("/login?next=%2Fchat%2Fnew");
  navigation.back();

  assert.deepEqual(calls, [
    ["push", "/chat/new?source=home"],
    ["replace", "/login?next=%2Fchat%2Fnew"],
    ["back"],
  ]);
});
