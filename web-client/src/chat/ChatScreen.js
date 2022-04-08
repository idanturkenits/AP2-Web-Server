import { useRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen(user) {
    return (
        /*the entire page*/
        <div class="container">
            
            {/*main screen*/}
            <div class="card">
                <div class="row">
                    {/*the chat side*/}
                    <div class="col-12 col-lg-5 col-xl-3 border-right">
                        
                    </div>

                    {/*the contacts side*/}
                    <div class="col-12 col-lg-7 col-xl-9">second</div>
                </div>
            </div>
        </div>
  )
}
export default ChatScreen;