import React from 'react'
import User from "./User"
import Bar from './topBar';

function UsersList({users}){
    const usersList = users.map((user,key) => {
        return (
            <User {...user}/>
        );
    });

    return (
        <div>
            <Bar />
            <ul class='noBullet'>
                {usersList}
            </ul>
        </div>
    );
}

export default UsersList;