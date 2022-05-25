import User from '../classes/User';
import Message from '../classes/Message';
import Chat from '../classes/Chat';

import users from '../database/Users';
import chats from '../database/Chats';

class RemoteDBHandler {

    constructor(url,jwt) {
        this.url = url;
        this.jwt = jwt;
    }

    async addContact(user){
        fetch('http://' + this.url + '/api/contacts/' + user.username, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.jwt,
            },
            body: JSON.stringify({
                'id':user.username,
                'name':user.nickname,
                'server':user.server
            }),
        })
    }

    async login(username,password){
        var token = "";
        var res = await fetch('http://' + this.url + '/api/contacts/Login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'username':username,
                'password':password,
            }),
        }).then(response=>response.text())
        return res;
    }

    async curUser(jwt){
        var token = "";
        var res = await fetch('http://' + this.url + '/api/contacts/currentUser/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ jwt,
            },
        }).then(response=>response.json())
        return res;
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
                'Authorization': 'Bearer '+this.jwt,
            },
            body: JSON.stringify({
                'content': message.content,
            }),
        })
    }

    async getContactsOfUser() {
        var res = await fetch('http://' + this.url + '/api/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.jwt,
            },
        }).then(response=>response.json())
        return res;
    }

    async getChatsOfCurrentUser(user) {
        let chats = [];
        let contactsArray=[];
        let data = await this.getContactsOfUser().then(data => {
            for (let c of data) {
                let otherUser = new User(c["id"], c["name"],"",c["server"]);
                chats.push(new Chat([user, otherUser], []));
            }
        })
        return chats;
    }
}

export default RemoteDBHandler;