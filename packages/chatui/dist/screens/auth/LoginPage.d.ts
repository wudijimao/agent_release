export interface LoginInput {
    email: string;
    password: string;
    rememberLogin: boolean;
}
export type LoginResult = {
    ok: true;
} | {
    ok: false;
    message: string;
};
export interface LoginPageProps {
    onLogin(input: LoginInput): Promise<LoginResult>;
    onLoginSuccess(): void;
    onNavigate(href: string, options?: {
        replace?: boolean;
    }): void;
}
export default function LoginPage({ onLogin, onLoginSuccess, onNavigate }: LoginPageProps): import("react").JSX.Element;
//# sourceMappingURL=LoginPage.d.ts.map