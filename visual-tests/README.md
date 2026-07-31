# Next.js 截图回归测试

这套测试与 `src/**/*.test.ts` 单元测试分开，使用 Playwright Chromium
在真实浏览器中验证页面外观和网络异常状态。接口全部由测试拦截，不会使用真实账号，
也不会向正式服务端写数据。

当前仓库中的 5 张基线只覆盖测试基础设施和登录入口冒烟，不代表功能已经完整覆盖。
全量功能分类、优先级、场景编号和实施顺序见
[`TEST_MATRIX.md`](./TEST_MATRIX.md)。

## 目录

- `specs/normal/`：正常页面和主要用户流程。
- `specs/resilience/slow-network.spec.ts`：请求未完成时的加载、禁用和防重复提交状态。
- `specs/resilience/api-error.spec.ts`：4xx/5xx、重试入口和用户可理解的错误文案。
- `fixtures/`：统一的接口模拟、慢请求闸门和截图稳定工具。
- `snapshots/`：需要提交到 Git 的视觉基线。
- `.artifacts/`：失败截图、差异图、Trace 和机器可读测试结果，已被 Git 忽略。

## 首次安装

在仓库根目录执行：

```powershell
pnpm --filter @bioagent/nextjs test:visual:install
```

## 执行测试

```powershell
pnpm --filter @bioagent/nextjs test:visual
```

默认流程会先执行生产构建，再由 `run.mjs` 在 `127.0.0.1:3100`
启动 Next.js。测试结束后运行器会显式关闭整个服务进程树，避免 Windows
环境残留测试服务。
如果已经有待测服务，可跳过自动启动：

```powershell
$env:VISUAL_BASE_URL = "http://127.0.0.1:3000"
pnpm --filter @bioagent/nextjs test:visual:existing
```

## 更新基线

确认 UI 修改符合预期后才执行：

```powershell
pnpm --filter @bioagent/nextjs test:visual:update
```

更新后必须人工检查 `visual-tests/snapshots/` 中的图片，再提交。

失败产物包含实际截图、预期截图、像素差异和 Trace。截图比较和网络拦截分别使用
Playwright 的 `toHaveScreenshot()` 与 `page.route()`；终端失败信息会给出
对应产物和 Trace 的打开命令。
