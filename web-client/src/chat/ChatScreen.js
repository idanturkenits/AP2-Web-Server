import React from 'react'
import { Link } from 'react-router-dom'
import UsersList from './usersList';
import Bar from './topBar';
import { useRef, useState } from 'react'
import User from "./User"
import InputToolBar from "./InputToolBar"
import Chat from "./messaging/Chat"

/*
disc: Chat is the main window' with all the contacts and their chats
user: is the obj represent the user data
*/
function ChatScreen(user) {
    const messages1 = [{content:'Yossi',time:"12"}];
    const messages2 = [{content:'It works!!!!',time:"5:47"},{content:'Yossi',time:"12"}];
    const [uList,setUList] = useState([{firstName:'Haim',lastName:"Cohen",image:"logo192.png",chatHistory:messages1},{firstName:'Noam',lastName:"Katz",image:"Capture1.PNG",chatHistory:messages2}]);
    const [contact, setContact] = useState(uList[0]);
    
    const displayChatWith = function(user) {
        setContact(user);
    }

    const addTextMessage = function(props) {
        // getting the current time
        var today = new Date();
        var curTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        // finding the contacts to send the messaged to
        var updatesContact = uList.find((cont) => {return contact.firstName === cont.firstName && contact.lastName === cont.lastName})
        updatesContact.chatHistory = updatesContact.chatHistory.concat({content : props.text, time : curTime})
        setContact({...updatesContact}); //need to save
    }

    const addCont = function(user) {
        let newArr = uList.concat(user);
        setUList(newArr);
    }

    return (
        /*the entire page*/
        <div class="container">
            <div class="card">
            <div class="row">
                    <div class="col-3 col-lg-3 col-xl-3">
                    <Bar changeState={addCont}/>
                    <UsersList users={uList} displayChatWith={displayChatWith} />
                    </div>
                    <div class="col-9 col-lg-9 col-xl-9 border-start">
                        {/*the user that the chat with him */}
                        <div class="py-2 px-4 border-bottom d-none d-lg-block">
                            <div class="d-flex align-items-center py-1">
                                <User user={contact} displayChatWith={displayChatWith}/>
                            </div>
                        </div>

                        {/*the chat*/}
                        <div>
                        <Chat dispContact={contact}/>
                        <InputToolBar {...{addTextMessage : addTextMessage}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
export default ChatScreen;
