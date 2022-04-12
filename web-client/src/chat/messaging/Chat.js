import React from 'react'
import Message from "./Message"

class Chat extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        chatHistory : props.dispContact.chatHistory,
      }
    }
  
    render () {
      
      const messagesHTML = this.state.chatHistory.map((msg,key) => {
        return (
            <Message {...msg}/>
        );
      });

      return (        
        <div class="position-relative">
            {messagesHTML}
        </div>
      )
    }
}

export default Chat;