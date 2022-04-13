import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import users from '../database/Users'

function LoginForm({ setIsAuthenticatedFunc }) {
    const [error, setError] = useState(false);

    let navigate = useNavigate();
    let usernameRef = useRef(null)
    let passwordRef = useRef(null)

    let doLogin = function () {
        let usernameInput = usernameRef.current.value
        let passwordInput = passwordRef.current.value
        for (const user of users) {
            if (user.username === usernameInput && user.password === passwordInput) {
                setIsAuthenticatedFunc(true)
                navigate('/chat');
            }
            else {
                setError('Invalid username or password');
            }
        }
    }
    return (
        <div className="card mt-5" style={{borderRadius: 2 + '%'}}>
            <div className="card-header text-center">
                <h1>Login</h1>
            </div>
            <div className="card-body">
                <div className="form-group mt-2">
                    <input type="text" className="form-control" id="username" ref={usernameRef} placeholder="username"/>
                </div>
                <div className="form-group mt-4">
                    <input type="password" className="form-control" id="password" ref={passwordRef} placeholder="password"/>
                </div>
                <p className="form-label mt-2 mb-5 text-danger">{error}</p>
                <div className="mt-5 d-flex justify-content-center">
                    <button id="login_btn" type="button" className="btn btn-dark btn-block w-100" onClick={doLogin}>Login</button>
                </div>

                <div className="mt-5 d-flex justify-content-center">
                    <p className="form-label mt-2 mb-5">Not a member? <Link to="/signup" className="text-decoration-none">SignUp</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;