import { useState } from 'react';
import { AppShell, ChatHomePage } from '..';
import type { AppShellChat, ChatHomeProject, InputSendPayload } from '..';
import logoUrl from '../../../../src/assets/deptrace-logo.png';

const initialProjects: ChatHomeProject[] = [
  { id: 'p-crispr', name: 'CRISPR实验优化' },
  { id: 'p-thal', name: '地贫基因治疗研究' },
  { id: 'p-organoid', name: '类器官模型验证' },
];

const initialChats: AppShellChat[] = [
  { id: 'task-demo-1', title: '肿瘤免疫文献订阅（Mock）', date: '刚刚', count: 12, isTaskConversation: true, taskId: 'task-5', source: 'task' },
  { id: 'c1', title: '文献汇总整理', date: '今天 10:25', count: 3 },
  { id: 'c2', title: '编辑效率优化', date: '昨天 16:40', count: 5, projectId: 'p-crispr' },
];

export function ChatHomePageFixture() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedProjectId, setSelectedProjectId] = useState<string>();
  const [currentPath, setCurrentPath] = useState('/chat/new');
  const [lastAction, setLastAction] = useState('等待交互');

  const handleCreateProject = (name: string) => {
    const project = { id: `fixture-project-${Date.now()}`, name };
    setProjects((current) => [project, ...current]);
    setSelectedProjectId(project.id);
    setLastAction(`创建项目：${name}`);
  };

  const handleSend = (payload: string | InputSendPayload) => {
    const content = typeof payload === 'string' ? payload : payload.content;
    setLastAction(`发送：${content}`);
  };

  return (
    <AppShell
      currentPath={currentPath}
      projects={projects}
      initialChats={initialChats}
      logoUrl={logoUrl}
      user={{ name: '研究员', avatarText: '研' }}
      initialAiUsageWarningActive
      onNavigate={(href) => {
        setCurrentPath(href);
        setLastAction(`导航：${href}`);
      }}
      onLogout={() => setLastAction('退出登录')}
    >
      <ChatHomePage
        projects={projects}
        selectedProjectId={selectedProjectId}
        onSelectProject={(projectId) => {
          setSelectedProjectId(projectId ?? undefined);
          setLastAction(`选择项目：${projectId ?? '无'}`);
        }}
        onCreateProject={handleCreateProject}
        onSend={handleSend}
      />
      <span className="sr-only" aria-live="polite">{lastAction}</span>
    </AppShell>
  );
}
