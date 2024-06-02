import { Router } from "express";
import { loginUser, registerUser } from "../controllers/User.controller.js";

const router = Router();

// routes
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)


export default router