import React from 'react'

function User(props) {
    return (
          <li class="contact card mb-3" styles="max-width: 540px;" key={props.user}>
              <div class="row no-gutters" 
              onClick={() => props.displayChatWith(props.user)}>
                  <div class="col-md-4 my-auto">
                      <img id="userImage" src={props.user.image} class="card-img mr-1" alt="..."></img>
                  </div>
                  <div class="col-md-8 my-auto">
                      <div class="card-body justify-content-between d-flex">
                          <div class="ms-2 me-auto">
                              <h5 class="card-title fw-bold">{props.user.firstName} {props.user.lastName}
                              </h5>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
      )
}

export default User;