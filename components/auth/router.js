import express from "express";
import { generateAccessToken, generateRefreshToken } from "./controller.js";

const router = express.Router();

router.route("/refreshtoken").post(generateRefreshToken);
router.route("/accesstoken").post(generateAccessToken);

export default router;
