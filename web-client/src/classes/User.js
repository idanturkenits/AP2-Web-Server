 
class User {
    constructor(username, nickname,jwt, server="localhost:5112"){
        this.username = username;
        this.nickname = nickname;
        this.jwt = jwt;
        this.server = server;
        this.image = "notfound.png"
    }
}

export default User