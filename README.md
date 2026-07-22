# BioAgent Frontend Release

此仓库由 BioAgent 主仓库的 `scripts/release-frontend.ps1` 自动生成，不要直接修改生成文件。

仓库根目录是 Next.js 应用；`packages/chatui` 包含共享 UI 组件、主题与样式检查；`packages/shared` 包含前后端共享 DTO。

## Vercel

导入本仓库时保持 Root Directory 为仓库根目录，Framework Preset 选择 Next.js。构建配置由 `vercel.json` 提供。

服务端地址默认固定为当前联调环境 `http://39.106.18.219`，开发和线上构建保持一致。需要切换环境时可在 Vercel Project 中配置：

- `BIOAGENT_API_URL`：可选的 BioAgent 服务端根地址，例如 `https://api.example.com`；优先级高于默认值。

运行环境与浏览器基线：

- Node.js 20.9+
- Chrome 111+、Edge 111+、Firefox 111+、Safari 16.4+

本地验证：

```bash
pnpm install --frozen-lockfile
pnpm run release:check
```
