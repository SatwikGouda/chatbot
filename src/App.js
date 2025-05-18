import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-profile" />
      <div className="sidebar-section">
        <input className="sidebar-search" placeholder="Search" />
      </div>
      <div className="sidebar-section">
        <div className="sidebar-item">Projects</div>
        <div className="sidebar-item">Documents</div>
      </div>
      <div className="sidebar-section sidebar-bottom">
        <div className="sidebar-item">Settings</div>
        <div className="sidebar-item">Help</div>
      </div>
    </div>
  );
}

function MainChat() {
  return (
    <div className="main-chat">
      <div className="main-chat-header">CHATBOT</div>
      <div className="main-chat-welcome">
        <h2>Welcome to CHATBOT</h2>
        <p>Get started by a task and Chat</p>
      </div>
      <div className="main-chat-input-area">
        <input className="main-chat-input" placeholder="Ask Anything" />
        <button className="main-chat-attach">Attach</button>
        <button className="main-chat-voice">Voice Message</button>
        <button className="main-chat-send">Send</button>
      </div>
    </div>
  );
}

function RightPanel() {
  return (
    <div className="right-panel">
      <div className="right-panel-profile">
        <div className="right-panel-avatar" />
        <div className="right-panel-user">NTID</div>
        <div className="right-panel-email">email@in.bosch.com</div>
      </div>
      <div className="right-panel-projects">
        <div className="right-panel-projects-title">Projects (5)</div>
        <button className="right-panel-new-chat">New Chat</button>
        {[1,2,3,4,5].map(i => (
          <div className="right-panel-prompt" key={i}>Prompt 1</div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <MainChat />
      <RightPanel />
    </div>
  );
}

export default App;
