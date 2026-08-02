import assert from 'node:assert/strict';
import test from 'node:test';

import {
  clampChatPreviewWidth,
  resolveChatPreviewLayout,
} from './chat-preview-layout';

test('wide workspaces reserve about 320px for chat by default', () => {
  assert.deepEqual(resolveChatPreviewLayout(1_100, 0), {
    overlay: false,
    minWidth: 520,
    maxWidth: 780,
    defaultWidth: 780,
  });
});

test('project files panel is excluded before sizing the inline preview', () => {
  assert.deepEqual(resolveChatPreviewLayout(1_100, 260), {
    overlay: false,
    minWidth: 520,
    maxWidth: 520,
    defaultWidth: 520,
  });
});

test('preview becomes an overlay when chat and a useful preview cannot both fit', () => {
  assert.deepEqual(resolveChatPreviewLayout(800, 0), {
    overlay: true,
    minWidth: 520,
    maxWidth: 800,
    defaultWidth: 720,
  });
});

test('resized preview width stays inside the active layout limits', () => {
  const layout = resolveChatPreviewLayout(1_200, 0);
  assert.equal(clampChatPreviewWidth(200, layout), 520);
  assert.equal(clampChatPreviewWidth(2_000, layout), 880);
});

test('browser resizing keeps the chosen preview width until chat reaches its minimum', () => {
  const stillInline = resolveChatPreviewLayout(1_010, 0, 680);
  assert.equal(stillInline.overlay, false);
  assert.equal(clampChatPreviewWidth(680, stillInline), 680);

  const mustOverlay = resolveChatPreviewLayout(999, 0, 680);
  assert.equal(mustOverlay.overlay, true);
  assert.equal(clampChatPreviewWidth(680, mustOverlay), 680);
});

test('overlay preview stays inside the space to the left of project files', () => {
  const layout = resolveChatPreviewLayout(800, 260, 520);
  assert.equal(layout.overlay, true);
  assert.equal(layout.maxWidth, 540);
  assert.equal(clampChatPreviewWidth(700, layout), 540);
});
