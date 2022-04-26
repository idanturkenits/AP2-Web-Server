import React from 'react'

function ChatCard({ currentUser, chat, displayChat }) {
    // the chat might be a group chat, if it is not a group chat we need to set the name of the chat to the name of the other user (same as the picture)
    if (chat === null) {
        return;
    }
    if (chat.users.length == 2) {
        // find the user who is not me
        let other_user = chat.users.find(temp => currentUser.id != temp.id)
        console.log("otherUser:", other_user)
        chat.name = other_user.nickname
        chat.image = other_user.image
    }
    let lastMessageDate = "";
    let nickName = "";
    let content = "";
    let lastMessage = chat.messages[chat.messages.length - 1];
    if (chat.messages.length>0) {
        lastMessageDate = lastMessage.dateToString();
        nickName = lastMessage.sender.nickname;
        if(lastMessage.type === 'text'){
            content = lastMessage.content;
        }else{
            content = lastMessage.name;
        }
    }
    
    return (

        <div class="list-group-item list-group-item-action flex-column align-items-start"
            onClick={() => displayChat(chat)}>
            <div class="d-flex w-100 justify-content-between">
                <img id="userImage" src={chat.image} className="card-img mr-1" alt="..."></img>
                <h5 class="mb-1">{chat.name}</h5>
                <small>{lastMessageDate}</small>
            </div>
            <p class="mb-1">{nickName + (nickName!=""?": ":"") + content}</p>
        </div>
    );

}

export default ChatCard;