import React from 'react'

function ChatCard({currentUser, chat, displayChat}) {
    // the chat might be a group chat, if it is not a group chat we need to set the name of the chat to the name of the other user (same as the picture)
    if(chat.users.length  == 2){
        // find the user who is not me
        let other_user = chat.users.find(temp => currentUser.id != temp.id)
        console.log("otherUser:", other_user)
        chat.name = other_user.nickname
        chat.image = other_user.image
    }
    return (
        <li className="contact card mb-3" styles="max-width: 540px;">
            <div className="row no-gutters" onClick={() => {displayChat(chat)}}>
                <div className="col-md-4 my-auto">
                    <img id="userImage" src={chat.image} className="card-img mr-1" alt="..."></img>
                </div>
                <div className="col-md-8 my-auto">
                    <div className="card-body justify-content-between d-flex">
                        <div className="ms-2 me-auto">
                            <h5 className="card-title fw-bold">{chat.name}</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );

}

export default ChatCard;