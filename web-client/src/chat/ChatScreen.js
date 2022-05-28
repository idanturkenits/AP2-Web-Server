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
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen({ user }) {
    const [ connection, setConnection ] = useState(null);

    const [render,setRender] = useState(1);

    const [activeChat, setActiveChat] = useState(null);

    const handler = new RemoteDBHandler(user.server,user.jwt);

    const [chatList, setChatList] = useState([]);

    const displayChat = function (chat) {
        setActiveChat(chat);
    }

    const updateChat = async function () {
        for (let chat of chatList) {
            await handler.getMessagesOfContact(chat.users[1].username).then(messagesArray => {
                chat.messages = [];
                for (let message of messagesArray) {
                    let sender = message["sent"]? user:chat.users[1];
                    chat.messages.push(new Message('text',message["content"],sender,message["created"]))
                }
                handler.getChatById(chat.users[1].username).then(data => {
                    var thisChat = chatList.find(ch => ch.users[1].username==chat.users[1].username);
                    thisChat.users[1].lastMessage = data["last"];
                    thisChat.users[1].lastDate = data["lastdate"];
                })
            });
        }
        if (activeChat != null)
            setActiveChat({...activeChat});
        setChatList([...chatList])
    }

    const addMessage = async function (message) {
        let chat = activeChat;
        handler.addMessageToChat(chat.users[1].username, message).then(async () => {
            let messages = handler.getMessagesOfContact(chat.users[1].username).then(messagesArray => {
                chat.messages = [];
                for (let message of messagesArray) {
                    let sender = message["sent"]? user:chat.users[1];
                    chat.messages.push(new Message('text',message["content"],sender,message["created"]))
                }
                setActiveChat({...chat});
                handler.getChatById(chat.users[1].username).then(data => {
                    var thisChat = chatList.find(ch => ch.users[1].username==chat.users[1].username);
                    thisChat.users[1].lastMessage = data["last"];
                    thisChat.users[1].lastDate = data["lastdate"];
                    setChatList([...chatList])
                })
            })
        });
    }

    const addCont = async function () {
        await handler.getChatsOfCurrentUser(user).then(chats => setChatList([...chats]))
    }

    const updateCont = async function(filter) {
        await handler.getChatsOfCurrentUser(user).then(chats => {
            setChatList(chats.filter(chat => chat.users[1].nickname.toLowerCase().includes(filter)));
        })
    }
    
    useEffect(()=> {
        handler.getChatsOfCurrentUser(user).then(chats => setChatList([...chats]));
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5112/chathub', {
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets
            })
            .build();
        newConnection.start().then(() => {
            newConnection.on('invitations',() => {
                addCont();
            });
            newConnection.on("transfer",() => {
                console.log("hi");
                updateChat();
            });
        });
        setConnection(newConnection);
    },[]);

    return (
        /*the entire page*/
        <div id="chatScreen" className="container box-shadow">
            <div className="card">
                <div className="row">
                    <div className="col-3 col-lg-3 col-xl-3 pe-0">
                        <Bar addContact={addCont} currentUser={user} updateCont={updateCont}/>
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
