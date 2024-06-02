import { Router } from "express";
import { getPastOrders, placeOrder } from "../controllers/Order.controller.js";

const router = Router();

// routes
router.route('/').post(placeOrder)
router.route('/past-orders/:email').get(getPastOrders)


export default router