import type { ChatFileOption, ChatSkillOption, InputSendPayload } from '../../components/chat';
export interface ChatHomeProject {
    id: string;
    name: string;
}
export interface ChatHomePageProps {
    projects: readonly ChatHomeProject[];
    selectedProjectId?: string;
    disabled?: boolean;
    embedded?: boolean;
    isSidebarOpen?: boolean;
    skillOptions?: readonly ChatSkillOption[];
    fileOptions?: readonly ChatFileOption[];
    onSelectProject(projectId: string | null): void;
    onCreateProject?(name: string): void;
    onOpenSidebar?(): void;
    onSend(payload: string | InputSendPayload): void;
}
export default function ChatHomePage({ projects, selectedProjectId, disabled, embedded, isSidebarOpen, skillOptions, fileOptions, onSelectProject, onCreateProject, onOpenSidebar, onSend, }: ChatHomePageProps): import("react").JSX.Element;
//# sourceMappingURL=ChatHomePage.d.ts.map