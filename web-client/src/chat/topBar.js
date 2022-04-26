import AddContact from "./addContact";
import CurrentUserInfo from "./CurrentUserInfo";
import TopUserInfo from "./TopChatInfo";
import { Link } from "react-router-dom";
function Bar({ addContact, currentUser, updateCont}) {

    let updateSearch = function() {
        let filter = document.getElementById("searchBoxInput").value;
        updateCont(filter);
    }

    return (
        <div class="px-4 d-none d-md-block">
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <CurrentUserInfo currentUser={currentUser} />
                    <AddContact addContact={addContact} currentUser={currentUser} />
                    <p className="form-label"><Link to="/login" className="text-decoration-none"><i class="bi bi-box-arrow-left"></i></Link></p>
                    <input type="text" id="searchBoxInput" class="form-control my-3" placeholder="Search..." onKeyUp={() => updateSearch()}>
                    </input>
                </div>
            </div>
        </div >
    );
}

export default Bar;