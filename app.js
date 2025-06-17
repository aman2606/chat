const express = require('express');

const path = require('path')

const webRoutes = require('./routes/web');

const app = express();

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname, 'public')))

app.use(webRoutes);

app.use((req,res)=>{

    res.send("Not Found");

});

var port = process.env.PORT || 3000;

const server = app.listen(port,'0.0.0.0');

const io = require('socket.io')(server);

io.on('connection',socket=>{
    console.log("Client Connected");
    console.log(socket.id);
    socket.on('chat message', (msgObject) => {
        io.emit('chat message', {username:msgObject.username,message:msgObject.message,clientId:msgObject.clientId});
    });
});





