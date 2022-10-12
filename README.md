# Requerimientos
- [Docker y Docker Compose](https://docs.docker.com/engine/install/ubuntu/)

# Preparar entorno
Descarga el proyecto:
```bash
git clone https://github.com/davidcanogallardo/snap-robot
```

| :warning: Asegurate que la carpeta ``frontend`` tenga permisos de lectura sino fallara.

# Variables de enterno
En el archivo ``docker-compose.yml`` pon en la variable de enterno **BACKEND_IP** del servicio ``snap`` (``services.snap.enviroment``) la IP del ordenador donde se alojará el servidor.
En el archivo ``docker-compose.yml`` cambia el valor de ``services.snap.ports`` con este formato:
```yml
      - BACKEND_IP=<ip del ordenador>
```
| :warning: Vigila los espacios delante del guion

Y en el mismo archivo pon en la variable de entorno **ROBOT_IP** del servicio ``socket-server`` (``services.socket-server.enviroment``) la IP del robot.
En el archivo ``docker-compose.yml`` cambia el valor de ``services.snap.ports`` con este formato:
```yml
      - ROBOT_IP=<ip del robot> 
```
| :warning: Vigila los espacios delante del guion

# Levanta contendores
- Ejecuta ``docker-compose up -d`` en la raíz del proyecto  
- Ve a ``http://<ip del ordenador>:1111`` (por defecto utiliza el puerto 1111, si lo has cambiado pon el puerto nuevo)  

# Cambiar puerto del frontend
En el archivo ``docker-compose.yml`` cambia el valor de ``services.snap.ports`` con este formato:
```yml
      - "<puerto del frontend>:80"
```
Ejemplo:
```yml
      - "80:80"
```
Ahora el frontend utilizará el puerto 80.   

| :warning: Vigila los espacios delante del guion
