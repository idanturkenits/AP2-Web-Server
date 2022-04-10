import React from 'react'
import ChatHistory from "./ChatHistory"

class Chat extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        chatHistory : props.contact.chatHistory,
      }
    }
  
    render () {
      return (
        <div class="position-relative">
            <ChatHistory chatHistory={this.state.chatHistory} />
        </div>
      )
    }
}

export default Chat;