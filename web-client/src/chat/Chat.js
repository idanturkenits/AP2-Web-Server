import { useRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import UsersList from './usersList';

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function Chat(user) {
  const users = [{name:'Yossi',age:"13"},{name:'Noam',age:"13"}];

  return (
    <div class="theme">
      <div class="chat container center rounded border border-3 border-dark container">
        <div class="row">
          <div class="col">
            -user-
          </div>
          <div class="col">
            contact
          </div>
        </div>
        <div class="row">
          <div class="col-3 rounded border border-1 border-dark bg-light vh-100">
            <UsersList users={users}/>
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
          <div class="chat-screen text-dark messages container rounded border border-1 border-dark position-relative">
            jkdsjllcjzlxjc  sakldddddddddddddddddddddd
            alsdkaaaaaaaaaaaaaa
          </div>
        <div>
          <SendBox/>
        </div>
      </div>
    )
  }
}

function SendBox() {
  return (
    <div class="send-box row rounded border border-1 border-dark clearfix">
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