import React, { useRef } from 'react'
import Message from '../classes/Message';

function InputToolBar(props) {    
    let messageInputRef = useRef(null);
    let sendByEnter = function(event) {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("sendBtn").click();
          }
    }

    return (
        <div class="flex-grow-0 py-3 px-4 border-top">
            <div class="input-group">
                <input type="text" class="form-control"  onKeyUp={sendByEnter} ref={messageInputRef} placeholder="Type your message"></input>
                <button class="btn btn-primary" id="sendBtn" onClick={() => {props.addTextMessage(messageInputRef.current.value); messageInputRef.current.value = '';}}>Send</button>
            </div>
        </div>
    );
}

export default InputToolBar;