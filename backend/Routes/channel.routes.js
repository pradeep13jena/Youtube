import { createChannel, viewChannel } from "../Controller/channel.controller.js"
import { uploadVideo } from "../Controller/video.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const channel = (app) => {
  app.post("/channel", verifyToken, createChannel)
  app.get("/channel/:channel", viewChannel)
  app.post("/channel/:channel/videos", verifyToken, uploadVideo)
}