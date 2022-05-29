 
class User {
    constructor(username, nickname,jwt, server="localhost:5112",lastMessage,lastDate){
        this.username = username;
        this.nickname = nickname;
        this.jwt = jwt;
        this.server = server;
        this.image = "notfound.png"
        this.lastMessage = lastMessage;
        this.lastDate = lastDate;
    }
}

export default User