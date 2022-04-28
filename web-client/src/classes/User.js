 
class User {
    constructor(username, nickname, password, image){
        this.username = username;
        this.nickname = nickname;
        this.password = password;
        this.image = image;
        this.id = Math.random().toString(36).slice(2);
    }
}

export default User