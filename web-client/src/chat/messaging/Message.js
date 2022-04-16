import React from 'react'
import MessageClass from '../../classes/Message';
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';
import VideoMessage from './VideoMessage';

function Message({ msg, currentUser }) {
  if (currentUser.id === msg.sender.id) {
    return (
      <div class="chat-messages p-4">
        <div class="chat-message-left pb-4">
          <div>
            <img src={msg.sender.image} class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"></img>
          </div>
          <div class="flex-shrink-1 msg-green rounded py-1 px-3 mr-3">
            {toComponent({message:msg})}
            <div class="text-muted small text-nowrap mt-2">{msg.dateToString()}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="chat-messages p-4">
      <div class="chat-message-right pb-4">
        <div>
          <img src={msg.sender.image} class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"></img>
        </div>
        <div class="flex-shrink-1 bg-light rounded py-1 px-3 mr-3">
          <div class="text-muted small text-nowrap pb-1">{msg.sender.nickname}</div>
          {toComponent({message:msg})}
          <div class="text-muted small text-nowrap mt-2">{msg.dateToString()}</div>
        </div>
      </div>
    </div>
  );
}

function toComponent({message}) {
  switch (message.type) {
      case 'text':
          return <TextMessage text={message.content} />
          break;
      case 'image':
          return <ImageMessage src={message.content} />
          break;
      case 'video':
          return <VideoMessage src={message.content} />
          break;
  }
}

export default Message;