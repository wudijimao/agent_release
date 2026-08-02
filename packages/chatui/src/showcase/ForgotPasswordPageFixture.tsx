import { useState } from 'react';
import { ForgotPasswordPage, type ForgotPasswordInput } from '../screens';

export function ForgotPasswordPageFixture() {
  const [event, setEvent] = useState('等待找回密码交互');
  return (
    <>
      <ForgotPasswordPage
        onSendCode={async (phoneNumber) => {
          setEvent(`发送短信验证码：${phoneNumber}`);
          await new Promise((resolve) => window.setTimeout(resolve, 300));
          return phoneNumber.startsWith('130') ? { ok: false, message: '验证码发送失败。' } : { ok: true };
        }}
        onResetPassword={async (input: ForgotPasswordInput) => {
          setEvent(`重置密码：${input.phoneNumber}`);
          await new Promise((resolve) => window.setTimeout(resolve, 300));
          return input.phoneVerificationCode === '000000' ? { ok: false, message: '验证码不正确。' } : { ok: true };
        }}
        onBackToLogin={(options) => setEvent(`导航：/login${options?.replace ? '（替换）' : ''}`)}
      />
      <output className="sr-only" aria-live="polite">{event}</output>
    </>
  );
}
