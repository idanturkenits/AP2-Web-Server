import AddContact from "./addContact";
import CurrentUserInfo from "./CurrentUserInfo";
import TopUserInfo from "./TopChatInfo";
function Bar({ addContact, currentUser, updateCont, setPage}) {

    let updateSearch = function() {
        let filter = document.getElementById("searchBoxInput").value;
        updateCont(filter);
    }

    let logout = function(event) {
        setPage(1);
    }

    return (
        <div className="px-4 d-none d-md-block">
            <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                    <CurrentUserInfo currentUser={currentUser} />
                    <AddContact addContact={addContact} currentUser={currentUser} />
                    <label className="form-label" onClick={logout}>Logout   </label><i className="bi bi-box-arrow-left"></i>
                    <input type="text" id="searchBoxInput" className="form-control my-3" placeholder="Search..." onKeyUp={() => updateSearch()}>
                    </input>
                </div>
            </div>
        </div >
    );
}

export default Bar;