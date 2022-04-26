function CurrentUserInfo({currentUser}) {
    return (
        <div className="flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between mt-1">
                <img id="userImage" src={currentUser.image} className="card-img mr-1" alt="..."></img>
                <h5 className="m-auto ms-3">{currentUser.nickname}</h5>
            </div>
        </div>
    );
}

export default CurrentUserInfo;