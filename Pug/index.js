import express  from 'express';
import { routerProductos } from './src/rutas/routerProductos.js';
import { viewsRouter } from './src/rutas/viewsrouter.js';
import pug from 'pug';

const app = express();
const PORT = 8020;

app.use(express.urlencoded({extended : true}))
app.use(express.json());


app.engine(
    "pug",
    pug.engine({
        extname: ".pug",
        defaultLayout: "main.pug",
    })
);

app.set("view engine", "pug");
app.set("views", "./views");



app.use("/productos", viewsRouter)
app.use('/productos', routerProductos);


const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));