import express from "express";
import { signIn, addUser } from "./controller.js";

const router = express.Router();

router.route("/signin").post(signIn);
router.route("/signup").post(addUser);

export default router;
