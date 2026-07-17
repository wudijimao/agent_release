import { useState } from 'react';

import { LoginPage, type LoginInput } from '../screens';

export function LoginPageFixture() {
  const [event, setEvent] = useState('等待登录交互');

  const handleLogin = async (input: LoginInput) => {
    setEvent(`正在登录：${input.email}`);
    await new Promise((resolve) => window.setTimeout(resolve, 1200));

    if (input.password === 'error') {
      setEvent(`登录失败：${input.email}`);
      return { ok: false, message: '邮箱或密码不正确。' } as const;
    }

    setEvent(`登录成功：${input.email}`);
    return { ok: true } as const;
  };

  return (
    <>
      <LoginPage
        onLogin={handleLogin}
        onLoginSuccess={() => setEvent('导航：/chat/new')}
        onNavigate={(href) => setEvent(`导航：${href}`)}
      />
      <output className="sr-only" aria-live="polite">
        {event}
      </output>
    </>
  );
}
