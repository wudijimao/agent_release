import { useMemo, useState, type ReactNode } from "react";
import { MoreHorizontal, Pencil, Pin, Share2, Trash2 } from "lucide-react";
import {
  BaseActionMenu,
  BaseButton,
  BaseCard,
  BaseEmpty,
  BaseInput,
  BaseModal,
  BasePagination,
  BaseSegmented,
  BaseSelect,
  BaseTable,
  BaseUpload,
  AssistantActions,
  InputArea,
  MessageItem,
  MessageList,
  QuickPrompts,
  ThinkingIndicator,
  type AssistantFeedback,
  type BaseTableColumn,
  type ChatFileOption,
  type ChatMessage,
  type ChatSkillOption,
} from "..";
import logoUrl from "../../../../src/assets/deptrace-logo.png";
import { DesignSystemReference } from "./DesignSystemReference";

interface ShowcaseSectionProps {
  title: string;
  children: ReactNode;
}

type TableRow = Record<string, unknown> & {
  id: number;
  name: string;
  email: string;
  status: "活跃" | "已停用";
};

const demoSkillOptions: ChatSkillOption[] = [
  {
    id: "literature",
    badge: "文",
    description: "检索并整理相关论文",
    source: "系统技能",
  },
  {
    id: "experiment",
    badge: "实",
    description: "生成实验设计与执行步骤",
    source: "团队技能",
  },
  {
    id: "restricted",
    badge: "限",
    description: "需要配置凭据后使用",
    source: "团队技能",
    disabled: true,
    disabledReason: "缺 Secret",
  },
];

const demoFileOptions: ChatFileOption[] = [
  {
    id: "file-1",
    name: "实验记录.md",
    projectId: "project-1",
    projectName: "CRISPR 实验优化",
    sourceType: "最近操作",
    isRecent: true,
    operatorName: "王平",
    operatedAt: "今天 10:20",
  },
  {
    id: "file-2",
    name: "测序结果.xlsx",
    projectId: "project-1",
    projectName: "CRISPR 实验优化",
    sourceType: "项目文件",
    isRecent: false,
  },
];

const demoUserMessage: ChatMessage = {
  role: "user",
  content: "请帮我总结这份实验记录。",
  references: [{ id: "literature", type: "skill", label: "文献检索" }],
  attachments: [
    {
      id: "attachment-image",
      name: "实验图片.png",
      mimeType: "image/png",
      previewUrl: logoUrl,
    },
    { id: "attachment-1", name: "实验记录.md", mimeType: "text/markdown" },
  ],
};

const demoAssistantMessage: ChatMessage = {
  role: "assistant",
  content:
    "## 实验总结\n\n本轮实验完成了候选序列筛选，建议下一步重点验证 **候选 07**。\n\n- 编辑效率达到预期\n- 脱靶风险较低\n- 需要补充重复实验",
};

const demoAttachmentStatusMessage: ChatMessage = {
  role: "user",
  content: "附件状态示例",
  attachments: [
    {
      id: "attachment-uploading",
      name: "正在解析的实验记录.pdf",
      mimeType: "application/pdf",
      status: "uploading",
    },
    {
      id: "attachment-error",
      name: "无法读取的附件.csv",
      mimeType: "text/csv",
      status: "error",
      errorMessage: "附件上传失败，请重试",
    },
  ],
};

const ShowcaseSection = ({ title, children }: ShowcaseSectionProps) => (
  <section className="rounded-xl bg-surface p-8 shadow-lg">
    <h2 className="mb-6 pb-4 text-2xl font-bold text-strongText">{title}</h2>
    {children}
  </section>
);

const Subheading = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-4 text-lg font-semibold text-emphasisText">{children}</h3>
);

