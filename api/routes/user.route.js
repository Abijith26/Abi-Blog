import express from "express";
import { signout, getUsers } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// Sign- Out function
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);

export default router;
