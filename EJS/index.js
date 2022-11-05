import express  from 'express';
import { routerProductos } from './src/rutas/routerProductos.js';
import { viewsRouter } from './src/rutas/viewsrouter.js';
const ejs = require('ejs');

const app = express();
const PORT = 8020;

app.use(express.urlencoded({extended : true}))
app.use(express.json());


app.engine(
    "ejs",
    ejs.engine({
        extname: ".ejs",
        defaultLayout: "main.ejs",
    })
);

app.set("view engine", "ejs");
app.set("views", "./views");



app.use("/productos", viewsRouter)
app.use('/productos', routerProductos);


const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));