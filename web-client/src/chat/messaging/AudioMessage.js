import React from 'react'

function AudioMessage({message}) {
    return (
        <div>
            <audio controls>
                <source src={message.content}/>
            </audio>
        </div>
    );
}

export default AudioMessage;