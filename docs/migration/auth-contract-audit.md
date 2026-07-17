# 认证垂直切片契约审计

审计日期：2026-07-16

## 权威来源

- 视觉与交互：`packages/chatui/src/pages/LoginPage.tsx`、`RegisterPage.tsx`、`ForgotPasswordPage.tsx`。
- 旧前端行为参考：`packages/web/src/components/auth/auth-session-provider.tsx` 与 `packages/web/src/lib/api-client.ts`。
- 真实服务端契约：`packages/server/src/routes/auth.ts`、`packages/server/src/middleware/auth.ts`。
- 跨端 DTO：`@bioagent/shared`。

## 不变迁移边界

- 共享 UI 保留 `LoginPage`、`RegisterPage`、`ForgotPasswordPage` 名称、DOM 层级、响应式布局、粒子背景和可观察交互。
- React Router、Local/Session Storage、计时 Mock 与真实 API 不进入 `@bioagent/chatui`。
- 页面通过 props 取得提交状态、字段/服务端错误和导航回调；Fixture 与 Next Adapter 分别注入实现。
- Next.js 负责 Cookie 会话、`next` 回跳参数、真实 Auth API、401 与 App Router。
- 三页重复的粒子背景和认证卡片允许提炼为 UI 包内部实现，但不得改变视觉结果。

## 页面与真实契约对照

### LoginPage

原型字段和行为与服务端能够一一对应：

- `email`、`password`、`rememberMe` 对应 `POST /api/auth/login` 的 `email`、`password`、`rememberLogin`。
- 成功响应为 `{ data: { user, labs } }`，服务端写入 httpOnly `access_token` Cookie。
- 原型当前通过 `deeptrace-authenticated*` Storage 标志伪造登录并延时跳转；迁移后必须删除。
- `INVALID_CREDENTIALS`、`RATE_LIMITED`、网络错误和重复提交需要进入页面可见错误状态。
- 登录成功后刷新 `/api/auth/me`，再跳转到经过校验的 `next` 或 `/chat/new`。

结论：可以直接进入真实迁移。

### RegisterPage

原型流程：邮箱与验证码 → 邀请码或实验室名称 → 密码 → 成功页。

真实服务端当前提供：

- `POST /api/auth/account-status`：校验邮箱是否已注册。
- `POST /api/auth/invite-status`：校验 6 位邀请码并返回 Lab。
- `POST /api/auth/register`：必填 `email`、`password`、`name`，并要求 `labName` 或 `inviteCode` 二选一；成功后写入 Cookie。

已确认缺口：

- 原型没有 `name` 字段，而服务端必填。
- 原型显示并校验 6 位邮箱验证码，但服务端没有发送或验证注册验证码的接口。
- 原型当前无条件计时并写 Storage，不会调用上述三个真实接口。

结论：Screen 可以先做无副作用提取；真实注册接入前必须确定姓名字段设计，以及注册验证码是补服务端能力还是从当前产品流程移除。

### ForgotPasswordPage

原型流程：邮箱 + 6 位验证码 + 新密码 → 成功页；发送验证码和提交均为本地延时 Mock。

真实服务端只有需要已登录 Cookie 的 `POST /api/auth/change-password`，没有以下公开能力：

- 发起忘记密码请求；
- 发送/校验一次性验证码或重置 Token；
- 未登录状态重置密码。

结论：Screen 可以保留为 Fixture；在服务端补齐安全的找回密码流程前，正式 Next.js 不得伪装成功。

## 路由与会话规则

- `/login`、`/register`、`/forgot-password` 为公开路由；已认证用户访问时跳转 `/chat/new`。
- 未认证用户访问受保护路由时跳转 `/login?next=<原路径和查询参数>`。
- `next` 只允许应用内绝对路径，禁止协议相对 URL、完整外链与反斜杠变体。
- 登录与注册成功后必须调用会话刷新；不得以客户端 Storage 作为认证事实来源。
- 退出只清理服务端 Cookie 与 Next Provider 状态，不再读写 `deeptrace-authenticated*`。

## Stage 3 实施顺序

1. 提取共享认证背景、卡片和 `LoginPage`，用 Fixture 保持原型行为与视觉。
2. 在 Next.js 建立 `/login`，接入真实登录 Adapter、会话刷新和安全回跳。
3. 覆盖空字段、提交中、错误、成功、重复提交、键盘和响应式状态并做双宿主截图对比。
4. 提取 `RegisterPage`，待姓名/验证码产品决策确定后接真实注册。
5. 提取 `ForgotPasswordPage`，待服务端找回密码能力存在后接真实行为。
