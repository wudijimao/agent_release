export type RegisterMode = 'join-lab' | 'create-lab';
export interface RegisterIdentityInput {
    email: string;
    verificationCode: string;
    mode: RegisterMode;
    inviteCode?: string;
    labName?: string;
}
export interface RegisterInput extends RegisterIdentityInput {
    password: string;
}
export type RegisterActionResult = {
    ok: true;
} | {
    ok: false;
    message: string;
    field?: 'password' | 'form';
};
export interface RegisterPageProps {
    mode?: RegisterMode;
    onSendVerificationCode(email: string): Promise<RegisterActionResult>;
    onVerifyIdentity(input: RegisterIdentityInput): Promise<RegisterActionResult>;
    onRegister(input: RegisterInput): Promise<RegisterActionResult>;
    onEnterWorkspace(): void;
    onNavigate(href: string, options?: {
        replace?: boolean;
    }): void;
}
export default function RegisterPage({ mode, onSendVerificationCode, onVerifyIdentity, onRegister, onEnterWorkspace, onNavigate, }: RegisterPageProps): import("react").JSX.Element;
//# sourceMappingURL=RegisterPage.d.ts.map