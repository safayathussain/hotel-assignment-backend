import { Router } from "express";
import { getPastOrders, placeOrder, removePastOrder } from "../controllers/Order.controller.js";

const router = Router();

// routes
router.route('/').post(placeOrder)
router.route('/past-orders/:email').get(getPastOrders)
router.route('/remove-past-order/:orderId').delete(removePastOrder)

export default router