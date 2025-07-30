import express from 'express'
import { createOrder } from '../controllers/orderController.js';


const orderRouter = express.Router();

orderRouter.post("/", createOrder)


export default orderRouter