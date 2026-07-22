export interface ForgotPasswordInput {
    email: string;
    verificationCode: string;
    newPassword: string;
}
export type ForgotPasswordActionResult = {
    ok: true;
} | {
    ok: false;
    message: string;
};
export interface ForgotPasswordPageProps {
    onSendCode(email: string): Promise<ForgotPasswordActionResult>;
    onResetPassword(input: ForgotPasswordInput): Promise<ForgotPasswordActionResult>;
    onBackToLogin(options?: {
        replace?: boolean;
    }): void;
}
export default function ForgotPasswordPage({ onSendCode, onResetPassword, onBackToLogin }: ForgotPasswordPageProps): import("react").JSX.Element;
//# sourceMappingURL=ForgotPasswordPage.d.ts.map