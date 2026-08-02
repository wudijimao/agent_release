export interface ForgotPasswordInput {
    phoneNumber: string;
    phoneVerificationCode: string;
    newPassword: string;
}
export type ForgotPasswordActionResult = {
    ok: true;
    message?: string;
    resendAfterSeconds?: number;
} | {
    ok: false;
    message: string;
};
export interface ForgotPasswordPageProps {
    onSendCode(phoneNumber: string): Promise<ForgotPasswordActionResult>;
    onResetPassword(input: ForgotPasswordInput): Promise<ForgotPasswordActionResult>;
    onBackToLogin(options?: {
        replace?: boolean;
    }): void;
}
export default function ForgotPasswordPage({ onSendCode, onResetPassword, onBackToLogin }: ForgotPasswordPageProps): import("react").JSX.Element;
//# sourceMappingURL=ForgotPasswordPage.d.ts.map