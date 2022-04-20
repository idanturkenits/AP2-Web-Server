import React from 'react'
import UsersList from './usersList';
import Bar from './topBar';
import { useRef, useState } from 'react'
import ChatCard from "./ChatCard"
import InputToolBar from "./InputToolBar"
import ChatArea from "./messaging/ChatArea"
import LocalDBHandler from '../db_handlers/LocalDBHandler';
import './Chat.css'
import Message from '../classes/Message';
import { Link } from 'react-router-dom'
import TopUserInfo from './TopChatInfo';
/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen({ user }) {
    const handler = new LocalDBHandler();
    let chats = handler.getChatsOfUser(user.id);
    
    const [chatList, setChatList] = useState(chats);
    const [activeChat, setActiveChat] = useState(null);

    const displayChat = function (chat) {
        setActiveChat(chat);
    }

    const addMessage = function (type, content, name='') {
        let message = new Message(type, content, user, new Date(), name);
        handler.addMessageToChat(activeChat, message);
        setChatList(handler.getChatsOfUser(user.id));
    }

    const addCont = function (added_user) {
        handler.addChat([user, added_user]);
        setChatList(handler.getChatsOfUser(user.id));
    }
    return (
        /*the entire page*/
        <div id="chatScreen" className="container">
            <div className="card">
                <div className="row">
                    <div className="col-3 col-lg-3 col-xl-3 pe-0">
                        <Bar addContact={addCont} currentUser={user}/>
                        <UsersList currentUser={user} chats={chats} displayChat={displayChat} />
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
