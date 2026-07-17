# BioAgent Frontend Release

此仓库由 BioAgent 主仓库的 `scripts/release-frontend.ps1` 自动生成，不要直接修改生成文件。

仓库根目录是 Next.js 应用；`packages/chatui` 包含共享 UI 组件、主题与样式检查；`packages/shared` 包含前后端共享 DTO。

## Vercel

导入本仓库时保持 Root Directory 为仓库根目录，Framework Preset 选择 Next.js。构建配置由 `vercel.json` 提供。

必须在 Vercel Project 中配置服务端地址：

- `BIOAGENT_API_URL`：BioAgent 服务端根地址，例如 `https://api.example.com`。

本地验证：

```bash
pnpm install --frozen-lockfile
pnpm run release:check
```

