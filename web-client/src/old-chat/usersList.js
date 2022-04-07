import React from 'react'
import User from "./User"

function UsersList({users}){
    const usersList = users.map((user,key) => {
        return <User {...user}/>
    });

    return (
        <div className="row gx-3">
            {usersList}
        </div>
    );
}

export default UsersList;