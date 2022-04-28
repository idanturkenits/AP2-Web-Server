import React from 'react'

function FileMessage({message}) {
    return (
        <div>
            <i className="bi bi-box-arrow-down me-2"></i>
            <a download={message.content}
                href={message.content}>
                {message.name}
            </a>
        </div>
    );
}

export default FileMessage;