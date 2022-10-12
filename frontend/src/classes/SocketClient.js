class SocketClient {
    constructor() {
        this.connected = false
    }

    // connections
    connect() {
        this.socket = io(socketUrl)
        this.socketOn()
        this.connected = true
        this.socket.emit('connection', (pos) => {
            console.log(pos);
            // arm.setArmRotationFromRoom(pos)
            if (arm.isRendered) {
                arm.setArmRotationFromRoom(pos)
            } else {
                arm.setArmRotations(pos)
            }
        })
    }

    disconnect() {
        this.connected = false
        this.socket.disconnect();
    }

    isConnected() {
        return this.connected
    }

    // emits
    emitMove(data) {
        this.socket.emit('sendRotation', data);
    }

    emitSetPosition(data) {
        this.socket.emit('sendArmPosition2', data);
    }

    emitUpdateRoation(armRotations) {
        this.socket.emit('updateArmRotation', armRotations)
    }

    socketOn() {
        this.socket.on('initialArmPosition', function (data) {
            console.log('[socket] initialPosition', data);

            arm.setArmRotations(data)
        })

        this.socket.on('positionArm2', function (data) {
            console.log('[socket] posicionar brazo', data);
            // arm.setArmRotation(data)
        })

        this.socket.on('rotate', (data) => {
            console.log('[socket] rotar brazo', data);
           
            arm.newRotation(data)
        })
        // no funciona
        this.socket.on('togglePauseResume', () => {
            arm.togglePauseResume()
        })
        // no funciona
        this.socket.on('stopQueue2', () => {
            console.log('[socket] stop cola');
            arm.stopQueue()
        })
        this.socket.on('robotOff', () => {
            console.log('[socket] disconnect');
            this.connected = false
            this.socket.disconnect();
            try {
                snap.updateSocketInfo(false)
                snap.showMessage('Robot apagado')
              } catch (error) {
                alert('robot apagado')
              }
        })
    }
}