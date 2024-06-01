import { Router} from "express";
import ProductosController from "../controller/ProductosController";

const routers= Router();

routers.get("",ProductosController.getAll)
routers.post("",ProductosController.create)

export default routers;


