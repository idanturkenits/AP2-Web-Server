import React from 'react'
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';
import VideoMessage from './VideoMessage';
import FileMessage from './FileMessage';
import AudioMessage from './AudioMessage';

function Message({ msg, currentUser }) {
  if (currentUser.id === msg.sender.id) {
    return (
      <div className="chat-messages ms-4">
        <div className="chat-message-left pt-2 pb-2">
          <div>
            <img src={msg.sender.image} className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"></img>
          </div>
          <div className="flex-shrink-1 msg-green rounded py-1 px-3 mr-3">
            {toComponent({message:msg})}
            <div className="text-muted small text-nowrap mt-2">{msg.dateToString()}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-messages me-4">
      <div className="chat-message-right pt-2 pb-2">
        <div>
          <img src={msg.sender.image} className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"></img>
        </div>
        <div className="flex-shrink-1 bg-light rounded py-1 px-3 mr-3">
          <div className="text-muted small text-nowrap pb-1">{msg.sender.nickname}</div>
          {toComponent({message:msg})}
          <div className="text-muted small text-nowrap mt-2">{msg.dateToString()}</div>
        </div>
      </div>
    </div>
  );
}

function toComponent({message}) {
  switch (message.type) {
      case 'text':
          return <TextMessage text={message.content} />
      case 'image':
          return <ImageMessage src={message.content} />
      case 'video':
          return <VideoMessage src={message.content} />
      case 'file':
          return <FileMessage message={message} />
      case 'audio':
          return <AudioMessage message={message} />
  }
}

export default Message;