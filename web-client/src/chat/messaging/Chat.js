import React from 'react'
import Message from "./Message"

function Chat(props) {
  console.log(props.dispContact);
  const messagesHTML = props.dispContact.chatHistory.map((msg, key) => {
    return (
      <Message {...msg} />
    );
  });

  return (
    <div id="chat" className="position-relative">
      {messagesHTML}
    </div>
  );
}

export default Chat;