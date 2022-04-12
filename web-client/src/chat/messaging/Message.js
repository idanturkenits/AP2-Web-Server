import React from 'react'
import TextMessage from "./TextMessage"

function Message(props) {
  return (
    <div class="chat-messages p-4">

      <div class="chat-message-right pb-4">
        <div>
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"></img>
          <div class="text-muted small text-nowrap mt-2">{props.time}</div>
        </div>
        <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
          <TextMessage text={props.content} />
        </div>
      </div>

    </div>
  )
}

export default Message;