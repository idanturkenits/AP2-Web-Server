import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import ChatCard from "./ChatCard"

function UsersList({currentUser, chats, displayChat}){
    let sortFunc = function(a,b) {
        if (b.messages.length==0)
            return -1;
        if (a.messages.length==0)
            return 1;
        return a.messages[a.messages.length-1].date>=b.messages[b.messages.length-1].date?-1:1;
    }

    console.log(chats);
    const usersList = chats.map((chat,key) => {
        console.log(chat);
        return (
            <ChatCard currentUser={currentUser} chat={chat} displayChat={displayChat}/>
        );
    });

    console.log(usersList);
    return (
        <div>
            <div id="user-list" className='xlist-group'>
                {usersList}
            </div>
        </div>
    );
}

export default UsersList;