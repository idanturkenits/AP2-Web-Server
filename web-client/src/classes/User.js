 
class User {

    constructor(username, nickname, password, img){
        this.username = username;
        this.nickname = nickname;
        this.password = password;
        this.img = img;
        this.id = Math.random().toString(36).slice(2);
    }

}

export default User