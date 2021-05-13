import express from "express";
import { generateAccessToken } from "./controller.js";

const router = express.Router();

router.route("/accesstoken").post(generateAccessToken);

export default router;
