import User from '../classes/User';
import Message from '../classes/Message';
import Chat from '../classes/Chat';

import users from '../database/Users';
import chats from '../database/Chats';

class RemoteDBHandler {

    constructor(url) {
        this.url = url;
    }

    async addContact(user){
        fetch('http://' + this.url + '/api/contacts/' + user.username, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'id':user.username,
                'name':user.nickname,
                'server':user.server
            }),
        })
    }

    async getChatsOfUserFiltered(userId, filter) {
        // returns a list with the users that has a chat with the given user
        let user_chats = this.getChatsOfCurrentUser()        
        for (let chat of user_chats) {
            let isIn = false;
            for (let user_in_chat of chat.users) {
                if (user_in_chat.nickname.toLowerCase().includes(filter.toLowerCase()) && user_in_chat.id != userId)
                    isIn = true;
                if (user_in_chat.username === userId) {
                    user_chats.push(chat)
                }
            }
            if (!isIn) {
                user_chats.pop();
            }
        }
        return user_chats
    }

    addChat(users) {
        chats.push(new Chat(users, []));
    }

    async addMessageToChat(otherUsername, message) {
        await fetch('https://' + this.url + '/api/contacts/' + otherUsername + '/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'content': message.content,
            }),
        })
    }

    async getContactsOfUser() {
        let r = await fetch('http://' + this.url + '/api/contacts');
        let data = r.json();
        return data;
    }

    async getChatsOfCurrentUser(user) {
        let contacts = this.getContactsOfUser();
        let chats = [];
        for (let c of contacts) {
            let otherUser = new User(c['id'], c['name'], '', '');
            // get messages
            let r = await fetch('http://' + this.url + '/messages/' + otherUser.id + 'messages');
            let data = r.json();
            let messages = data.map(m => new Message('text', m['content'], m['sent'] ? user : otherUser, m['created']));
            chats.push(new Chat([user, otherUser], messages));
        }
        return chats;
    }
}

export default RemoteDBHandler