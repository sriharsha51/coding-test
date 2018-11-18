const express = require('express');
const app = express();
const path = require('path');
var port = process.env.PORT || 4000;
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(express.static(__dirname + '/dist'));
server.use(middlewares);
server.use(router);
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

server.listen(port);
app.listen(port, () => {
    console.log("App is running on port " + port);
});



