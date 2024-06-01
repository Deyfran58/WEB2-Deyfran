import { Router } from "express";
import productos from "./productos"

const routers= Router();

routers.use("/Productos", productos)

export default routers;