import { useRef, useState } from 'react'
import User from '../classes/User';
import LocalDBHandler from '../db_handlers/LocalDBHandler'
import RemoteDBHandler from '../db_handlers/RemoteDBHandler';

function AddContact({addContact, currentUser}) {
    let [error, setError] = useState('');
    let usernameRef = useRef(null);
    let nicknameRef = useRef(null);
    let serverRef = useRef(null);

    let sendByEnter = function(event) {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("addContactBtn").click();
          }
    }

    let addUser = function() {
        
        let handler = new RemoteDBHandler(currentUser.server);
        let otherHandler = new RemoteDBHandler(serverRef.current.value);
        let username = usernameRef.current.value;
        let nickname = nicknameRef.current.value;
        if (usernameRef.current.value == "" || nicknameRef.current.value == "" || serverRef.current.value == "") {
            setError('please fill all the fields');
            return
        }
        handler.addContact({username: username, nickname: nickname, server: otherHandler.server});
        otherHandler.addContact({username: currentUser.username, nickname: currentUser.nickname, server: currentUser.server});

        usernameRef.current.value = ''
        document.getElementById("closeAddContact").click();
    }

    return (
        <div>
            <label htmlFor='adddCnBtn'>Add Contact</label>
            <button type="button" id="adddCnBtn" className="btn" data-bs-toggle="modal" data-bs-target="#addContact">
                <i className="bi bi-person-plus-fill"></i>
            </button>
            <div className="modal fade" id="addContact" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Contact</h5>
                            <button type="button" id="closeAddContact" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div id="addContactForm">
                                <div className="form-row">
                                    <div className="form-group mb-2">
                                        <input type="text" onKeyUp={sendByEnter} className="form-control" ref={nicknameRef} placeholder="Nickname"></input>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group mb-2">
                                        <input type="text" onKeyUp={sendByEnter} className="form-control" ref={usernameRef} placeholder="Username"></input>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group mb-2">
                                        <input type="text" onKeyUp={sendByEnter} className="form-control" ref={serverRef} placeholder="Server"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="form-label ms-2 mt-2 mb-5 text-danger">{error}</p>
                        <div className="modal-footer justify-content-start">
                            <button type="button" id="addContactBtn" className="btn btn-primary" onClick={()=>addUser()}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddContact;