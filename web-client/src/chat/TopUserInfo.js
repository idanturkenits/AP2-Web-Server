
function TopUserInfo({ currentUser, chat, displayChat }) {
    if(chat == null){
        return;
    }
    return (
        <div className="flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <img id="userImage" src={chat.image} className="card-img mr-1" alt="..."></img>
                <h5 className="mb-1">{chat.name}</h5>
            </div>
        </div>
    );
}

export default TopUserInfo;
