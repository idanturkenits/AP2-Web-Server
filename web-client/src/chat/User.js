import React from 'react'

class User extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user : props.user,
        display : props.displayChatWith
      }
    }
  
    render () {
      return (
          <li class="contact card mb-3" styles="max-width: 540px;">
              <div class="row no-gutters" 
              onClick={() => this.state.display(this.state.user)}>
                  <div class="col-md-4 my-auto">
                      <img src={this.state.user.image} class="card-img rounded-circle mr-1" alt="..."></img>
                  </div>
                  <div class="col-md-8 my-auto">
                      <div class="card-body justify-content-between d-flex">
                          <div class="ms-2 me-auto">
                              <h5 class="card-title fw-bold">{this.state.user.firstName} {this.state.user.lastName}
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