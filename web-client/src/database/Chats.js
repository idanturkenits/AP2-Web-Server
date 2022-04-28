import users from './Users';
import Message from '../classes/Message';
import Chat from '../classes/Chat';

let chats = [
    
    new Chat(
        [users[0], users[4]],
        [
            new Message('text', 'חמי תגיד רגע אפשר להביא להם יותר מ 100?', users[0], new Date()),
            new Message('text', 'אם הם עשו ממש מושקע אז כן', users[4], new Date()),

        ],
    ),

    new Chat(
        [users[0], users[1], users[2], users[3]],
        [
            new Message('text', 'צריך להתחיל לעשות את מתקדם', users[2], new Date()),
            new Message('text', 'דחוף!! זה להיום', users[1], new Date()),
            new Message('text', 'עזבו תחפפו משהו אני בטוח שהבודק לא ישים לב', users[3], new Date()),
            new Message('text', 'לאלא לא נחפף עושים עיצוב יפה שיתן בונוס', users[2], new Date()),
            new Message('text', 'היי.....', users[0], new Date()),
            new Message('text', 'שיט הבודק בקבוצה!!', users[1], new Date()),



        ],
        'פרוייקט במתקדם'
    ),

    new Chat(
        [users[0], users[1]],
        [
            new Message('text', 'Hi Idan Im the Bodek', users[0], new Date()),
            new Message('text', 'Hello', users[1], new Date()),
            new Message('text', 'How are you?', users[0], new Date()),
            new Message('text', 'I am fine', users[1], new Date()),
            new Message('image','logo192.png',users[0],new Date()),
            new Message('video','vid.mp4',users[1],new Date()),
            new Message('text', 'can you send audio only version on this masterpiece?', users[0], new Date()),
            new Message('audio', 'RickRollAudio.mp3', users[1], new Date()),
        ]
    ),

    new Chat(
        [users[0], users[2]],
        [
            new Message('text', 'Hi??', users[2], new Date()),
        ],
    ),


    new Chat(
        [users[0], users[3]],
        [
            new Message('text', 'איך אתה?', users[3], new Date()),
        ],
    ),


]

export default chats