import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import users from '../database/Users'
import User from '../classes/User'
function SignUpForm() {

    let navigate = useNavigate();

    let usernameRef = useRef(null)
    let nicknameRef = useRef(null)
    // let imageRef = useRef(null)
    let passwordRef = useRef(null)
    let confirmPasswordRef = useRef(null)

    let doSignUp = function () {
        // get data from boxes
        let usernameInput = usernameRef.current.value
        let nicknameInput = nicknameRef.current.value
        let passwordInput = passwordRef.current.value
        let confirmPasswordInput = confirmPasswordRef.current.value

        // check if username is already taken
        for (const user of users) {
            if (user.username === usernameInput) {
                alert('Username is already taken')
                return
            }
        }

        // check if passwords match
        if (passwordInput !== confirmPasswordInput) {
            alert("Passwords do not match")
            return
        }
        // check if one of the fields is empty
        if (usernameInput === '' || passwordInput === '' || nicknameInput === '') {
            alert("Please fill in all fields")
            return
        }

        // add the user to the user list
        users.push(new User(usernameInput, nicknameInput, passwordInput, ''))

        // clear the text boxes
        usernameRef.current.value = ''
        nicknameRef.current.value = ''
        passwordRef.current.value = ''
        confirmPasswordRef.current.value = ''

        navigate('/login')
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">Username</label>
                <input className="form-control" ref={usernameRef}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">Nickname</label>
                <input className="form-control" ref={nicknameRef}></input>
            </div>
            <div class="mb-3">
                <label htmlFor="inputUsername" className="form-label">Image</label>
                <input className="form-control" type="file" accept="image/*" id="imgInp"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" ref={passwordRef}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirm password</label>
                <input className="form-control" type="password" ref={confirmPasswordRef}></input>
            </div>
            <button className="btn btn-success" onClick={doSignUp}>Sign Up</button>
            <p className="form-label">Already have a username? <Link to="/login">click here to log in</Link></p>

        </div>
    );
}
export default SignUpForm;