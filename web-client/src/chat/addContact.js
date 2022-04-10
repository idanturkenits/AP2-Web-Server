import $ from 'jquery'
import { useRef } from 'react'

function AddContact(changeUsers) {
    let firstName = useRef(null)
    let lastName = useRef(null)

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
                                        <input type="text" class="form-control" ref={firstName} placeholder="First name"></input>
                                    </div>
                                    <div class="form-group mb-2">
                                        <input type="text" class="form-control" ref={lastName} placeholder="Last name"></input>
                                    </div>
                                    <div class="form-group mb-2">
                                        <input class="form-control" type="file"></input>
                                    </div>
                                </div>
                            </form>
                </div>
                <div class="modal-footer justify-content-start">
                    <button type="button" class="btn btn-primary" onClick={() => addData(firstName.current.value,lastName.current.value)} data-bs-toggle="modal" data-bs-target="#addContact">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

function addData(fName,lName) {
}

export default AddContact;