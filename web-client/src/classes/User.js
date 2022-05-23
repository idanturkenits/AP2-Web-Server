 
class User {
    constructor(username, nickname, password, image, server="localhost:5122"){
        this.username = username;
        this.nickname = nickname;
        this.password = password;
        this.image = image;
        this.server = server;
    }
}

export default User