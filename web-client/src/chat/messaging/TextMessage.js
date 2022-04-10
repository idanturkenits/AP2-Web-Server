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
                {this.state.text}
            </div>
      )
    }
}

export default TextMessage;