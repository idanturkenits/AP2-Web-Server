import { useRef, useState } from 'react'
import LocalDBHandler from '../db_handlers/LocalDBHandler'

function AddContact(props) {
    let [error, setError] = useState('');
    let usernameRef = useRef(null)

    function addUser() {
        let handler = new LocalDBHandler();
        // get the username whos username is the same as input
        let user = handler.getUserByUserName(usernameRef.current.value);
        // if the user is not found
        if (user === null) {
            setError('username does not exist');
        }else{
            console.log("UserFound")
            props.addUser(user);
        }

        // empty the input
        usernameRef.current.value = ''
    }

    return (
        <div>
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addContact">
                <i class="bi bi-person-plus-fill"></i>
            </button>
            <div class="modal fade" id="addContact" tabIndex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Contact</h5>
                            <button type="button" id="closeAddContact" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="addContactForm">
                                <div class="form-row">
                                    <div class="form-group mb-2">
                                        <input type="text" class="form-control" ref={usernameRef} placeholder="Username"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <p className="form-label ms-2 mt-2 mb-5 text-danger">{error}</p>
                        <div class="modal-footer justify-content-start">
                            <button type="button" class="btn btn-primary" onClick={addUser}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddContact;