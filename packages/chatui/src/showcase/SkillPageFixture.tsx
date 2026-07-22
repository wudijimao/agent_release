import { useState } from 'react';
import { SkillPage, type SkillCardViewModel } from '../screens';

const fixtureSkills: SkillCardViewModel[] = [
  { id: 'sso-official-1', name: 'sso-skills-official', source: '美团官方 · certified', description: '帮助对比同 protocol 与外文方式的 prompt 复核，适合跨页面与跨分析任务使用。', tags: ['文档处理', '提示词分析'], riskLevel: 'medium', installed: true },
  { id: 'sso-official-2', name: 'sso-skills-official', source: '美团官方 · certified', description: '帮助对比同 protocol 与外文方式的 prompt 复核，适合跨页面与跨分析任务使用。', tags: ['文档处理'], riskLevel: 'low', installed: true },
  { id: 'sso-official-3', name: 'sso-skills-official', source: '美团官方 · certified', description: '帮助对比同 protocol 与外文方式的 prompt 复核，适合跨页面与跨分析任务使用。', tags: ['文档处理', '提示分析'], riskLevel: 'medium', installed: false },
  { id: 'sso-official-4', name: 'sso-skills-official', source: '美团官方 · certified', description: '帮助对比同 protocol 与外文方式的 prompt 复核，适合跨页面与跨分析任务使用。', tags: ['文档处理', '提示分析'], riskLevel: 'medium', installed: false },
  { id: 'sso-official-5', name: 'sso-skills-official', source: '美团官方 · certified', description: '帮助对比同 protocol 与外文方式的 prompt 复核，适合跨页面与跨分析任务使用。', tags: ['文档处理', '提示分析'], riskLevel: 'low', installed: true },
  { id: 'sso-official-6', name: 'sso-skills-official', source: '美团官方 · certified', description: '帮助对比同 protocol 与外文方式的 prompt 复核，适合跨页面与跨分析任务使用。', tags: ['文档处理', '提示分析'], riskLevel: 'medium', installed: false },
];

export function SkillPageFixture() {
  const [skills, setSkills] = useState(fixtureSkills);
  const [event, setEvent] = useState('等待 Skill 交互');
  const update = (ids: string[], installed: boolean) => {
    setSkills((current) => current.map((skill) => ids.includes(skill.id) ? { ...skill, installed } : skill));
    setEvent(`${installed ? '安装' : '卸载'}：${ids.join(',')}`);
  };
  return <><SkillPage isSidebarOpen={false} skills={skills} onOpenSidebar={() => setEvent('展开边栏')} onCreateSkill={() => setEvent('新建 Skill')} onInstall={(ids) => update(ids, true)} onUninstall={(ids) => update(ids, false)} /><output className="sr-only" aria-live="polite">{event}</output></>;
}
