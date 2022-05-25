import React, { useEffect } from 'react'
import UsersList from './usersList';
import Bar from './topBar';
import { useRef, useState } from 'react'
import ChatCard from "./ChatCard"
import InputToolBar from "./InputToolBar"
import ChatArea from "./messaging/ChatArea"
import './Chat.css'
import Message from '../classes/Message';
import { Link } from 'react-router-dom'
import TopUserInfo from './TopChatInfo';
import RemoteDBHandler from '../db_handlers/RemoteDBHandler';
import Chat from '../classes/Chat';
import User from '../classes/User';
/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen({ user }) {
    const [render,setRender] = useState(1);

    const [activeChat, setActiveChat] = useState(null);
    const handler = new RemoteDBHandler(user.server,user.jwt);

    const [chatList, setChatList] = useState([]);

    const displayChat = function (chat) {
        setActiveChat(chat);
    }

    const addMessage = function (type, content, name='') {
        let filter = document.getElementById("searchBoxInput").value;
        let message = new Message(type, content, user, new Date(), name);
        handler.addMessageToChat(activeChat, message);
        setChatList(handler.getChatsOfUserFiltered(user.username,filter));
    }

    const addCont = function (added_user) {
        let filter = document.getElementById("searchBoxInput").value;
        handler.addChat([user, added_user]);
        setChatList(handler.getChatsOfUserFiltered(user.username,filter));
    }

    const updateCont = function(filter) {
        setChatList(handler.getChatsOfUserFiltered(user.username,filter));
    }
    
    useEffect(()=> {
        handler.getChatsOfCurrentUser(user).then(chats => setChatList([...chats]))
    },[]);

    return (
        /*the entire page*/
        <div id="chatScreen" className="container box-shadow">
            <div className="card">
                <div className="row">
                    <div className="col-3 col-lg-3 col-xl-3 pe-0">
                        <Bar addContact={addCont} currentUser={user} updateCont={updateCont} />
                        <UsersList currentUser={user} chats={chatList} displayChat={displayChat} />
                    </div>
                    <div className="col-9 col-lg-9 col-xl-9 border-start">
                        {/*the user that the chat with him */}
                        <div className="py-2 px-4 border-bottom d-none d-lg-block ">
                            <div className="d-flex align-items-center py-1">
                                <TopUserInfo currentUser={user} chat={activeChat} />
                            </div>
                        </div>

                        {/*the chat*/}
                        <div>
                            <ChatArea currentUser={user} chat={activeChat}/>
                            <InputToolBar addMessage={addMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatScreen;
