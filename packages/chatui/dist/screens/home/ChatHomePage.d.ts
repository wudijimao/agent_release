import type { InputSendPayload } from '../../components/chat';
export interface ChatHomeProject {
    id: string;
    name: string;
}
export interface ChatHomePageProps {
    projects: readonly ChatHomeProject[];
    selectedProjectId?: string;
    disabled?: boolean;
    embedded?: boolean;
    onSelectProject(projectId: string | null): void;
    onCreateProject?(name: string): void;
    onSend(payload: string | InputSendPayload): void;
}
export default function ChatHomePage({ projects, selectedProjectId, disabled, embedded, onSelectProject, onCreateProject, onSend, }: ChatHomePageProps): import("react").JSX.Element;
//# sourceMappingURL=ChatHomePage.d.ts.map