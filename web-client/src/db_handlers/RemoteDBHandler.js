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
        fetch('http://' + this.url + '/api/contacts/', {
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

    async getChatById(contactId) {
        // returns a list with the users that has a chat with the given user
        var res = await fetch('http://' + this.url + '/api/contacts/'+contactId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ this.jwt,
            },
        }).then(response=>response.json())
        return res;
    }

    async addMessageToChat(otherUsername, message) {
        await fetch('http://' + this.url + '/api/contacts/' + otherUsername + '/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.jwt,
            },
            body: JSON.stringify({
                'content': message,
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

    async getMessagesOfContact(id) {
        var res = await fetch('http://' + this.url + '/api/contacts/'+id+'/messages',{
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
                let otherUser = new User(c["id"], c["name"],"",c["server"],c["last"],c["lastdate"]);
                chats.push(new Chat([user, otherUser], []));
            }
        })
        return chats;
    }
}

export default RemoteDBHandler;