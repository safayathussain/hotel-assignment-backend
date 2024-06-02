import { Router } from "express";
import { getItems } from "../controllers/Item.controller.js";

const router = Router()
// rotues
router.route('/').get(getItems)

export default router