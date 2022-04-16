import React from 'react'

function FileMessage(props) {
      return (
            <div>
                <a download={props.content}
                    href={props.content}>
                    Download FILE
                </a>
            </div>
      );
}

export default FileMessage;