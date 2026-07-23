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

## Docker 服务器部署

发布仓库已包含独立 Docker 配置。服务器首次克隆、以后拉取新代码后，都在仓库根目录无参数执行：

```bash
bash deploy.sh
```

脚本会依次：

1. 使用当前 Git 提交号作为镜像标签构建 Next.js standalone 镜像。
2. 保留正在运行的容器作为临时回滚版本。
3. 启动新容器并等待健康检查。
4. 成功后删除旧容器；失败则自动恢复旧容器。

默认值：

- 镜像：`bioagent-nextjs:<当前提交号>`
- 容器：`bioagent-nextjs`
- 公网端口：`3002`
- 服务端地址：`http://39.106.18.219`

访问地址：

```text
http://<服务器IP>:3002
```

没有必填参数。如需覆盖默认值，可以在执行脚本时传入环境变量：

```bash
BIOAGENT_NEXTJS_PORT=3003 \
BIOAGENT_API_URL=http://127.0.0.1:3000 \
bash deploy.sh
```

常用运维命令：

```bash
docker ps --filter name=bioagent-nextjs
docker logs -f bioagent-nextjs
docker inspect --format '{{.State.Health.Status}}' bioagent-nextjs
```

直接暴露 `3002` 不需要 Nginx，但服务器防火墙和阿里云安全组需要放行该端口。正式 HTTPS 环境仍建议由 Nginx、Caddy 或云负载均衡代理到该端口。
