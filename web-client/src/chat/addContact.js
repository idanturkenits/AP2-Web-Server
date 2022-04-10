import $ from 'jquery'
import { useRef } from 'react'

function AddContact(props) {
    let firstName = useRef(null)
    let lastName = useRef(null)
    let image = useRef(null)

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
                                        <input class="form-control" type="file" accept="image/*" ref={image} id="imgInp"></input>
                                    </div>
                                </div>
                            </form>
                </div>
                <div class="modal-footer justify-content-start">
                    <button type="button" class="btn btn-primary" onClick={() => addData(props.addUser,firstName.current.value,lastName.current.value,image)} data-bs-toggle="modal" data-bs-target="#addContact">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

function addData(func,fName,lName) {
    let profileImage = getImgData();
    func({firstName:fName,lastName:lName,image:profileImage});
}

function getImgData() {
    const chooseFile = document.getElementById("imgInp");
    var src = URL.createObjectURL(chooseFile.files[0]);
    return src;
}

export default AddContact;