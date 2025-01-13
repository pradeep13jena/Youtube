import { deleteVideo, oneVideo, updateVideo, videosDisplay } from "../Controller/video.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const videoRoutes = (app) => { 
  app.get('/videos', verifyToken, videosDisplay)
  app.get('/videos/:id', verifyToken, oneVideo)
  app.put('/videos/:videoId', verifyToken, updateVideo)
  app.put('/videos/:channel/:id', verifyToken, deleteVideo)
}