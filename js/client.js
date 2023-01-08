
const socket = io('http://localhost8000');

const form = document.getElementById('send-container');
const message = document.getElementById('messageInp');
const container = document.querySelector('.conatiner');


// const append = (message,position);
// const messageElement = document.createElement('div');
//  messageElement.innerText = message ;
//  messageElement.classList.add('message');
//  messageElement.classList.add('position');
//  container.append(messageElement);



const name = prompt("Enter your name to join ");
socket.emit('new-user-joined', name );

// socket.on ('users-joined', name =>{
// append(`${name} joined the chat`, 'left');
// })

// socket.on('receive', data => {
//   append(`${data.user}: ${data.message}`, 'right')
// })