const EmptyIllustration = () => (
  <svg
    width="184"
    height="152"
    viewBox="0 0 184 152"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto select-none"
  >
    <circle
      cx="92"
      cy="76"
      r="54"
      fill="var(--chatui-color-brand-primary-soft)"
    />
    <rect
      x="52"
      y="47"
      width="80"
      height="54"
      rx="8"
      fill="var(--chatui-color-line-soft)"
    />
    <rect
      x="52"
      y="44"
      width="80"
      height="54"
      rx="8"
      fill="var(--chatui-color-surface)"
      stroke="var(--chatui-color-border-soft)"
      strokeWidth="1.2"
    />
    <rect
      x="64"
      y="56"
      width="36"
      height="5"
      rx="2.5"
      fill="var(--chatui-color-surface-muted)"
    />
    <rect
      x="64"
      y="67"
      width="56"
      height="4"
      rx="2"
      fill="var(--chatui-color-surface-muted)"
    />
    <rect
      x="64"
      y="77"
      width="44"
      height="4"
      rx="2"
      fill="var(--chatui-color-surface-muted)"
    />
    <circle cx="116" cy="58" r="2" fill="var(--chatui-color-control-border)" />
    <line
      x1="123"
      y1="92"
      x2="133"
      y2="102"
      stroke="var(--chatui-color-line-soft)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle
      cx="112"
      cy="82"
      r="14"
      fill="var(--chatui-color-brand-primary-soft)"
    />
    <circle
      cx="112"
      cy="81"
      r="14"
      fill="var(--chatui-color-surface)"
      stroke="var(--chatui-color-brand-primary)"
      strokeWidth="2.5"
    />
    <circle
      cx="112"
      cy="81"
      r="11.5"
      fill="var(--chatui-color-brand-primary-soft)"
    />
    <line
      x1="122"
      y1="91"
      x2="132"
      y2="101"
      stroke="var(--chatui-color-brand-primary)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="124.5"
      y1="93.5"
      x2="130"
      y2="99"
      stroke="var(--chatui-color-brand-primary-hover)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M109.5 78c0-1.5 1.2-2.5 2.5-2.5s2.5 1 2.5 2.5c0 1.2-.8 1.7-1.7 2.5-.8.7-.8 2-.8 2M112 85v.5"
      stroke="var(--chatui-color-brand-primary)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="m44 34 1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5Z"
      fill="var(--chatui-color-brand-primary-soft-strong)"
    />
    <path
      d="m142 108 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"
      fill="var(--chatui-color-brand-primary-soft-strong)"
    />
  </svg>
);

