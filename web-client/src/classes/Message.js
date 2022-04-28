// create a Messege class
class MessageClass {
    constructor(type, content, sender, date, name='') {
        this.type = type;
        this.content = content;
        this.sender = sender;
        this.date = date;
        this.name = this.type;
    }

    dateToString() {
        return this.date.toLocaleTimeString();
    }
}

export default MessageClass;