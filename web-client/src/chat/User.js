import React from 'react'

class User extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name : props.name,
        age : props.age
      }
    }
  
    render () {
      return (
          <div class="card mb-3" styles="max-width: 540px;">
              <div class="row no-gutters">
                  <div class="col-md-4">
                      <img src="..." class="card-img" alt="..."></img>
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <h5 class="card-title">{this.state.name}</h5>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}

export default User;