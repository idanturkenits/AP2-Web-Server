import React from 'react'
import TextMessage from "./TextMessage"

class Message extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        content : props.content,
        time : props.time
      }
    }
  
    render () {
      return (
        <div class="chat-messages p-4">

        <div class="chat-message-right pb-4">
            <div>
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"></img>
                <div class="text-muted small text-nowrap mt-2">{this.state.time}</div>
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                <div class="font-weight-bold mb-1">You</div>
                <TextMessage {...this.state.content} />
            </div>
        </div>

    </div>
      )
    }
}

export default Message;