const express = require('express');
const app = express();
const PORT = 8045;


app.use(express.json());

const routerProductos = require('./rutas/productos.js');
app.use('/personas', routerProductos);


server.on('error', err => console.log(`Producto no encontrado`));
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));