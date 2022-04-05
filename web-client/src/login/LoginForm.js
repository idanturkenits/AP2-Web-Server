import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import users from '../database/Users'

function LoginForm({setIsAuthenticatedFunc}) {
    const [error,setError] = useState(false);

    let navigate = useNavigate();
    let usernameRef = useRef(null)
    let passwordRef = useRef(null)

    let doLogin = function () {
        let usernameInput = usernameRef.current.value
        let passwordInput = passwordRef.current.value
        for(const user of users){
            if(user.username === usernameInput && user.password === passwordInput){
                setIsAuthenticatedFunc(true)
                navigate('/chat');
            }
            else{
                setError(true);
            }
        }
    }

    var errorMessage;
    if (error){
        errorMessage = <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <i class="bi-exclamation-octagon-fill mx-2"></i>
                            Invalid Username or Password
                        </div>;
    }

    return (
        <div>
        <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">Username</label>
              <input className="form-control" ref={usernameRef} id="username" required></input>
        </div>
            <div className="mb-3" id="password">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" ref={passwordRef} required></input>
            </div>
            <p className="form-label">Dont have a username? <Link to="/signup">click here to sign up</Link></p>
            <button className="btn btn-success" onClick={doLogin}>Submit</button>
            {errorMessage}
        </div>
    );
}

export default LoginForm;