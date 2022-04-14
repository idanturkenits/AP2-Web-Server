import React from 'react'
import Message from "./Message"

function ChatArea({ currentUser, chat }) {
  if (chat === null) {
    console.log("chat is null");
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
    <div className="position-relative scroll-area">
      {messagesHTML}
    </div>
  );
}

export default ChatArea;