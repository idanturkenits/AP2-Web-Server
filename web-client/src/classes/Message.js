
// create a Messege class
class Message {
    constructor(type, content, sender, date) {
        this.type = type;
        this.content = content;
        this.sender = sender;
        this.date = date;
    }

    dateToString() {
        return this.date.toLocaleTimeString();
    }
}

export default Message;