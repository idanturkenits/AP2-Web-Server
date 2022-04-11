import React from 'react'

class User extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        firstName : props.user.firstName,
        lastName : props.user.lastName,
        image : props.user.image,
        chatHistory : props.user.chatHistroy,
        display : props.displayChatWith
      }
    }
  
    render () {
      return (
          <li class="contact card mb-3" styles="max-width: 540px;">
              <div class="row no-gutters" 
              onClick={() => this.state.display(this.state)}>
                  <div class="col-md-4 my-auto">
                      <img src={this.state.image} class="card-img rounded-circle mr-1" alt="..."></img>
                  </div>
                  <div class="col-md-8 my-auto">
                      <div class="card-body justify-content-between d-flex">
                          <div class="ms-2 me-auto">
                              <h5 class="card-title fw-bold">{this.state.firstName} {this.state.lastName}
                              </h5>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
      )
    }
}

export default User;