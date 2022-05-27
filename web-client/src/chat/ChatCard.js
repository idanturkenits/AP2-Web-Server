import React from 'react'
import chats from '../database/Chats';
import RemoteDBHandler from '../db_handlers/RemoteDBHandler';
import Message from '../classes/Message'

function ChatCard({ currentUser, chat, displayChat }) {
    // the chat might be a group chat, if it is not a group chat we need to set the name of the chat to the name of the other user (same as the picture)
    if (chat === null) {
        return;
    }
    if (chat.users.length == 2) {
        // find the user who is not me
        let other_user = chat.users.find(temp => currentUser.username != temp.username)
        chat.name = other_user.nickname
        chat.image = other_user.image
    }
    
    let lastMessageDate = "";
    let nickName = "";
    let content = "";
    let lastMessage = chat.messages[chat.messages.length - 1];
    if (chat.messages.length>0) {
        lastMessageDate = lastMessage.date;
        nickName = lastMessage.sender.nickname;
        if(lastMessage.type === 'text'){
            content = lastMessage.content;
        }else{
            content = lastMessage.name;
        }
    }

    let handler = new RemoteDBHandler(currentUser.server,currentUser.jwt);
    let display = function(chat) {
        let messages = handler.getMessagesOfContact(chat.users[1].username).then(messagesArray => {
            chat.messages = [];
            for (let message of messagesArray) {
                let sender = (message["sent"]===true? currentUser:chat.users[1]);
                chat.messages.push(new Message('text',message["content"],sender,message["created"]))
            }
            displayChat(chat);
        });
    }
    
    return (

        <div className="list-group-item list-group-item-action flex-column align-items-start"
            onClick={() => display(chat)}>
            <div className="d-flex">
                <img id="userImage" src={chat.image} className="card-img mr-1" alt="..."></img>
                <div className="d-block justify-content-between">
                    <h5 className="ms-3">{chat.name}</h5>
                    <p className="ms-3">{chat.users[1].lastMessage}</p>
                </div>
            </div>
        </div>
    );
}

export default ChatCard;