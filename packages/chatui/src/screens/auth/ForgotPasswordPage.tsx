import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface ForgotPasswordInput {
  email: string;
  verificationCode: string;
  newPassword: string;
}

export type ForgotPasswordActionResult = { ok: true } | { ok: false; message: string };

export interface ForgotPasswordPageProps {
  onSendCode(email: string): Promise<ForgotPasswordActionResult>;
  onResetPassword(input: ForgotPasswordInput): Promise<ForgotPasswordActionResult>;
  onBackToLogin(options?: { replace?: boolean }): void;
}

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;
  vx: number;
  vy: number;
};

const createParticle = (width: number, height: number): Particle => {
  const x = Math.random() * width;
  const y = Math.random() * height;
  return { x, y, baseX: x, baseY: y, size: Math.random() * 1.5 + 0.5, density: Math.random() * 30 + 1, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 };
};

export default function ForgotPasswordPage({ onSendCode, onResetPassword, onBackToLogin }: ForgotPasswordPageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const loginTimerRef = useRef<number | null>(null);
  const [step, setStep] = useState<'email' | 'success'>('email');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setTimeout(() => setCountdown((current) => current - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const rootStyles = window.getComputedStyle(document.documentElement);
    const particleActiveColor = rootStyles.getPropertyValue('--chatui-color-auth-particle-active').trim();
    const particleIdleColor = rootStyles.getPropertyValue('--chatui-color-auth-particle-idle').trim();
    const particleLineColor = rootStyles.getPropertyValue('--chatui-color-auth-particle-line').trim();
    let rafId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 120 };
    const maxDistance = 150;

    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: width < 768 ? 40 : 90 }, () => createParticle(width, height));
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx = -particle.vx;
        if (particle.y < 0 || particle.y > height) particle.vy = -particle.vy;
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (mouse.radius - distance) / mouse.radius;
        if (distance < mouse.radius) {
          particle.x -= (dx / distance) * force * particle.density * 0.5;
          particle.y -= (dy / distance) * force * particle.density * 0.5;
          context.fillStyle = particleActiveColor;
          particle.size = Math.min(particle.size + 0.1, 2.5);
        } else {
          particle.x -= (particle.x - particle.baseX) / 50;
          particle.y -= (particle.y - particle.baseY) / 50;
          context.fillStyle = particleIdleColor;
          particle.size = Math.max(particle.size - 0.05, 1);
        }
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (let nextIndex = index; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const linkDx = particle.x - next.x;
          const linkDy = particle.y - next.y;
          const linkDistance = Math.sqrt(linkDx * linkDx + linkDy * linkDy);
          if (linkDistance >= maxDistance) continue;
          context.beginPath();
          context.globalAlpha = (1 - linkDistance / maxDistance) * 0.4;
          context.strokeStyle = particleLineColor;
          context.lineWidth = 1;
          context.moveTo(particle.x, particle.y);
          context.lineTo(next.x, next.y);
          context.stroke();
          context.globalAlpha = 1;
        }
      }
      rafId = window.requestAnimationFrame(animate);
    };
    const handleMouseMove = (event: MouseEvent) => { const rect = container.getBoundingClientRect(); mouse.x = event.clientX - rect.left; mouse.y = event.clientY - rect.top; };
    const handleTouchMove = (event: TouchEvent) => { if (!event.touches.length) return; const rect = container.getBoundingClientRect(); mouse.x = event.touches[0].clientX - rect.left; mouse.y = event.touches[0].clientY - rect.top; };
    const resetMouse = () => { mouse.x = -1000; mouse.y = -1000; };
    setCanvasSize();
    animate();
    window.addEventListener('resize', setCanvasSize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', resetMouse);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', resetMouse);
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', setCanvasSize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', resetMouse);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', resetMouse);
    };
  }, []);

  useEffect(() => () => {
    if (loginTimerRef.current !== null) window.clearTimeout(loginTimerRef.current);
  }, []);

  const canSubmit = useMemo(() => email.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && verificationCode.length >= 6 && password.length >= 6 && password === confirmPassword, [confirmPassword, email, password, verificationCode]);
  const inputClass = 'peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus';
  const labelClass = 'pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary';

  const sendCode = async () => {
    if (!email.trim() || countdown > 0 || isSubmitting) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await onSendCode(email.trim());
      if (!result.ok) { setError(result.message); return; }
      setCountdown(60);
    } catch {
      setError('验证码发送失败，请稍后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const result = await onResetPassword({ email: email.trim(), verificationCode, newPassword: password });
      if (!result.ok) { setError(result.message); return; }
      setStep('success');
    } catch {
      setError('密码重置失败，请稍后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scheduleBackToLogin = () => {
    loginTimerRef.current = window.setTimeout(() => onBackToLogin({ replace: true }), 1000);
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-bgLight text-primaryText">
      <div className="absolute inset-0 z-0"><canvas ref={canvasRef} className="h-full w-full" /></div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4">
        <div className="w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]">
          <div className="mb-8 text-center"><h1 className="bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent">Helia</h1><p className="mt-2 text-sm text-authTextMuted">重置您的登录密码。</p></div>
          {step === 'email' ? (
            <>
              <div className="mb-6"><h2 className="text-lg font-semibold text-primaryText">重置您的密码</h2></div>
              <form onSubmit={submit} className="space-y-5">
                <label className="relative block"><input type="email" value={email} onChange={(event) => { setEmail(event.target.value); setError(null); }} required placeholder=" " autoComplete="off" className={inputClass} /><span className={labelClass}>邮箱</span></label>
                <div className="flex gap-3">
                  <label className="relative block flex-1"><input type="text" value={verificationCode} onChange={(event) => { setVerificationCode(event.target.value.replace(/\D/g, '').slice(0, 6)); setError(null); }} required placeholder=" " autoComplete="off" maxLength={6} className={inputClass} /><span className={labelClass}>验证码</span></label>
                  <button type="button" onClick={sendCode} disabled={countdown > 0 || isSubmitting} className={`h-14 whitespace-nowrap rounded-xl border border-controlBorderDefault bg-surface px-4 py-2 text-sm font-medium transition-all ${countdown > 0 ? 'cursor-not-allowed text-authTextFaint' : 'text-authTextDefault'}`}>{countdown > 0 ? `${countdown}s后获取` : '获取验证码'}</button>
                </div>
                <label className="relative block"><input type="password" value={password} onChange={(event) => { setPassword(event.target.value); setError(null); }} required placeholder=" " className={inputClass} /><span className={labelClass}>新密码</span></label>
                <label className="relative block"><input type="password" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value); setError(null); }} required placeholder=" " className={`${inputClass} ${confirmPassword.length > 0 && password !== confirmPassword ? 'border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus' : ''}`} /><span className={labelClass}>确认新密码</span>{confirmPassword.length > 0 && password !== confirmPassword && <span className="mt-1 block text-xs text-authErrorText">两次输入的密码不一致</span>}</label>
                {error && <p role="alert" className="text-sm text-authErrorText">{error}</p>}
                <button type="submit" disabled={!canSubmit || isSubmitting} className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary pt-2 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"><span>{isSubmitting ? '处理中...' : '重置密码'}</span>{isSubmitting && <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z" /></svg>}</button>
              </form>
              <p className="mt-6 text-center text-sm text-authTextMuted">想起密码了？<button type="button" onClick={() => onBackToLogin()} className="ml-1 font-medium text-primary transition-colors hover:text-primary-hover">返回登录</button></p>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6"><div className="relative"><div className="absolute inset-0 animate-pulse rounded-full bg-primary-soft opacity-70" /><div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft"><CheckCircle2 size={40} className="text-primary" /></div></div><div className="text-center"><h3 className="text-2xl font-bold text-primaryText">密码重置成功</h3><p className="mt-2 text-sm text-authTextMuted">请用新密码登录</p></div><button type="button" onClick={scheduleBackToLogin} className="mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg">返回登录</button></div>
          )}
        </div>
      </div>
    </div>
  );
}
