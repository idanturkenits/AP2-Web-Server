import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  let usernameRef = useRef(null)
  let passwordRef = useRef(null)

  let doLogin = function () {
    console.log(usernameRef.current.value)
    console.log(passwordRef.current.value)
  }

  return (
      <div>
        <h1 className="text-center">Log In</h1>
        <div className="container">
          <div className="row">
            <div className="col">
            </div>
            <div className="col">
              <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">Username</label>
                <input className="form-control" ref={usernameRef}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" ref={passwordRef}></input>
              </div>
              <p className="form-label">Dont have a username? <Link to="/signup">click here</Link></p>
              <button className="btn btn-success" onClick={doLogin}>Submit</button>

            </div>
            <div className="col">
            </div>
          </div>
        </div>
      </div>
  );
}

export default Login;