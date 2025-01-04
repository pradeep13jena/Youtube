import mongoose from "mongoose";
import express from "express";
import { videoRoutes } from "./Routes/video.routes.js";
import { registration } from "./Routes/user.routes.js";
import { channel } from "./Routes/channel.routes.js";

const port = 5000
const app = express()

app.use(express.json());

mongoose.connect(
  "mongodb+srv://goldrushatjenas:CWWpxzrkNnRffbyH@cluster0.iglry.mongodb.net/Youtube"
);

mongoose.connection.on("connected", () => console.log("Database connected"));
mongoose.connection.on("error", (err) => console.error("Database connection error:", err));

app.listen(port, () => {
  console.log("Backend, up and running")
})

videoRoutes(app)
registration(app)
channel(app)