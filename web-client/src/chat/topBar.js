import AddContact from "./addContact";
import CurrentUserInfo from "./CurrentUserInfo";
import TopUserInfo from "./TopChatInfo";
import { Link, useNavigate } from "react-router-dom";
function Bar({ addContact, currentUser, updateCont}) {
    let updateSearch = function() {
        let filter = document.getElementById("searchBoxInput").value;
        updateCont(filter);
    }

    let navigate = useNavigate();
    let logout = function() {
        navigate('/login');
    }

    return (
        <div className="px-4 d-none d-md-block">
            <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                    <CurrentUserInfo currentUser={currentUser} />
                    <AddContact addContact={addContact} currentUser={currentUser} />
                    <label className="form-label" onClick={logout}>Logout   </label> <Link to="/login" className="link-dark"><i className="bi bi-box-arrow-left"></i></Link>
                    <input type="text" id="searchBoxInput" className="form-control my-3" placeholder="Search..." onKeyUp={() => updateSearch()}>
                    </input>
                </div>
            </div>
        </div >
    );
}

export default Bar;