import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import users from '../database/Users'
import User from '../classes/User'
function SignUpForm() {
    const [error, setError] = useState('');
    let navigate = useNavigate();

    let usernameRef = useRef(null)
    let nicknameRef = useRef(null)
    let passwordRef = useRef(null)
    let confirmPasswordRef = useRef(null)
    let imageRef = useRef(null)

    let sendByEnter = function(event) {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("signUp_btn").click();
          }
    }

    let doSignUp = function () {
        // get data from boxes
        let usernameInput = usernameRef.current.value
        let nicknameInput = nicknameRef.current.value
        let passwordInput = passwordRef.current.value
        let confirmPasswordInput = confirmPasswordRef.current.value
        let imageInput = imageRef.current;

        // check if one of the fields is empty
        if (usernameInput === '' || passwordInput === '' || nicknameInput === '') {
            setError('Please fill in all fields')
            return
        }
        // check if username is already taken
        for (const user of users) {
            if (user.username === usernameInput) {
                setError('Username is already taken')
                return
            }
        }
        // check if passwords match
        if (passwordInput !== confirmPasswordInput) {
            setError('Passwords do not match')
            return
        }
        if (imageInput.files.length==0) {
            setError('Image is required')
            return
        }
        // check if password is at least 6 characters long and contains at least one number anad one Capital letter
        if (passwordInput.length < 6 || !/\d/.test(passwordInput) || !/[A-Z]/.test(passwordInput)) {
            setError('Password must be at least 6 characters long, contain at least one number and one capital letter')
            return
        }

        // add the user to the user list
        users.push(new User(usernameInput, nicknameInput, passwordInput, getImgData()))

        // clear the text boxes
        usernameRef.current.value = ''
        nicknameRef.current.value = ''
        passwordRef.current.value = ''
        confirmPasswordRef.current.value = ''

        navigate('/login')
    }
    return (
        <div className="card mt-5 box-shadow" style={{ borderRadius: 2 + '%' }}>
            <div className="card-header text-center">
                <h1>Sign Up</h1>
            </div>
            <div className="card-body">
                <div className="form-group mt-2">
                    <input type="text" onKeyUp={sendByEnter} className="form-control" id="username" ref={usernameRef} placeholder="username" required/>
                </div>
                <div className="form-group mt-4">
                    <input type="text" onKeyUp={sendByEnter} className="form-control" id="nicname" ref={nicknameRef} placeholder="nickname" required/>
                </div>
                <div className="form-group mt-4">
                    <input type="password" onKeyUp={sendByEnter} className="form-control" id="password" ref={passwordRef} placeholder="password" required/>
                </div>
                <div className="form-group mt-4">
                    <input type="password" onKeyUp={sendByEnter} className="form-control" id="Repassword" ref={confirmPasswordRef} placeholder="confirm password" required/>
                </div>
                <div className="form-group mt-4">
                    <input type="file" className="form-control" ref={imageRef} id="imgInp" placeholder="upload image" accept='image/*' required/>
                </div>
                <p className="form-label mt-2 mb-5 text-danger">{error}</p>
                <div className="mt-5 d-flex justify-content-center">
                    <button id="signUp_btn" type="button" className="btn-hover color-1 w-100" onClick={doSignUp}>Sign Up</button>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <p className="form-label mt-2 mb-5">Already a member? <Link to="/login" className="text-decoration-none">Login</Link></p>
                </div>
            </div>
        </div>
    );
}

function getImgData() {
    const chooseFile = document.getElementById("imgInp");
    var src = URL.createObjectURL(chooseFile.files[0]);
    return src;
}

export default SignUpForm;