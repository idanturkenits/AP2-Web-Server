import React, { useRef } from 'react'

function InputToolBar(props) {    
    let text = useRef(null)
    return (
        <div class="flex-grow-0 py-3 px-4 border-top">
            <div class="input-group">
                <input type="text" class="form-control" ref={text} placeholder="Type your message"></input>
                <button class="btn btn-primary" onClick={() => props.addTextMessage({text:text.current.value})}>Send</button>
            </div>
        </div>
    )
}

export default InputToolBar;