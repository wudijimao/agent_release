import React from 'react';

export interface SettingsPageProps {
  onOpenAiUsage(): void;
  onOpenMembers(): void;
  onLogout(): void;
}

export function SettingsPage({ onOpenAiUsage, onOpenMembers, onLogout }: SettingsPageProps) {
  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="mb-8 text-3xl font-bold">⚙️ 系统设置</h1>
      <div className="overflow-hidden rounded-2xl border border-borderGray bg-surface shadow-sm">
        <button type="button" onClick={onOpenAiUsage} className="w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight">AI用量统计</button>
        <button type="button" onClick={onOpenMembers} className="w-full cursor-pointer border-b border-borderGray p-4 text-left transition-colors hover:bg-bgLight">项目成员管理</button>
        <button type="button" onClick={onLogout} className="w-full cursor-pointer p-4 text-left font-medium text-danger transition-colors hover:bg-danger-soft">退出登录</button>
      </div>
    </div>
  );
}
