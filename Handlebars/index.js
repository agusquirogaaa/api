import express  from 'express';
import { routerProductos } from './src/rutas/routerProductos.js';
import { viewsRouter } from './src/rutas/viewsrouter.js';
import handlebars from 'handlebars';

const app = express();
const PORT = 8020;

app.use(express.urlencoded({extended : true}))
app.use(express.json());


app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: "main.hbs",
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");



app.use("/productos", viewsRouter)
app.use('/productos', routerProductos);

const socket = io();


const chatForm = document.querySelector("#chat-form");
const chatText = document.querySelector("#chat-text");
const chatBox = document.querySelector("#chat-box");

chatText.focus();

chatForm.addEventListener("submit",e => {
    e.preventDefault();
    socket.emit("chat", {
        user:socket.id,
        message: chatText.value
    })
    chatText.value = "";
});

socket.on("messages", messages => {
    chatBox.innerHTML = "";
    messages.forEach(message => {
        chatBox.innerHTML += ` <p> <span> ID: ${message.user} </span> -- ${message.message} </p> `
    })
})