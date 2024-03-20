import express from "express";
import {
  signout,
  getUsers,
  deleteUser,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

// Sign- Out function
router.post("/signout", signout);
router.get("/getusers", verifyToken, getUsers);
router.delete("/deleteuser/:userId", verifyToken, deleteUser);
router.get("/:userId", getUser);

export default router;
