import TextMessage from "../chat/messaging/TextMessage";
import ImageMessage from "../chat/messaging/ImageMessage";

// create a Messege class
class MessageClass {
    constructor(type, content, sender, date) {
        this.type = type;
        this.content = content;
        this.sender = sender;
        this.date = date;
    }

    dateToString() {
        return this.date.toLocaleTimeString();
    }

    toComponent() {
        switch (this.type) {
            case 'text':
                return <TextMessage text={this.content} />
                break;
            case 'image':
                return <ImageMessage src={this.content} />
                break;
        }
    }
}

export default MessageClass;