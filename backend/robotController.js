const server = require('./server');

module.exports.move = (data) => {
    // TODO mover el robot de verdad
    // console.log(`moviendo el robot... ${process.env.ROBOT_IP}`);
    console.log(data);
}

// Funcion que llamar cuando se apague el robot para que
// el servidor desde las posiciones por defecto del robot
function onRobotOff() {
    server.resetArmPosition()
}