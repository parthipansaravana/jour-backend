import { connectDB } from "./config/dbconnection.js";
import express from "express";
import dotenv from "dotenv";
import authRouter from "./components/auth/router.js";
import userRouter from "./components/user/router.js";
dotenv.config({ path: "./config/config.env" });

const app = express();
connectDB();

app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Server Running on PORT ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("server is up and running.");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
