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
          <div class="contacts card mb-3" styles="max-width: 540px;">
              <div class="row no-gutters">
                  <div class="col-md-4 my-auto">
                      <img src="logo512.png" class="card-img rounded" alt="..."></img>
                  </div>
                  <div class="col-md-8 my-auto">
                      <div class="card-body justify-content-between d-flex">
                          <div class="ms-2 me-auto">
                              <h5 class="card-title fw-bold">{this.state.name}
                              </h5>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
    }
}

export default User;