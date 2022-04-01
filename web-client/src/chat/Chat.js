import { useRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function Chat(user) {
  return (
    <div class="theme border">
    <div class="container p-5">
      <div class="row">
        <div class="col">
          -user-
        </div>
        <div class="col">
          contact
        </div>
      </div>
      <div class="row">
        <div class="col-3 bg-light vh-100">
          pepole list
        </div>
        <div class="col-9">
          <Text />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Chat;

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  render () {
    return (
      <div> 
        yosi
      </div>
    )
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  render () {
    return (

        <div> 
          <div class="Text vh-100">the actul chat </div>
          <Messages />
        </div>
        
          
    )
  }
}

function Messages() {
  return (
      <div class="row">
        <div class="col-1">
          <i class="bi bi-paperclip"></i>
        </div>
        <div class="col-10">
          <input placeholder="New messages here..."></input>
        </div>
        <div class="col-1">
          <button class="btn btn-primary" type="button">Send</button>
        </div>
      </div>
  )
}