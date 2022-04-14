
// create a Chat class
class Chat {
    constructor(users, messages, name='Unamed Chat') {
        this.id = Math.random().toString(36).slice(2);;
        this.users = users;
        this.messages = messages;
        this.name = name;
        this.image = 'notfound.png';
    }
}

export default Chat