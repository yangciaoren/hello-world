var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app.html');
});

io.on('connection', function(socket){
	//console.log('a user connected');
	socket.on('chat message', function(msg){
     console.log('message: ' + msg);
	 io.emit('chat message', msg);
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});


//app.get('/app', function(req, res) {
//	res.send('Hello Baby!');
//});

app.post('/', function(req, res) {
  console.log(req.body);
  res.send('Hello World!');
  // res.json(a);
});

//app.listen(3000, function() {
//  console.log('Example app listening on port 3000!');
//});
