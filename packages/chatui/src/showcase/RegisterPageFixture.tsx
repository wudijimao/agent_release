import { useState } from 'react';

import {
  RegisterPage,
  type RegisterIdentityInput,
  type RegisterInput,
  type RegisterMode,
} from '../screens';

const wait = (duration: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration);
  });

export function RegisterPageFixture({ mode = 'join-lab' }: { mode?: RegisterMode }) {
  const [event, setEvent] = useState('等待注册交互');

  const handleSendVerificationCode = async (email: string) => {
    setEvent(`正在发送验证码：${email}`);
    await wait(1000);
    setEvent(`验证码已发送：${email}`);
    return { ok: true } as const;
  };

  const handleVerifyIdentity = async (input: RegisterIdentityInput) => {
    setEvent(`正在验证身份：${input.email}`);
    await wait(800);
    setEvent(`身份验证成功：${input.email}`);
    return { ok: true } as const;
  };

  const handleRegister = async (input: RegisterInput) => {
    setEvent(`正在注册：${input.email}`);
    await wait(800);
    setEvent(`注册成功：${input.email}`);
    return { ok: true } as const;
  };

  return (
    <>
      <RegisterPage
        mode={mode}
        onSendVerificationCode={handleSendVerificationCode}
        onVerifyIdentity={handleVerifyIdentity}
        onRegister={handleRegister}
        onEnterWorkspace={() => setEvent('导航：/chat/new')}
        onNavigate={(href) => setEvent(`导航：${href}`)}
      />
      <output className="sr-only" aria-live="polite">
        {event}
      </output>
    </>
  );
}
