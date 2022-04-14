import React, { useRef } from 'react'
import Message from '../classes/Message';

function InputToolBar(props) {    
    let messageInputRef = useRef(null);
    return (
        <div class="flex-grow-0 py-3 px-4 border-top">
            <div class="input-group">
                <input type="text" class="form-control" ref={messageInputRef} placeholder="Type your message"></input>
                <button class="btn btn-primary" onClick={() => {props.addTextMessage(messageInputRef.current.value); messageInputRef.current.value = '';}}>Send</button>
            </div>
        </div>
    )
}

export default InputToolBar;