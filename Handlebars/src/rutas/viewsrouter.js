<<<<<<< HEAD
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

=======
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

>>>>>>> 54353657ceaf3186771ab011ce8fe05fd21aee64
export {viewsRouter}