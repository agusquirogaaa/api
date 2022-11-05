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


const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));