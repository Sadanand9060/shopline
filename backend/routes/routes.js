import express from "express";
import { registerUser } from "../controllers/registerUser.js";

const router = express.Router();
router.post("/", registerUser);

export default router;
