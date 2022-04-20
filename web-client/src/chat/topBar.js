import AddContact from "./addContact";
import CurrentUserInfo from "./CurrentUserInfo";
import TopUserInfo from "./TopChatInfo";
import { Link } from "react-router-dom";
function Bar({ addContact, currentUser }) {
    return (
        <div class="px-4 d-none d-md-block">
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <CurrentUserInfo currentUser={currentUser} />
                    <AddContact addContact={addContact} currentUser={currentUser} />
                    <p className="form-label"><Link to="/login" className="text-decoration-none"><i class="bi bi-box-arrow-left"></i></Link></p>
                    <input type="text" class="form-control my-3" placeholder="Search...">
                    </input>
                </div>
            </div>
        </div >
    );
}

export default Bar;