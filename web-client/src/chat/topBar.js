import AddContact from "./AddContact";

function Bar({addContact}) {
    return (
        <div class="px-4 d-none d-md-block">
        <div class="d-flex align-items-center">
            <div class="flex-grow-1">
                <AddContact addUser={addContact}/>
                <input type="text" class="form-control my-3" placeholder="Search...">
                </input>
            </div>
        </div>
    </div>
    );
}

export default Bar;