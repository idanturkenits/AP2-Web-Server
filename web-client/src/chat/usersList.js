import React from 'react'
import User from "./User"

function UsersList({users}){
    const usersList = users.map((user,key) => {
        return (
            <User {...user}/>
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