import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import ChatCard from "./ChatCard"

function UsersList({currentUser, chats, displayChat}){
    let sortFunc = function(a,b) {
        return Date.parse(a.users[1].lastDate)>=(Date.parse(b.users[1].lastDate))?-1:1;
    }

    const usersList = chats.sort(sortFunc).map((chat,key) => {
        return (
            <ChatCard currentUser={currentUser} chat={chat} displayChat={displayChat}/>
        );
    });

    return (
        <div>
            <div id="user-list" className='xlist-group'>
                {usersList}
            </div>
        </div>
    );
}

export default UsersList;