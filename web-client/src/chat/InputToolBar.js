import React from 'react'

class InputToolBar extends React.Component {
    render () {
      return (
            <div class="flex-grow-0 py-3 px-4 border-top">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Type your message"></input>
                    <button class="btn btn-primary">Send</button>
                </div>
            </div>
      )
    }
}

export default InputToolBar;