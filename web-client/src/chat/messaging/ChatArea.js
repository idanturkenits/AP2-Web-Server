import React from 'react'
import Message from "./Message"
import { useEffect } from 'react'

function ChatArea({ currentUser, chat }) {
  useEffect(() => {
    let chatArea = document.getElementById( 'chatArea' );
    if (chatArea!=null)
      chatArea.scrollTop = chatArea.scrollHeight;
  });

  if (chat === null) {
    return (
      <div className="position-relative scroll-area">
      </div>
    );
  }

  const messagesHTML = chat.messages.map((msg, key) => {
    return (
      <Message msg={msg} currentUser={currentUser} />
    );
  });

  return (
    <div className="position-relative scroll-area" id="chatArea">
      {messagesHTML}
    </div>
  );
}

export default ChatArea;