export function ComponentShowcase() {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [selectValue, setSelectValue] = useState("user");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [uploadFiles, setUploadFiles] = useState<FileList | null>(null);
  const [assistantFeedback, setAssistantFeedback] =
    useState<AssistantFeedback>();
  const [chatEvent, setChatEvent] = useState("等待交互");

  const tableData = useMemo<TableRow[]>(
    () => [
      { id: 1, name: "张三", email: "zhangsan@example.com", status: "活跃" },
      { id: 2, name: "李四", email: "lisi@example.com", status: "已停用" },
      { id: 3, name: "王五", email: "wangwu@example.com", status: "活跃" },
      { id: 4, name: "赵六", email: "zhaoliu@example.com", status: "活跃" },
      { id: 5, name: "孙七", email: "sunqi@example.com", status: "已停用" },
    ],
    [],
  );

  const tableColumns = useMemo<BaseTableColumn<TableRow>[]>(
    () => [
      { title: "ID", dataIndex: "id", width: "10%" },
      { title: "名称", dataIndex: "name", width: "25%" },
      { title: "邮箱", dataIndex: "email", width: "35%" },
      {
        title: "状态",
        dataIndex: "status",
        align: "left",
        render: (status) => (
          <span
            className={
              status === "活跃"
                ? "rounded-full bg-success-soft py-1 text-sm text-success"
                : "rounded-full bg-surfaceMuted py-1 text-sm text-secondaryText"
            }
          >
            {String(status)}
          </span>
        ),
      },
      {
        title: "操作",
        dataIndex: "id",
        key: "actions",
        render: () => (
          <div className="space-x-4">
            <button
              type="button"
              className="border-0 bg-transparent p-0 text-secondaryText transition-colors hover:text-primary"
            >
              编辑
            </button>
            <button
              type="button"
              className="border-0 bg-transparent p-0 text-danger transition-colors hover:text-danger-hover"
            >
              删除
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  const actionMenuItems = [
    { key: "rename", label: "重命名", icon: <Pencil size={18} /> },
    { key: "share", label: "分享对话", icon: <Share2 size={18} /> },
    { key: "pin", label: "取消置顶", icon: <Pin size={18} /> },
    { key: "delete", label: "删除", icon: <Trash2 size={18} />, danger: true },
  ];

  return (
    <main className="fixed inset-0 overflow-auto bg-gradient-to-br from-primary-soft to-primary-soft-strong p-8 font-sans text-primaryText">
      <div className="mx-auto w-full max-w-6xl space-y-12 pb-12">
        <header className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold text-strongText">
            📦 组件库完整展示
          </h1>
          <p className="text-lg text-secondaryText">
            所有公共组件的实际效果和样式演示
          </p>
        </header>

        <ShowcaseSection title="🔘 BaseButton - 按钮组件">
          <div className="mb-8">
            <Subheading>按钮类型：</Subheading>
            <div className="flex flex-wrap gap-4">
              <BaseButton type="primary">Primary</BaseButton>
              <BaseButton type="secondary">Secondary</BaseButton>
              <BaseButton type="ghost">Ghost</BaseButton>
              <BaseButton type="danger">Danger</BaseButton>
            </div>
          </div>
          <div className="mb-8">
            <Subheading>按钮尺寸：</Subheading>
            <div className="flex flex-wrap items-center gap-4">
              <BaseButton type="primary" size="small">
                Small
              </BaseButton>
              <BaseButton type="primary" size="medium">
                Medium
              </BaseButton>
              <BaseButton type="primary" size="large">
                Large
              </BaseButton>
            </div>
          </div>
          <div className="mb-8">
            <Subheading>加载状态：</Subheading>
            <div className="flex flex-wrap gap-4">
              <BaseButton
                type="primary"
                isLoading={buttonLoading}
                onClick={() => {
                  setButtonLoading(true);
                  window.setTimeout(() => setButtonLoading(false), 2000);
                }}
              >
                {buttonLoading ? "加载中..." : "点击加载"}
              </BaseButton>
              <BaseButton type="primary" disabled>
                Disabled
              </BaseButton>
            </div>
          </div>
          <div className="mb-4">
            <Subheading>全宽按钮：</Subheading>
            <BaseButton type="primary" fullWidth>
              Full Width Button
            </BaseButton>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="📝 BaseInput - 输入框组件">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Subheading>基础输入框：</Subheading>
              <BaseInput
                label="用户名"
                placeholder="输入用户名"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                clearable
              />
            </div>
            <div>
              <Subheading>密码输入框：</Subheading>
              <BaseInput
                label="密码"
                type="password"
                placeholder="输入密码"
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
            </div>
            <div>
              <Subheading>错误状态：</Subheading>
              <BaseInput
                label="邮箱"
                type="email"
                placeholder="输入邮箱"
                error={Boolean(inputError)}
                helperText={inputError || "请输入有效的邮箱地址"}
                value={inputError ? "invalid-email" : ""}
                onChange={(event) =>
                  setInputError(
                    event.target.value.includes("@") ? "" : "邮箱格式不正确",
                  )
                }
              />
            </div>
            <div>
              <Subheading>输入框尺寸：</Subheading>
              <div className="space-y-3">
                <BaseInput size="small" placeholder="Small Input" />
                <BaseInput size="medium" placeholder="Medium Input" />
                <BaseInput size="large" placeholder="Large Input" />
              </div>
            </div>
            <div>
              <Subheading>前缀输入框：</Subheading>
              <BaseInput prefix="¥" placeholder="输入金额" />
            </div>
            <div>
              <Subheading>禁用状态：</Subheading>
              <BaseInput placeholder="禁用的输入框" disabled value="不能编辑" />
            </div>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="⬇️ BaseSelect - 选择框组件">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Subheading>基础选择：</Subheading>
              <BaseSelect
                label="用户角色"
                options={[
                  { label: "管理员", value: "admin" },
                  { label: "普通用户", value: "user" },
                  { label: "访客", value: "guest" },
                ]}
                value={selectValue}
                onChange={(value) => setSelectValue(String(value))}
              />
            </div>
            <div>
              <Subheading>禁用选项：</Subheading>
              <BaseSelect
                label="选择部门"
                options={[
                  { label: "技术部", value: "tech" },
                  { label: "产品部", value: "product", disabled: true },
                  { label: "设计部", value: "design" },
                ]}
              />
            </div>
            <div>
              <Subheading>错误状态：</Subheading>
              <BaseSelect
                label="选择城市"
                error
                helperText="请选择一个城市"
                options={[
                  { label: "北京", value: "bj" },
                  { label: "上海", value: "sh" },
                ]}
              />
            </div>
            <div>
              <Subheading>不同尺寸：</Subheading>
              <div className="space-y-3">
                <BaseSelect
                  size="small"
                  options={[
                    { label: "小", value: "s" },
                    { label: "大", value: "l" },
                  ]}
                />
                <BaseSelect
                  size="medium"
                  options={[{ label: "中等", value: "m" }]}
                />
                <BaseSelect
                  size="large"
                  options={[{ label: "大", value: "l" }]}
                />
              </div>
            </div>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="◫ BaseSegmented - 分段选择组件">
          <div className="space-y-6">
            <div>
              <Subheading>不同尺寸：</Subheading>
              <div className="flex flex-wrap items-center gap-4">
                <BaseSegmented
                  size="small"
                  defaultValue="all"
                  options={[{ label: '全部', value: 'all' }, { label: '进行中', value: 'active' }]}
                />
                <BaseSegmented
                  defaultValue="all"
                  options={[{ label: '全部', value: 'all' }, { label: '进行中', value: 'active' }]}
                />
                <BaseSegmented
                  size="large"
                  defaultValue="all"
                  options={[{ label: '全部', value: 'all' }, { label: '进行中', value: 'active' }]}
                />
              </div>
            </div>
            <div>
              <Subheading>禁用状态：</Subheading>
              <BaseSegmented
                disabled
                defaultValue="all"
                options={[{ label: '全部', value: 'all' }, { label: '进行中', value: 'active' }]}
              />
            </div>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="⋯ BaseActionMenu - 操作菜单">
          <div className="flex flex-wrap items-center gap-6">
            <BaseActionMenu
              trigger={
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bgLight text-primaryText transition-colors hover:bg-surfaceMuted"
                  aria-label="更多操作"
                >
                  <MoreHorizontal size={20} />
                </span>
              }
              items={actionMenuItems}
              open={isActionMenuOpen}
              onOpenChange={setIsActionMenuOpen}
              onItemClick={(item) => {
                window.alert(`点击：${item.label}`);
                setIsActionMenuOpen(false);
              }}
              placement="bottom-start"
              width={360}
            />
            <p className="text-sm text-secondaryText">
              点击左侧按钮可打开“切换选项”的操作弹层（Action Menu）。
            </p>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="🎴 BaseCard - 卡片组件">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <BaseCard title="基础卡片" bordered>
              <p className="text-secondaryText">
                这是一个基础的卡片组件，包含标题和内容。
              </p>
            </BaseCard>
            <BaseCard title="可悬停卡片" hoverable>
              <p className="text-secondaryText">
                鼠标悬停时会显示阴影效果，并且可以添加额外操作。
              </p>
            </BaseCard>
            <BaseCard title="加载中" loading>
              <p className="text-secondaryText">
                这个卡片处于加载状态，会显示半透明遮罩。
              </p>
            </BaseCard>
            <BaseCard
              title="自定义内容"
              extra={
                <div className="space-x-4">
                  <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-secondaryText hover:text-primary"
                  >
                    操作1
                  </button>
                  <button
                    type="button"
                    className="border-0 bg-transparent p-0 text-secondaryText hover:text-primary"
                  >
                    操作2
                  </button>
                </div>
              }
            >
              <div className="grid grid-cols-3 gap-4 pt-1">
                <div className="rounded bg-primary-soft p-3 text-center">
                  <div className="text-2xl font-bold text-primaryText">
                    1,234
                  </div>
                  <div className="text-sm text-primaryText">访问量</div>
                </div>
                <div className="rounded bg-success-soft p-3 text-center">
                  <div className="text-2xl font-bold text-primaryText">567</div>
                  <div className="text-sm text-primaryText">用户数</div>
                </div>
                <div className="rounded bg-warning-soft p-3 text-center">
                  <div className="text-2xl font-bold text-primaryText">89</div>
                  <div className="text-sm text-primaryText">订单数</div>
                </div>
              </div>
            </BaseCard>
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="📦 BaseModal - 弹窗组件">
          <div className="mb-6">
            <BaseButton type="primary" onClick={() => setIsModalOpen(true)}>
              打开弹窗
            </BaseButton>
          </div>
          <BaseModal
            visible={isModalOpen}
            title="新建用户"
            okText="创建"
            cancelText="取消"
            onConfirm={() => {
              setIsModalOpen(false);
              window.alert(`创建用户: ${formData.name} (${formData.email})`);
            }}
            onCancel={() => setIsModalOpen(false)}
          >
            <div className="space-y-4">
              <BaseInput
                label="用户名"
                placeholder="输入用户名"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
              <BaseInput
                label="邮箱"
                type="email"
                placeholder="输入邮箱"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
              <BaseSelect
                label="角色"
                options={[
                  { label: "管理员", value: "admin" },
                  { label: "编辑", value: "editor" },
                  { label: "查看者", value: "viewer" },
                ]}
              />
            </div>
          </BaseModal>
          <p className="mt-4 text-secondaryText">
            点击上面的按钮打开弹窗，体验模态框的效果。
          </p>
        </ShowcaseSection>

        <ShowcaseSection title="📊 BaseTable - 表格组件">
          <BaseTable<TableRow>
            columns={tableColumns}
            dataSource={tableData}
            rowKey="id"
            bordered
            striped
          />
          <BasePagination
            current={currentPage}
            total={tableData.length * 3}
            pageSize={5}
            onChange={setCurrentPage}
            className="mt-4"
          />
        </ShowcaseSection>

        <ShowcaseSection title="📄 BasePagination - 分页组件">
          <BasePagination
            current={currentPage}
            total={100}
            pageSize={pageSize}
            onChange={setCurrentPage}
            showSizeChanger
            onShowSizeChange={(page, nextPageSize) => {
              setCurrentPage(page);
              setPageSize(nextPageSize);
            }}
          />
        </ShowcaseSection>

        <ShowcaseSection title="📤 BaseUpload - 文件上传组件">
          <BaseUpload
            accept=".jpg,.png,.pdf"
            multiple
            onChange={(files) => {
              setUploadFiles(files);
              window.alert(`已选择 ${files.length} 个文件`);
            }}
            onError={(error) => window.alert(`错误: ${error.message}`)}
          >
            <div className="text-center">
              <p className="mb-2 text-lg font-semibold text-emphasisText">
                🎯 点击选择文件或拖拽到此
              </p>
              <p className="text-sm text-mutedText">支持 JPG, PNG, PDF 格式</p>
            </div>
          </BaseUpload>
          {uploadFiles && (
            <div className="mt-6 rounded-lg bg-success-soft p-4">
              <p className="font-semibold text-success">
                ✓ 已选择 {uploadFiles.length} 个文件
              </p>
              <ul className="mt-2 space-y-1">
                {Array.from(uploadFiles).map((file) => (
                  <li
                    key={`${file.name}-${file.lastModified}`}
                    className="text-sm text-success"
                  >
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ShowcaseSection>

        <ShowcaseSection title="🫙 BaseEmpty - 空状态组件">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <BaseEmpty description="暂无数据" />
            <BaseEmpty
              description="没有找到相关内容"
              image={<EmptyIllustration />}
            />
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="💬 QuickPrompts - 快捷提示组件">
          <QuickPrompts
            onSelect={(prompt) => setChatEvent(`选择快捷提示：${prompt}`)}
          />
          <p className="mt-4 text-center text-sm text-secondaryText">
            {chatEvent}
          </p>
        </ShowcaseSection>

        <ShowcaseSection title="⌨️ InputArea - 聊天输入组件">
          <InputArea
            disabled={false}
            skillOptions={demoSkillOptions}
            fileOptions={demoFileOptions}
            onSend={(payload) =>
              setChatEvent(
                `发送：${payload.content}（${payload.attachments.length} 个附件）`,
              )
            }
          />
          <p className="mt-4 text-center text-sm text-secondaryText">
            {chatEvent}
          </p>
        </ShowcaseSection>

        <ShowcaseSection title="✨ ThinkingIndicator - 任务状态组件">
          <div className="space-y-5">
            <ThinkingIndicator phase="thinking" />
            <ThinkingIndicator
              phase="analyzing"
              searchSteps={[
                { type: "tool", label: "分析任务和上下文" },
              ]}
            />
            <ThinkingIndicator
              phase="searching"
              searchSteps={[
                { type: "knowledge", label: "检索项目知识库" },
                { type: "web", label: "查询最新研究资料" },
              ]}
            />
            <ThinkingIndicator
              phase="executing"
              searchSteps={[
                { type: "tool", label: "执行实验数据分析工具" },
              ]}
            />
            <ThinkingIndicator phase="generating" />
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="👍 AssistantActions - 回复操作组件">
          <AssistantActions
            markdownContent={demoAssistantMessage.content}
            feedback={assistantFeedback}
            onFeedback={setAssistantFeedback}
            onRefresh={() => setChatEvent("触发重新生成")}
          />
          <p className="mt-4 text-sm text-secondaryText">
            当前反馈：{assistantFeedback ?? "无"}
          </p>
        </ShowcaseSection>

        <ShowcaseSection title="🧾 MessageItem - 消息组件">
          <div className="space-y-6 rounded-xl border border-borderGray bg-white p-6">
            <MessageItem msg={demoUserMessage} />
            <MessageItem msg={demoAttachmentStatusMessage} />
            <MessageItem
              msg={demoAssistantMessage}
              actionKey="demo-assistant"
              onRefresh={() => setChatEvent("触发重新生成")}
              onFeedback={(_, feedback) => setAssistantFeedback(feedback)}
              feedback={assistantFeedback}
            />
          </div>
        </ShowcaseSection>

        <ShowcaseSection title="📚 MessageList - 消息列表组件">
          <div className="flex h-[520px] flex-col overflow-hidden rounded-xl border border-borderGray bg-white">
            <MessageList
              messages={[demoUserMessage, demoAssistantMessage]}
              isTyping
              statusPhase="searching"
              searchSteps={[
                { type: "knowledge", label: "正在查找关联实验记录" },
              ]}
            />
          </div>
        </ShowcaseSection>

        <DesignSystemReference />

        <footer className="border-t border-lineSoft py-8 text-center text-secondaryText">
          <p>💡 所有组件都基于 Tailwind CSS 和 CSS Modules 构建</p>
          <p className="mt-2 text-sm">
            在{" "}
            <code className="rounded bg-bgLight px-2 py-1">
              packages/ui/src/components/
            </code>{" "}
            目录下查看组件源代码
          </p>
        </footer>
      </div>
    </main>
  );
}
