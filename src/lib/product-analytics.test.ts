import assert from "node:assert/strict";
import test from "node:test";

import { PRODUCT_ANALYTICS_EVENTS } from "./product-analytics";

test("product analytics events remain distinct valid GA4 event names", () => {
  const eventNames = Object.values(PRODUCT_ANALYTICS_EVENTS);

  assert.equal(eventNames.length, 9);
  assert.equal(new Set(eventNames).size, eventNames.length);
  eventNames.forEach((eventName) => {
    assert.match(eventName, /^[a-z][a-z0-9_]{0,39}$/);
  });
});
