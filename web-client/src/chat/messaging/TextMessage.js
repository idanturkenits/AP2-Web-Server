import React from 'react'

class TextMessage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        text : props.text,
      }
    }
  
    render () {
      return (
            <div>
                <text>{this.state.text}</text>
            </div>
      )
    }
}

export default TextMessage;