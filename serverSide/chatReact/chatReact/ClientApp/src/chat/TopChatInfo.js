function TopChatInfo({currentUser, chat}) {
    if(chat == null){
        return <p></p>;
    }
    return (
        <div className="flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <img id="userImage" src={chat.image} className="card-img mr-1" alt="..."></img>
                <h5 className="m-auto ms-3">{chat.name}</h5>
            </div>
        </div>
    );
}
export default TopChatInfo;