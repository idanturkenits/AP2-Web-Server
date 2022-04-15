import AddContact from "./addContact";

function Bar({addContact, currentUser}) {
    return (
        <div class="px-4 d-none d-md-block">
        <div class="d-flex align-items-center">
            <div class="flex-grow-1">
                <AddContact addContact={addContact} currentUser={currentUser}/>
                <input type="text" class="form-control my-3" placeholder="Search...">
                </input>
            </div>
        </div>
    </div>
    );
}

export default Bar;