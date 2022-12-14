<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snap!</title>

	<link rel="icon" type="image/x-icon" href="./favicon.ico">
    <link rel="stylesheet" href="style.css">
    
    <!-- librerias THREE js -->
    <script type="text/javascript" src="./src/libs/three.js"></script>
    <script type="text/javascript" src="./src/libs/stats.js"></script>
    <script type="text/javascript" src="./src/libs/dat.gui.js"></script>
    <script type="text/javascript" src="./src/libs/OrbitControls.js"></script>
    <script src="./src/libs/ColladaLoader.js"></script>

    <!-- socket io -->
    <script type="text/javascript" src="./src/libs/socket.io.min.js"></script>

    <!-- jquery ajax -->
    <script type="text/javascript" src="./src/libs/jquery.min.js"></script>


    <!-- librerias SNAP! -->
    <meta name="theme-color" content="white"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Snap!">
    <meta name="msapplication-TileImage" content="img/snap-icon-144.png">
    <meta name="msapplication-TileColor" content="#FFFFFF">
    <script src="./snap/src/morphic.js?version=2022-01-28"></script>
    <script src="./snap/src/symbols.js?version=2021-03-03"></script>
    <script src="./snap/src/widgets.js?version=2021-17-09"></script>
    <script src="./snap/src/blocks.js?version=2022-03-15"></script>
    <script src="./snap/src/threads.js?version=2022-03-16"></script>
    <script src="./snap/src/objects.js?version=2022-03-16"></script>
    <script src="./snap/src/scenes.js?version=2022-03-03"></script>
    <script src="./snap/src/gui.js?version=2022-03-16"></script>
    <script src="./snap/src/paint.js?version=2021-07-05"></script>
    <script src="./snap/src/lists.js?version=2022-02-07"></script>
    <script src="./snap/src/byob.js?version=2022-03-14"></script>
    <script src="./snap/src/tables.js?version=2022-01-28"></script>
    <script src="./snap/src/sketch.js?version=2021-11-03"></script>
    <script src="./snap/src/video.js?version=2019-06-27"></script>
    <script src="./snap/src/maps.js?version=2021-06-15"></script>
    <script src="./snap/src/extensions.js?version=2022-02-08"></script>
    <script src="./snap/src/xml.js?version=2021-07-05"></script>
    <script src="./snap/src/store.js?version=2022-03-15"></script>
    <script src="./snap/src/locale.js?version=2022-03-16"></script>
    <script src="./snap/src/cloud.js?version=2021-02-04"></script>
    <script src="./snap/src/api.js?version=2022-01-03"></script>
    <script src="./snap/src/sha512.js?version=2019-06-27"></script>
    <script src="./snap/src/FileSaver.min.js?version=2019-06-27"></script>
    
    <!-- Classes -->
    <script src="./src/classes/Snap.js"></script>
    <script src="./src/classes/Arm.js"></script>
    <script src="./src/classes/SocketClient.js"></script>
    <script src="./src/classes/ArmController.js"></script>

    <script src="./src/js/mouse.js"></script>
</head>
<body style="margin: 0;">
    <canvas id="world" tabindex="1"></canvas>
    <div id="container" style="top: 30px;">
        <canvas id="arm"></canvas>
    </div>
    <script>
        const BACKEND_IP = "<?php echo getenv('BACKEND_IP');?>"
        window.socketUrl = `ws://${BACKEND_IP}:2222`

        var sc = new SocketClient();
        var ac = new ArmController();
        var snap = new Snap();
        var arm = new Arm(true);
    </script>
</body>
</html>