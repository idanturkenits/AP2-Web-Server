import React from 'react'
import { Link } from 'react-router-dom'
import UsersList from './usersList';
import Bar from './topBar';
import { useRef, useState } from 'react'
import User from "./User"
import InputToolBar from "./InputToolBar"
import Chat from "./Chat"

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen(user) {
    const messages = [{content:'Yossi',time:"13"}];
    const [uList,setUList] = useState([{firstName:'Yossi',lastName:"Cohen",image:"logo192.png",chatHistory:messages},{firstName:'Noam',lastName:"Katz",image:"Capture1.PNG",chatHistory:messages}]);
    const [contact, setContact] = useState(uList[0])

    const displayChatWith = function(user) {
        setContact(user)
    }

    const addCont = function(user) {
        let newArr = uList.concat(user);
        setUList(newArr);
    }

    return (
        /*the entire page*/
        <div class="container">
            <div class="card">
                <div class="row">
                    <div class="col-3 col-lg-3 col-xl-3">
                    <Bar changeState={addCont}/>
                    <UsersList users={uList}/>
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
