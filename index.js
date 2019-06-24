var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const publicDir = `${__dirname}/public`;

http.listen(port, () => {
	console.log('Iniciando Server en el puerto: %d', port)
})

//routes streaming

app.get("/", (req, res) => {

	res.sendFile(`${publicDir}/client.html`)

})

app.get("/streaming", (req, res) => {

	res.sendFile(`${publicDir}/server.html`)

})


// socket.io
io.on('connection', function (socket) {
	socket.on('streaming', (image) => {
		io.emit('clientestreaming', image)
	});
})



