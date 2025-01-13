import { createChannel, deleteChannel, updateChannel, viewChannel } from "../Controller/channel.controller.js"
import { uploadVideo } from "../Controller/video.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const channel = (app) => {
  app.post("/channel", verifyToken, createChannel)
  app.get("/channel/:channel",verifyToken, viewChannel)
  app.post("/channel/:channel/videos", verifyToken, uploadVideo)
  app.post("/channel/:Channel", verifyToken, deleteChannel)
  app.put("/channel/:channelName", verifyToken, updateChannel)
}