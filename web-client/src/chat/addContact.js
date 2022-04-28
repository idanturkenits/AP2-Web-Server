import { useRef, useState } from 'react'
import LocalDBHandler from '../db_handlers/LocalDBHandler'

function AddContact({addContact, currentUser}) {
    let [error, setError] = useState('');
    let usernameRef = useRef(null);
    let sendByEnter = function(event) {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("addContactBtn").click();
          }
    }

    let addUser = function() {
        if (usernameRef.current.value=="") {
            setError('username is required');
            return
        }

        let handler = new LocalDBHandler();
        // get the username whos username is the same as input
        let user = handler.getUserByUserName(usernameRef.current.value);
        // if the user is not found
        if (user === null) {
            setError('username does not exists');
            return
        }
        // if the user tries to add himself
        if(user.username === currentUser.username) {
            setError('you cannot add yourself');
            return
        }

        // check if the user is already in the contact list
        let directContacts = handler.getDirectsOfUser(currentUser.id);
        let isInContactList = false;
        directContacts.forEach(function(contact) {
            if (contact.id === user.id) {
                isInContactList = true;
            }
        });
        if(isInContactList) {
            setError('user is already in your contact list');
            return
        }

        // if the user is not in the contact list
        addContact(user);

        // empty the input
        usernameRef.current.value = ''
        document.getElementById("closeAddContact").click();
    }

    return (
        <div>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#addContact">
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
                                        <input type="text" onKeyUp={sendByEnter} className="form-control" ref={usernameRef} placeholder="Username"></input>
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