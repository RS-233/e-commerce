import express from "express"
import { addToCart,removeFromCart,getCart } from "../controller/cartController.js"
import authMiddleware from "../middleware/auth.js";





const cartRouter = express.Router();

cartRouter.post("/addcart",authMiddleware,addToCart)
cartRouter.post("/removecart",authMiddleware,removeFromCart)
cartRouter.post("/getcart",authMiddleware,getCart)

export default cartRouter;