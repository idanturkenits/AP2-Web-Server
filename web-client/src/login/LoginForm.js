import { useRef } from 'react'
import { Link } from 'react-router-dom'
import users from '../database/Users'

function LoginForm() {

    let usernameRef = useRef(null)
    let passwordRef = useRef(null)

    let doLogin = function () {
        let usernameInput = usernameRef.current.value
        let passwordInput = passwordRef.current.value
        for(const user of users){
            if(user.name === usernameInput && user.password === passwordInput){
                console.log("good")
            }
        }
    }

    return (
        <div>
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
    );
}

export default LoginForm;