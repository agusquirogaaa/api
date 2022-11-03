const express = require('express');
const { Router } = express;
const router = Router();

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