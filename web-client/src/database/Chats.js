import users from './Users';
import Message from '../classes/Message';
import Chat from '../classes/Chat';

let chats = [
    
    new Chat(
        [users[0], users[1]],
        [
            new Message('text', 'Hi', users[0], new Date()),
            new Message('text', 'Hello', users[1], new Date()),
            new Message('text', 'Howasdasd are you?', users[0], new Date()),
            new Message('text', 'I am fine', users[1], new Date()),
            new Message('image','logo192.png',users[0],new Date()),
            new Message('video','vid.mp4',users[1],new Date())
        ]
    ),

    new Chat(
        [users[0], users[2]],
        [
            new Message('text', 'Hi??', users[2], new Date()),
        ],
    ),

    new Chat(
        [users[0], users[2], users[1]],
        [
            new Message('text', 'Hi??', users[2], new Date()),
        ],
        'מתקדמים...'
    )

]

export default chats