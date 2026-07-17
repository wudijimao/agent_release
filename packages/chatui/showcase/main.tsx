import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles.css';
import {
  AttachmentStatusFixture,
  ChatConversationFixture,
  ChatHomePageFixture,
  ComponentShowcase,
  LoginPageFixture,
  RegisterPageFixture,
  RichMessageFixture,
} from '../src/showcase';

const searchParams = new URLSearchParams(window.location.search);
const screen = searchParams.get('screen');
const content = screen === 'login'
  ? <LoginPageFixture />
  : screen === 'attachment-status'
    ? <AttachmentStatusFixture />
  : screen === 'chat'
    ? <ChatConversationFixture />
  : screen === 'home'
    ? <ChatHomePageFixture />
  : screen === 'register'
    ? <RegisterPageFixture mode={searchParams.get('mode') === 'create-lab' ? 'create-lab' : 'join-lab'} />
  : screen === 'rich-message'
    ? <RichMessageFixture />
    : <ComponentShowcase />;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {content}
  </React.StrictMode>,
);
