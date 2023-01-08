const express = require ("express");
const app = express();
var io   = require('socket.io')(8000);


app.get ('/', function (req,res){
 res.sendFile( __dirname + '/index.html');
 console.log("connecting");
});

var users = {}

io.on("connection", (socket) => {
  socket.on("new-user-joined", name => {
      users[socket.id] = name;
        socket.broadcast.emit("users-joined" , name);
    console.log(name); // world
  });

  socket.on ('send', message => {
    socket.broadcast.emit('receive' , {message: message , name:users[socket.id]});
    console.log(message);
  })

});
