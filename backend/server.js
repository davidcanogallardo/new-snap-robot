const express = require('express');
const http = require('http');
const robot = require('./robotController');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST']
	}
});

// rotacion actual de los ejes del robot
this.armPositions = {
	amarillo: { _x: 0, _y: 0, _z: 0 },
	rojo: { _x: 0, _y: 0, _z: 0 },
	rosa: { _x: 0, _y: 0, _z: 0 },
	naranja: { _x: 0, _y: 0, _z: 0 }
};

io.on('connection', (socket) => {
	socket.on('connection', (fn) => {
		console.log('user connected');
		// console.log(armPositions);
		fn(this.armPositions)
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
		socket.disconnect();
	});

	socket.on('stopQueue', () => {
		socket.broadcast.emit('stopQueue2');
	});

	socket.on('sendRotation', (data) => {
		socket.broadcast.emit('rotate', data);
		robot.move(data)
	});

	socket.on('sendArmPosition2', (data) => {
		socket.broadcast.emit('positionArm2', data);
	});

	socket.on('updateArmRotation', (data) => {
		console.log(`actualiza coords`);
		this.armPositions = data
		// console.log(data);
	});

});

module.exports.resetArmPosition =  function () {
	this.armPositions = {
		amarillo: { _x: 0, _y: 0, _z: 0 },
		rojo: { _x: 0, _y: 0, _z: 0 },
		rosa: { _x: 0, _y: 0, _z: 0 },
		naranja: { _x: 0, _y: 0, _z: 0 }
	}
	io.emit('robotOff');
}

server.listen(3000, () => {
	console.log('listening on *:3000');
});
