import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Building2, CheckCircle2, UserPlus } from 'lucide-react';

export interface LoginInput {
  email: string;
  password: string;
  rememberLogin: boolean;
}

export type LoginResult =
  | { ok: true }
  | { ok: false; message: string };

export interface LoginPageProps {
  onLogin(input: LoginInput): Promise<LoginResult>;
  onLoginSuccess(): void;
  onNavigate(href: string, options?: { replace?: boolean }): void;
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
  return {
    x,
    y,
    baseX: x,
    baseY: y,
    size: Math.random() * 1.5 + 0.5,
    density: Math.random() * 30 + 1,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
  };
};

type ForgotStep = 'email' | 'success';

export default function LoginPage({ onLogin, onLoginSuccess, onNavigate }: LoginPageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const successTimerRef = useRef<number | null>(null);
  
  // 忘记密码流程
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotStep, setForgotStep] = useState<ForgotStep>('email');
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotCode, setForgotCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [forgotCodeSent, setForgotCodeSent] = useState(false);

  const canSubmit = useMemo(() => email.trim().length > 0 && password.trim().length > 0 && !isSubmitting, [
    email,
    isSubmitting,
    password,
  ]);

  // 验证码倒计时
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(
    () => () => {
      if (successTimerRef.current !== null) {
        window.clearTimeout(successTimerRef.current);
      }
    },
    [],
  );

  // 粒子动画
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
    let dpr = window.devicePixelRatio || 1;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const maxDistance = 150;

    const setCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 768 ? 40 : 90;
      particles = Array.from({ length: count }, () => createParticle(width, height));
    };

    const drawParticle = (particle: Particle) => {
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx = -particle.vx;
        if (particle.y < 0 || particle.y > height) particle.vy = -particle.vy;

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;
        const directionX = forceDirectionX * force * particle.density;
        const directionY = forceDirectionY * force * particle.density;

        if (distance < mouse.radius) {
          particle.x -= directionX * 0.5;
          particle.y -= directionY * 0.5;
          context.fillStyle = particleActiveColor;
          particle.size = Math.min(particle.size + 0.1, 2.5);
        } else {
          if (particle.x !== particle.baseX) {
            const moveX = particle.x - particle.baseX;
            particle.x -= moveX / 50;
          }
          if (particle.y !== particle.baseY) {
            const moveY = particle.y - particle.baseY;
            particle.y -= moveY / 50;
          }
          context.fillStyle = particleIdleColor;
          particle.size = Math.max(particle.size - 0.05, 1);
        }

        drawParticle(particle);

        for (let j = i; j < particles.length; j += 1) {
          const next = particles[j];
          const linkDx = particle.x - next.x;
          const linkDy = particle.y - next.y;
          const linkDistance = Math.sqrt(linkDx * linkDx + linkDy * linkDy);

          if (linkDistance < maxDistance) {
            const opacity = (1 - linkDistance / maxDistance) * 0.4;
            context.beginPath();
            context.strokeStyle = particleLineColor;
            context.globalAlpha = opacity;
            context.lineWidth = 1;
            context.moveTo(particle.x, particle.y);
            context.lineTo(next.x, next.y);
            context.stroke();
            context.globalAlpha = 1;
            context.closePath();
          }
        }
      }

      rafId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const resetMouse = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length < 1) return;
      const rect = container.getBoundingClientRect();
      mouse.x = event.touches[0].clientX - rect.left;
      mouse.y = event.touches[0].clientY - rect.top;
    };

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

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setLoginError(null);

    try {
      const result = await onLogin({ email: email.trim(), password, rememberLogin: rememberMe });
      if (!result.ok) {
        setLoginError(result.message);
        return;
      }

      setShowToast(true);
      successTimerRef.current = window.setTimeout(() => {
        setShowToast(false);
        onLoginSuccess();
      }, 900);
    } catch {
      setLoginError('登录失败，请稍后重试。');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 忘记密码：发送验证码
  const handleSendForgotCode = async () => {
    if (!forgotEmail.trim() || countdown > 0) return;
    setIsSubmitting(true);
    await new Promise((r) => window.setTimeout(r, 1000));
    setIsSubmitting(false);
    setForgotCodeSent(true);
    setCountdown(60);
  };

  // 忘记密码：提交
  const handleForgotNext = async () => {
    if (forgotStep === 'email') {
      if (
        !forgotEmail.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotEmail) ||
        !forgotCode.trim() ||
        forgotCode.length < 6 ||
        !newPassword.trim() ||
        newPassword.length < 6 ||
        newPassword !== confirmPassword
      ) return;
      setForgotStep('success');
    }
  };

  // 忘记密码：返回登录
  const handleBackToLogin = () => {
    setShowForgotPassword(false);
    setForgotStep('email');
    setForgotEmail('');
    setForgotCode('');
    setNewPassword('');
    setConfirmPassword('');
    setCountdown(0);
    setForgotCodeSent(false);
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-bgLight text-primaryText">
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[80vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 bg-authBackdropCenter" />
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] z-[1] h-[60vh] w-[60vw] bg-authBackdropCorner" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-md items-center justify-center px-4">
        <div className="w-full rounded-3xl border border-authCardBorder bg-authCardSurface p-10 shadow-authCard backdrop-blur-[20px]">
          <div className="mb-10 text-center">
            <h1 className="bg-authTitle bg-clip-text text-4xl font-semibold tracking-[-0.02em] text-transparent">
              Helia
            </h1>
            <p className="mt-2 text-sm text-authTextMuted">欢迎回来，请登录以进入科研工作台。</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <label className="relative block">
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setLoginError(null);
                }}
                required
                placeholder=" "
                autoComplete="off"
                className="peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
              />
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary">
                 邮箱

              </span>
            </label>

            <label className="relative block">
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setLoginError(null);
                }}
                required
                placeholder=" "
                className="peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
              />
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary">
                 密码

              </span>
            </label>

            {loginError && (
              <p role="alert" className="-mt-2 text-sm text-authErrorText">
                {loginError}
              </p>
            )}

            <div className="flex items-center justify-between px-1">
              <label className="group inline-flex cursor-pointer items-center gap-2">
                <span className="relative inline-flex h-4 w-4 items-center justify-center rounded border border-authDivider bg-surface shadow-sm transition-colors group-hover:border-primary">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="peer absolute inset-0 cursor-pointer opacity-0"
                  />
                  <svg
                    className="h-3 w-3 text-primary opacity-0 transition-opacity peer-checked:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-authTextDefault transition-colors group-hover:text-authTextStrong">记住我</span>
              </label>
              <button type="button" onClick={() => onNavigate('/forgot-password')} className="text-sm font-medium text-authLink transition-colors hover:text-primary">
                 忘记密码？

              </button>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              <span>{isSubmitting ? '认证中...' : '登录'}</span>
              {isSubmitting && (
                <svg
                  className="ml-2 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
                  />
                </svg>
              )}
            </button>
          </form>

          {!showForgotPassword && (
            <div className="mt-7">
              <div className="flex items-center justify-center text-sm text-authTextFaint">
                <span className="h-px w-12 bg-authDivider" />
                <span className="mx-3">首次使用？</span>
                <span className="h-px w-12 bg-authDivider" />
              </div>
              <div className="mt-4 flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('/register')}
                  className="inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault"
                >
                  <UserPlus size={16} className="text-authTextFaint" />
                  加入实验室
                </button>
                <span className="h-4 w-px bg-lineSubtle" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => onNavigate('/register?mode=create-lab')}
                  className="inline-flex items-center gap-1.5 text-sm font-normal text-authTextMuted transition-colors hover:text-authTextDefault"
                >
                  <Building2 size={16} className="text-authTextFaint" />
                  创建实验室
                </button>
              </div>
            </div>
          )}

          {/* 忘记密码流程 */}
          {showForgotPassword && (
            <div className="space-y-6">
              <div className="mb-6">
                <button
                  type="button"
                  onClick={handleBackToLogin}
                  className="text-sm font-medium text-authLink transition-colors hover:text-primary"
                >
                  ← 返回登录
                </button>
              </div>

              {forgotStep === 'email' && (
                <div className="space-y-5">
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-primaryText">重置密码</h2>
                    <p className="mt-1 text-sm text-authTextMuted">输入邮箱并验证后，重新设置密码</p>
                  </div>

                  <label className="relative block">
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder=" "
                      autoComplete="off"
                      className="peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
                    />
                    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary">
                      邮箱
                    </span>
                  </label>

                  <div className="flex gap-3">
                    <label className="relative block flex-1">
                      <input
                        type="text"
                        value={forgotCode}
                        onChange={(e) => setForgotCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder=" "
                        autoComplete="off"
                        maxLength={6}
                        className="peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
                      />
                      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary">
                        验证码
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={handleSendForgotCode}
                      disabled={countdown > 0 || isSubmitting || !forgotEmail.trim()}
                      className={`h-14 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                        countdown > 0
                          ? 'cursor-not-allowed border border-controlBorderDefault bg-surface text-authTextFaint'
                          : 'border border-controlBorderDefault bg-surface text-authTextDefault'
                      }`}
                    >
                      {countdown > 0 ? `${countdown}s后获取` : '获取验证码'}
                    </button>
                  </div>

                  <label className="relative block">
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder=" "
                      className="peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus"
                    />
                    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary">
                      新密码
                    </span>
                  </label>

                  <label className="relative block">
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder=" "
                      className={`peer h-14 w-full rounded-xl border border-controlBorderDefault bg-surface px-5 py-4 text-base leading-none text-primaryText shadow-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-brandFocus ${
                        confirmPassword.length > 0 && newPassword !== confirmPassword
                          ? 'border-authFieldError focus:border-authFieldError focus:ring-authFieldErrorFocus'
                          : ''
                      }`}
                    />
                    <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-base text-tertiaryText transition-all peer-focus:left-4 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:rounded peer-focus:bg-surface peer-focus:px-1.5 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary peer-[&:not(:placeholder-shown)]:left-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:-translate-y-1/2 peer-[&:not(:placeholder-shown)]:rounded peer-[&:not(:placeholder-shown)]:bg-surface peer-[&:not(:placeholder-shown)]:px-1.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-medium peer-[&:not(:placeholder-shown)]:text-primary">
                      确认密码
                    </span>
                  </label>
                  {confirmPassword.length > 0 && newPassword !== confirmPassword && (
                    <span className="block text-xs text-authErrorText">两次输入的密码不一致</span>
                  )}

                  <button
                    type="button"
                    onClick={handleForgotNext}
                    disabled={!forgotEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotEmail) || !forgotCode.trim() || forgotCode.length < 6 || !newPassword.trim() || newPassword.length < 6 || newPassword !== confirmPassword}
                    className="mt-2 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    重置密码
                  </button>
                </div>
              )}

              {forgotStep === 'success' && (
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 animate-pulse rounded-full bg-authSuccessPulse" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-soft">
                      <CheckCircle2 size={40} className="text-primary" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primaryText">密码重置成功</h3>
                    <p className="mt-2 text-sm text-authTextMuted">请使用新密码登录</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="mt-4 inline-flex h-14 w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg"
                  >
                    返回登录
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`pointer-events-none fixed left-1/2 top-5 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-authToastBorder bg-authToastSurface px-6 py-3 text-sm font-medium text-authToastText shadow-lg backdrop-blur-md transition-opacity duration-300 ${
          showToast ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CheckCircle2 size={18} className="text-primary" />
        <span>认证成功，正在进入工作台...</span>
      </div>
    </div>
  );
}
