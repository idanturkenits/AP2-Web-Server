import { useRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import UsersList from './usersList';

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen(user) {
    const users = [{name:'Yossi',age:"13"},{name:'Noam',age:"13"}];

    return (
        /*the entire page*/
        <div class="container">
            <div class="card">
                <div class="row">
                    <div class="col-3 col-lg-3 col-xl-3">
                    <UsersList users={users}/>
                    </div>
                    <div class="col-9 col-lg-9 col-xl-9 border-start">
                    </div>
                </div>
            </div>
        </div>
  )
}
export default ChatScreen;