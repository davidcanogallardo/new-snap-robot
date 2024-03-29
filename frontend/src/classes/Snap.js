class Snap {
    constructor() {
        this.world;
        this.init()
    }

    // Crea el canvas de snap
    init() {
        var loop = () => {
            requestAnimationFrame(loop);
            this.world.doOneCycle();
            this.updateSocketPanel()
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./snap/sw.js');
        }

        this.world = new WorldMorph(document.getElementById('world'));
        this.ide = new IDE_Morph().openIn(this.world);
        window.world = this.world

        loop();

        this.importCustomBlocks()
        var project = '<project name="aaaa" app="Snap! 7, https://snap.berkeley.edu" version="2"><notes></notes><thumbnail>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAB4CAYAAAB1ovlvAAACIElEQVR4Xu3SMQ0AAAzDsJU/6cHI4xKoFHlnCoQFFn67VuAAhCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5wAykBYAMM3vHEAG0gIApvmdA8hAWgDANL9zABlICwCY5ncOIANpAQDT/M4BZCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5wAykBYAMM3vHEAG0gIApvmdA8hAWgDANL9zABlICwCY5ncOIANpAQDT/M4BZCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5wAykBYAMM3vHEAG0gIApvmdA8hAWgDANL9zABlICwCY5ncOIANpAQDT/M4BZCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5wAykBYAMM3vHEAG0gIApvmdA8hAWgDANL9zABlICwCY5ncOIANpAQDT/M4BZCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5wAykBYAMM3vHEAG0gIApvmdA8hAWgDANL9zABlICwCY5ncOIANpAQDT/M4BZCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5wAykBYAMM3vHEAG0gIApvmdA8hAWgDANL9zABlICwCY5ncOIANpAQDT/M4BZCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5wAykBYAMM3vHEAG0gIApvmdA8hAWgDANL9zABlICwCY5ncOIANpAQDT/M4BZCAtAGCa3zmADKQFAEzzOweQgbQAgGl+5w8zDAB5EXMqlAAAAABJRU5ErkJggg==</thumbnail><scenes select="1"><scene name="aaaa"><notes></notes><hidden></hidden><headers></headers><code></code><blocks><block-definition s="eje1" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>amarillo</l></block></script></block-definition><block-definition s="eje2" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>rojo</l></block></script></block-definition><block-definition s="eje3" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>rosa</l></block></script></block-definition><block-definition s="eje4" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>naranja</l></block></script></block-definition><block-definition s="posicionar por defecto" type="command" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doRun"><block s="reportJSFunction"><list></list><l>ac.position([{arm: "amarillo", "degrees": 0},{arm: "rojo", "degrees": 0},{arm: "rosa", "degrees": 0},{arm: "naranja", "degrees": 0}])</l></block><list></list></block></script></block-definition><block-definition s="posicionar ejes: %&apos;eje1&apos; %&apos;eje2&apos; %&apos;eje3&apos; %&apos;eje4&apos;" type="command" category="motion"><header></header><code></code><translations></translations><inputs><input type="%n"></input><input type="%n"></input><input type="%n"></input><input type="%n"></input></inputs><script><block s="doRun"><block s="reportJSFunction"><list><l>eje1</l><l>eje2</l><l>eje3</l><l>eje4</l></list><l>ac.position([{arm: "amarillo", "degrees": eje1},{arm: "rojo", "degrees": eje2},{arm: "rosa", "degrees": eje3},{arm: "naranja", "degrees": eje4}])</l></block><list><block var="eje1"/><block var="eje2"/><block var="eje3"/><block var="eje4"/></list></block></script></block-definition><block-definition s="mover eje %&apos;eje&apos; %&apos;grados&apos; º" type="command" category="motion"><header></header><code></code><translations></translations><inputs><input type="%s"></input><input type="%s"></input></inputs><script><block s="doRun"><block s="reportJSFunction"><list><l>eje</l><l>grados</l></list><l>ac.move({"arm": eje, "degrees": grados})</l></block><list><block var="eje"/><block var="grados"/></list></block></script></block-definition></blocks><stage name="Stage" width="480" height="360" costume="0" color="255,255,255,1" tempo="60" threadsafe="false" penlog="false" volume="100" pan="0" lines="round" ternary="false" hyperops="true" codify="false" inheritance="true" sublistIDs="false" id="63"><pentrails>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAFoCAYAAACPNyggAAAOhUlEQVR4Xu3VwQkAAAjEMN1/abewn7jAQRC64wgQIECAAIF3gX1fNEiAAAECBAiMAHsCAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQICLAfIECAAAECgYAAB+gmCRAgQICAAPsBAgQIECAQCAhwgG6SAAECBAgIsB8gQIAAAQKBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECAiwHyBAgAABAoGAAAfoJgkQIECAgAD7AQIECBAgEAgIcIBukgABAgQIHLFxAWmhEwHPAAAAAElFTkSuQmCC</pentrails><costumes><list struct="atomic" id="64"></list></costumes><sounds><list struct="atomic" id="65"></list></sounds><variables></variables><blocks></blocks><scripts><script x="257" y="105.30000000000001"><custom-block s="posicionar por defecto"></custom-block><custom-block s="mover eje %s %s º"><custom-block s="eje1"></custom-block><l>60</l></custom-block><custom-block s="mover eje %s %s º"><custom-block s="eje2"></custom-block><l>69</l></custom-block><custom-block s="mover eje %s %s º"><custom-block s="eje3"></custom-block><l>-40</l></custom-block><custom-block s="mover eje %s %s º"><custom-block s="eje4"></custom-block><l>360</l></custom-block></script></scripts><sprites select="0"></sprites></stage><variables></variables></scene></scenes></project>'

        // this.importProject(project)
        this.enableJS()
        this.generateSocketPanel()
        this.updateSocketInfo()

        // if (this.options.blocks) {
        //     // this.importCustomBlocks(this.options.blocks)
        // }
        // if (this.options.project) {
        //     this.importProject(this.options.project)
        // }
    }

    // Genera la interfaz (botones e inputs) para conectarte a una sala de socket
    // utiliza las clases de snap
    generateSocketPanel() {
        this.socketPanel = this.world.children[0].corralBar
        var connStatus = new StringMorph(
            'No estás conectado al robot',
            15,
            'sans-serif',
            false, // true
            false,
            false,
            null,
            null,
            'rgba(255, 255, 255)'
        );

        var roomIdInput = new InputFieldMorph('');
        roomIdInput.setWidth(100);
        roomIdInput.contrast = 90;
        this.roomIdInput = roomIdInput;

        var connectRoomBtn = new PushButtonMorph(
            this,
            this.connectToSocketRoom,
            'Conectarse al robot             '
            //'\u2699'
        );

        this.socketPanel.add(connStatus);
        this.socketPanel.add(connectRoomBtn);

        this.socketPanel.children[1].setPosition(new Point(860, 400));
        this.socketPanel.children[2].setPosition(new Point(860, 440));

        window.sp = this.socketPanel
    }

    // Permite el uso de bloques de JS
    enableJS() {
        Process.prototype.enableJS = true
    }

    // Importa los bloques creados por nosotros
    importCustomBlocks() {
        // var blocks = '<blocks app='Snap! 7, https://snap.berkeley.edu' version='2'><block-definition s='eje1' type='reporter' category='motion'><header></header><code></code><translations></translations><inputs></inputs><script><block s='doReport'><l>amarillo</l></block></script></block-definition><block-definition s='eje2' type='reporter' category='motion'><header></header><code></code><translations></translations><inputs></inputs><script><block s='doReport'><l>rojo</l></block></script></block-definition><block-definition s='eje3' type='reporter' category='motion'><header></header><code></code><translations></translations><inputs></inputs><script><block s='doReport'><l>rosa</l></block></script></block-definition><block-definition s='eje4' type='reporter' category='motion'><header></header><code></code><translations></translations><inputs></inputs><script><block s='doReport'><l>naranja</l></block></script></block-definition><block-definition s='posicionar por defecto' type='command' category='motion'><header></header><code></code><translations></translations><inputs></inputs><script><block s='doRun'><block s='reportJSFunction'><list></list><l>ac.position([{arm: 'amarillo', 'degrees': 0},{arm: 'rojo', 'degrees': 0},{arm: 'rosa', 'degrees': 0}, {arm: 'naranja', 'degrees': 0}])</l></block><list></list></block></script></block-definition><block-definition s='posicionar ejes: %&apos;eje1&apos; %&apos;eje2&apos; %&apos;eje3&apos; %&apos;eje4&apos;' type='command' category='motion'><header></header><code></code><translations></translations><inputs><input type='%n'></input><input type='%n'></input><input type='%n'></input><input type='%n'></input></inputs><script><block s='doRun'><block s='reportJSFunction'><list><l>eje1</l><l>eje2</l><l>eje3</l><l>eje4</l></list><l>snap.positionCylinders(eje1,eje2,eje3,eje4)</l></block><list><block var='eje1'/><block var='eje2'/><block var='eje3'/><block var='eje4'/></list></block></script></block-definition><block-definition s='mover eje %&apos;eje&apos; %&apos;grados&apos; º' type='command' category='motion'><header></header><code></code><translations></translations><inputs><input type='%s'></input><input type='%s'></input></inputs><script><block s='doRun'><block s='reportJSFunction'><list><l>eje</l><l>grados</l></list><l>ac.move({'arm': eje, 'degrees': grados})</l></block><list><block var='eje'/><block var='grados'/></list></block></script></block-definition></blocks>'
        var blocks = '<blocks app="Snap! 7, https://snap.berkeley.edu" version="2"><block-definition s="eje1" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>amarillo</l></block></script></block-definition><block-definition s="eje2" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>rojo</l></block></script></block-definition><block-definition s="eje3" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>rosa</l></block></script></block-definition><block-definition s="eje4" type="reporter" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doReport"><l>naranja</l></block></script></block-definition><block-definition s="posicionar por defecto" type="command" category="motion"><header></header><code></code><translations></translations><inputs></inputs><script><block s="doRun"><block s="reportJSFunction"><list></list><l>ac.position([{arm: "amarillo", "degrees": 0},{arm: "rojo", "degrees": 0},{arm: "rosa", "degrees": 0}, {arm: "naranja", "degrees": 0}])</l></block><list></list></block></script></block-definition><block-definition s="posicionar ejes: %&apos;eje1&apos; %&apos;eje2&apos; %&apos;eje3&apos; %&apos;eje4&apos;" type="command" category="motion"><header></header><code></code><translations></translations><inputs><input type="%n"></input><input type="%n"></input><input type="%n"></input><input type="%n"></input></inputs><script><block s="doRun"><block s="reportJSFunction"><list><l>eje1</l><l>eje2</l><l>eje3</l><l>eje4</l></list><l>ac.position([{arm: "amarillo", "degrees": eje1},{arm: "rojo", "degrees": eje2},{arm: "rosa", "degrees": eje3}, {arm: "naranja", "degrees":eje4}])</l></block><list><block var="eje1"/><block var="eje2"/><block var="eje3"/><block var="eje4"/></list></block></script></block-definition><block-definition s="mover eje %&apos;eje&apos; %&apos;grados&apos; º" type="command" category="motion"><header></header><code></code><translations></translations><inputs><input type="%s"></input><input type="%s"></input></inputs><script><block s="doRun"><block s="reportJSFunction"><list><l>eje</l><l>grados</l></list><l>ac.move({"arm": eje, "degrees": grados})</l></block><list><block var="eje"/><block var="grados"/></list></block></script></block-definition></blocks>'
       
        this.world.children[0].openBlocksString(blocks, 'Bloques robot', true)
    }

    // Muestra un mensaje por pantalla utilizando al función
    // de snap para mostrar mensajes
    showMessage(txt, secs) {
        this.world.children[0].showMessage(txt, secs || 5)
    }

    // Importa un proyecto pasado por parámetro
    importProject(str) {
        this.world.children[0].openProjectString(str)
    }

    // Llama a la funcion de la clase SocketClient para conectarse a una salal
    connectToSocketRoom() {
        if (sc.isConnected()) {
            sc.disconnect()
            this.updateSocketInfo(false)
        } else {
            sc.connect()
            console.log('conectado al robot');
            this.showMessage(`Conectado al robot`)
            this.updateSocketInfo(true)
        }
    }

    // Llama a la funcion de la clase SocketClient para desconectarse a una salal
    disconnectFromSocketRoom() {
        sc.disconnect()
        this.updateSocketInfo(false)
    }

    // Actualiza la interfaz de socket del snap para informar si está conectado a una sala o no
    updateSocketInfo(socketConnect) {
        if (socketConnect) {
            this.socketPanel.children[1].text = `Conectado al robot`
            this.socketPanel.children[2].label.text = `Desconectarse de la sala`
            this.socketPanel.children[1].rerender()
            this.socketPanel.children[2].rerender()
        } else {
            this.socketPanel.children[1].text = 'No estás conectado al robot'
            this.socketPanel.children[2].label.text = `Conectarse al robot`
            this.socketPanel.children[1].rerender()
            this.socketPanel.children[2].rerender()
        }
    }

    // Posiciona los objetos de la interfaz de socket respecto al ancho de stage, para cuando se redimensiona
    // la simulación del brazo
    updateSocketPanel() {
        if (arm) {
            this.socketPanel.children[1].setPosition(new Point(arm.getStage().position().x + 10, arm.getStage().position().y + arm.getStage().height() + 10))
            this.socketPanel.children[2].setPosition(new Point(arm.getStage().position().x + 10, arm.getStage().position().y + arm.getStage().height() + 30))
            // this.socketPanel.children[3].setPosition(new Point(arm.getStage().position().x+10, arm.getStage().position().y+arm.getStage().height() + 60)) 
            // this.socketPanel.children[4].setPosition(new Point(arm.getStage().position().x+10, arm.getStage().position().y+arm.getStage().height() + 90)) 
        }
    }
}
