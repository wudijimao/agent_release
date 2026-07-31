import { defineConfig, devices } from "@playwright/test";
import path from "node:path";

const visualRoot = path.join(process.cwd(), "visual-tests");
const baseURL = process.env.VISUAL_BASE_URL || "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "./specs",
  outputDir: "./.artifacts/results",
  snapshotPathTemplate:
    "{testDir}/../snapshots/{testFilePath}/{arg}{ext}",
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  forbidOnly: Boolean(process.env.CI),
  reporter: [
    ["list"],
    [
      "json",
      {
        outputFile: `${visualRoot}/.artifacts/results.json`,
      },
    ],
  ],
  expect: {
    timeout: 5_000,
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      maxDiffPixelRatio: 0.005,
      stylePath: `${visualRoot}/screenshot.css`,
    },
  },
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    viewport: { width: 1440, height: 900 },
    colorScheme: "light",
    locale: "zh-CN",
    timezoneId: "Asia/Shanghai",
    serviceWorkers: "block",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
});
