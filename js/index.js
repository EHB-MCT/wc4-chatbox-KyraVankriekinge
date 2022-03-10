"use strict";

// url =>  https://ehbchatapp.herokuapp.com/

const chat = {
    author: "",
    init() {
        chat.fetchMessages();
        chat.renderMessage();
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch('https://ehbchatapp.herokuapp.com/messages')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                for(let i = data.length - 1; i >= 0; i--){
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