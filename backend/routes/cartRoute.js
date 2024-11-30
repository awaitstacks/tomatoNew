import express from "express";
import { addTocart } from "../controllers/cartController.js";
import { removeFromCart } from "../controllers/cartController.js";
import { getCart } from "../controllers/cartController.js";
import authMiddleware from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addTocart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;
