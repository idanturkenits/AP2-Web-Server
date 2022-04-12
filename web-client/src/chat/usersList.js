import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react'
import User from "./User"

function UsersList(props){
    const usersList = props.users.map((user,key) => {
        return (
            <User {... {user : user, displayChatWith : props.displayChatWith} } />
        );
    });

    return (
        <div>
            <ul class='noBullet'>
                {usersList}
            </ul>
        </div>
    );
}

export default UsersList;