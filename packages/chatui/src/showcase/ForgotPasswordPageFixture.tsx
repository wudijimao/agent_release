import { useState } from 'react';
import { ForgotPasswordPage, type ForgotPasswordInput } from '../screens';

export function ForgotPasswordPageFixture() {
  const [event, setEvent] = useState('等待找回密码交互');
  return (
    <>
      <ForgotPasswordPage
        onSendCode={async (email) => {
          setEvent(`发送验证码：${email}`);
          await new Promise((resolve) => window.setTimeout(resolve, 300));
          return email.startsWith('error') ? { ok: false, message: '验证码发送失败。' } : { ok: true };
        }}
        onResetPassword={async (input: ForgotPasswordInput) => {
          setEvent(`重置密码：${input.email}`);
          await new Promise((resolve) => window.setTimeout(resolve, 300));
          return input.verificationCode === '000000' ? { ok: false, message: '验证码不正确。' } : { ok: true };
        }}
        onBackToLogin={(options) => setEvent(`导航：/login${options?.replace ? '（替换）' : ''}`)}
      />
      <output className="sr-only" aria-live="polite">{event}</output>
    </>
  );
}
