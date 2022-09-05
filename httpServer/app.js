var http = require("http");
/* Con esta funcion se crea un servidor el cual imprimira un texto plano en la pantalla 
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world\n");
  })
  .listen(1337, "127.0.0.1");
*/
//Ahora Se cambia la funcion comun a una funcion de flecha
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world\n");
  })
  .listen(1337, "127.0.0.1");

//Al ejecutar el node app.js en la consola esta quedara parpadiando el lugar de escritura de esa manera no permite realizar otra accion hasta precionar ctrl + c

//Al abrir el navegador ingresaremos al "localhost:1337" con esto ingresaremos al servidor y nos mostrará el mensaje 'Hello world' en texto plano

// Al revisar la sección de Headers en el localhost se puede obsercar informacion co relacion a aspectos generales (URL de la solicitud, metodo de solicitud, estado, drección, etc...), Encabezado de respuesta(conexion, tipo de contenido, fecha, etc...) y encabezados de solicitud (accept, cache-control, conexion, host, etc...).
