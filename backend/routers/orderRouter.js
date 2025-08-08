import express from 'express'
import { createOrder, getOrders } from '../controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post("/", createOrder)
orderRouter.get("/:page/:limit", getOrders)


export default orderRouter