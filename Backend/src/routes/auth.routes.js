import express from 'express';
import { registerUser, loginUser, getProfile, logoutUser } from '../controllers/auth.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)

router.get("/profile", requireAuth, getProfile)
router.get("/logout", requireAuth, logoutUser )


export default router;