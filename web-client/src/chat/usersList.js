import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import ChatCard from "./ChatCard"

function UsersList({currentUser, chats, displayChat}){
    const usersList = chats.map((chat,key) => {
        return (
            <ChatCard currentUser={currentUser} chat={chat} displayChat={displayChat}/>
        );
    });

    return (
        <div>
            <ul id="user-list" className='noBullet'>
                {usersList}
            </ul>
        </div>
    );
}

export default UsersList;