"use strict";

// url =>  https://ehbchatapp.herokuapp.com/

const chat = {
    author: "",
    init() {
        chat.fetchMessages();
        chat.renderMessage();
    },
    sendMessage() {
        fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => { console.log(data) });
    },
    fetchMessages() {
        fetch('https://ehbchatapp.herokuapp.com/messages')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                for(let i = 0; i < 6; i++){
                    const messageObject = data[i];
                    messagesString += '<div class="messageItem"><div class="header"><span class="author">' + messageObject.author  + '</span><span class="time"></span></div><p>' + messageObject.message + '</p></div>';
                }
                document.getElementById('messageContainer').innerHTML = messagesString;
            })
    },
    renderMessage(message) {
        
    }
}

let messagesString = '';
chat.init()