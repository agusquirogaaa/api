const express = require("express")
const {Server: HttpServer} = require ("http")
const {Server: IOServer} = require ("socket.io")

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


// indicamos que queremos cargar los archivos estáticos que se encuentran en la raíz de la misma
app.use (express.static("./public"))

// esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get("/", (req,res) => {
    res.sendFile("index.html", {root: __dirname })
})

/*
const logueoEntrada= []
io.on("connection", (socket) => {
    // PASO 2 CONEXION SOCKET
    console.log("cliente conectado")
    // "connection" se ejecuta la primera vez que se abre una nueva conexion
    //console.log("Usuario conectado", socket)
    // se imprimirá solo la primera vez que se ha abierto la conexion
    //socket.emit("msj")
    
    // PASO 4 RECIBO MENSAJE Y NOTIFICACION
    socket.on("ventana", "")
    socket.on("notificacion", (hora) => {
        logueoEntrada.push(socket.id + "entro: " + hora)
    
    // PASO 5 EMITO MENSAJE
        socket.emit("ventana", logueoEntrada)
    })
})

*/

const messages = [];

io.on ("connection", socket => {
    console.log ("cliente conectado")
    io.sockets.emit("messages", messages);
    socket.on("chat", chat => {
        console.log(chat);
        messages.push(chat);
        io.sockets.emit("messages",messages);
    })
})


// el servidor funicionando en el puerto 3000
httpServer.listen(3000, () => console.log("SERVER ON"))



