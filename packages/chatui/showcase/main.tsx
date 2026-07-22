import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles.css';
import {
  AttachmentStatusFixture,
  ChatConversationFixture,
  ChatTimelineFixture,
  ChatShareFixture,
  ChatWorkspacePanelsFixture,
  ChatHomePageFixture,
  ComponentShowcase,
  LoginPageFixture,
  ForgotPasswordPageFixture,
  RegisterPageFixture,
  RichMessageFixture,
  SkillPageFixture,
} from '../src/showcase';

const searchParams = new URLSearchParams(window.location.search);
const screen = searchParams.get('screen');
const content = screen === 'login'
  ? <LoginPageFixture />
  : screen === 'forgot-password'
    ? <ForgotPasswordPageFixture />
  : screen === 'attachment-status'
    ? <AttachmentStatusFixture />
  : screen === 'chat'
    ? <ChatConversationFixture />
  : screen === 'chat-timeline'
    ? <ChatTimelineFixture />
  : screen === 'chat-share'
    ? <ChatShareFixture />
  : screen === 'chat-panels'
    ? <ChatWorkspacePanelsFixture />
  : screen === 'home'
    ? <ChatHomePageFixture />
  : screen === 'register'
    ? <RegisterPageFixture mode={searchParams.get('mode') === 'create-lab' ? 'create-lab' : 'join-lab'} />
  : screen === 'rich-message'
    ? <RichMessageFixture />
  : screen === 'skills'
    ? <SkillPageFixture />
    : <ComponentShowcase />;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {content}
  </React.StrictMode>,
);
