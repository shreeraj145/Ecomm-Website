import express from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddlerware.js";

router.route("/login").post(authUser);

router.route("/profile").get(protect, getUserProfile);

export default router;
