import { spawn, spawnSync } from "node:child_process";
import { mkdir, readFile, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const visualRoot = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.dirname(visualRoot);
const externalBaseURL = process.env.VISUAL_BASE_URL;
const baseURL = externalBaseURL || "http://127.0.0.1:3100";
const playwrightCli = require.resolve("@playwright/test/cli");
const nextCli = require.resolve("next/dist/bin/next");
const reportPath = path.join(visualRoot, ".artifacts", "results.json");

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function waitForServer(server) {
  const deadline = Date.now() + 60_000;

  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(
        `Visual test server exited before becoming ready (code ${server.exitCode}).`,
      );
    }

    try {
      const response = await fetch(baseURL, { redirect: "manual" });
      if (response.status > 0) return;
    } catch {
      // The server is still starting.
    }

    await wait(250);
  }

  throw new Error(`Visual test server did not become ready: ${baseURL}`);
}

function stopProcessTree(child) {
  if (!child.pid || child.exitCode !== null) return;

  if (process.platform === "win32") {
    spawnSync(
      "taskkill",
      ["/PID", String(child.pid), "/T", "/F"],
      { stdio: "ignore" },
    );
    return;
  }

  child.kill("SIGTERM");
}

function waitForExit(child) {
  return new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      resolve(code ?? (signal ? 1 : 0));
    });
  });
}

async function waitForJsonReport(testProcess) {
  while (testProcess.exitCode === null) {
    try {
      const report = JSON.parse(await readFile(reportPath, "utf8"));
      const unexpected = Number(report?.stats?.unexpected ?? 0);
      return unexpected > 0 ? 1 : 0;
    } catch {
      await wait(250);
    }
  }

  return testProcess.exitCode ?? 1;
}

await mkdir(path.dirname(reportPath), { recursive: true });
await rm(reportPath, { force: true });

const server = externalBaseURL
  ? null
  : spawn(
      process.execPath,
      [nextCli, "start", "--hostname", "127.0.0.1", "--port", "3100"],
      {
        cwd: appRoot,
        env: process.env,
        stdio: "inherit",
        windowsHide: true,
      },
    );

let exitCode = 1;

try {
  if (server) await waitForServer(server);

  const testProcess = spawn(
    process.execPath,
    [
      playwrightCli,
      "test",
      "-c",
      path.join(visualRoot, "playwright.config.ts"),
      ...process.argv.slice(2),
    ],
    {
      cwd: appRoot,
      env: {
        ...process.env,
        VISUAL_BASE_URL: baseURL,
      },
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: true,
    },
  );

  testProcess.stdout.pipe(process.stdout, { end: false });
  testProcess.stderr.pipe(process.stderr, { end: false });

  const naturalExit = waitForExit(testProcess);
  exitCode =
    process.platform === "win32"
      ? await Promise.race([naturalExit, waitForJsonReport(testProcess)])
      : await naturalExit;
  stopProcessTree(testProcess);
  testProcess.stdout.destroy();
  testProcess.stderr.destroy();
} finally {
  if (server) stopProcessTree(server);
}

process.exit(exitCode);
