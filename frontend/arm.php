<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arm simulation</title>

	<link rel="icon" type="image/x-icon" href="./favicon.ico">
    
    <!-- librerias THREE js -->
    <script type="text/javascript" src="./src/libs/three.js"></script>
    <script type="text/javascript" src="./src/libs/stats.js"></script>
    <script type="text/javascript" src="./src/libs/dat.gui.js"></script>
    <script type="text/javascript" src="./src/libs/OrbitControls.js"></script>
    <script src="./src/libs/ColladaLoader.js"></script>

    <!-- socket io -->
    <script type="text/javascript" src="./src/libs/socket.io.min.js"></script>

    <script src="./src/classes/Arm.js"></script>
    <script src="./src/classes/SocketClient.js"></script>
    <script src="./src/classes/ArmController.js"></script>
    
</head>
<body style="overflow: hidden;">
    <div id="container">
        <canvas id="arm"></canvas>
    </div>
    <script>
        const BACKEND_IP = "<?php echo getenv('BACKEND_IP');?>"
        window.socketUrl = `ws://${BACKEND_IP}:2222`
        
        var arm = new Arm(false);
        var ac = new ArmController();

        var sc = new SocketClient();
        sc.connect()
    </script>
</body>
</html>
