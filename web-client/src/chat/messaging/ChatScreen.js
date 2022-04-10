import { useRef, useState } from 'react'
import React from 'react'
import UsersList from '../usersList';
import User from "../User"
import InputToolBar from "../InputToolBar"
import Chat from "./Chat"

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen(user) {
    const messages = [{content:'Yossi',time:"13"}];
    const users = [{name:'Yossi',age:"13",chatHistory:messages},{name:'Noam',age:"13",chatHistory:messages}];
    const [contact, setContact] = useState(users[0])

    const displayChatWith = function(user) {
        setContact(user)
    }

    return (
        /*the entire page*/
        <div class="container">
            <div class="card">
                <div class="row">
                    <div class="col-3 col-lg-3 col-xl-3">
                        <UsersList users={users} displayChatWith={displayChatWith}/>
                    </div>
                    <div class="col-9 col-lg-9 col-xl-9 border-start">
                        {/*the user that the chat with him */}
                        <div class="py-2 px-4 border-bottom d-none d-lg-block">
                            <div class="d-flex align-items-center py-1">
                                <User {...contact}/>
                            </div>
                        </div>

                        {/*the chat*/}
                        <div>
                        <Chat contact={contact}/>
                        <InputToolBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default ChatScreen;