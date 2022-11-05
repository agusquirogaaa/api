import { Router } from "express";
// import { containerMemory } from "../Containers/containerMemory.js";
import {productoApi} from "../API/productoApi.js"

const routerProductos = Router();
// /api/productos


// const productoMemory = new containerMemory()

routerProductos.get("/", (req,res) => {
    const productos = productoApi.getAll()
    res.send({success:true, data:productos})
})

routerProductos.get("/:id", (req,res) => {
    const {id} = req.params;
    const producto = productoApi.getById(Number(id));
    if(!producto) {
        return res.send({success: false, data:"no definido", message: "no hay producto"})
    }
    res.send({success:true, data:producto})
})

routerProductos.post("/", (req,res) => {
    const {titulo, precio, thumbnail} = req.body
    const producto = productoApi.save({titulo,precio,thumbnail})
    res.send({success:true, data: {id: producto.id}})
});

routerProductos.put("/:id", (req,res) => {
    const {id} = req.params
    const {titulo, precio, thumbnail} = req.body
    const actualizacionProducto = productoApi.updateById(id, {titulo,precio,thumbnail})
    res.send({success:true, data: {actualizacion: actualizacionProducto}})
});


export {routerProductos};

/*
const productos = [];

router.get('/productos', (req, res) => {
    res.send({ productos });
})

router.get("/productos/:id", (req,res) => {
    const item = productos.filter(item => item.id == req.params.id)
    res.send({item});
})

router.delete("/:id", (req,res)=> {
    const item = productos.filter(item => item.id!=req.params.id)
    productos = item
    res.send({item})
})

router.post('/', (req, res) => {
    const producto = req.body;
    productos.push(producto);
    res.status(200).send('producto agregado');
})

module.exports = router;
*/