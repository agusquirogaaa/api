
import {Router} from "express"
import {productoApi} from "../API/productoApi.js"
const viewsRouter = Router()

viewsRouter.get("/", (req,res) => {
    res.render("form")
})
viewsRouter.post("/productos", (req,res) => {
    const {titulo,precio,thumbnail} = req.body;
    productoApi.save({titulo,precio,thumbnail})
    res.redirect("/");
})

viewsRouter.get("/productos", (req,res) => {
    const productos = productoApi.getAll()
    res.render("tabla", {productos: productos})
})

export {viewsRouter}