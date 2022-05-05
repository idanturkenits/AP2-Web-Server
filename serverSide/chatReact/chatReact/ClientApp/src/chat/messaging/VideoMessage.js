import React from 'react'

function VideoMessage(props) {
      return (
            <div>
              <video width="320" height="240" controls>
                  <source src={props.src}></source>
                </video>
            </div>
      );
}

export default VideoMessage;