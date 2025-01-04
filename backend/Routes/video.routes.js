import { deleteVideo, videosDisplay } from "../Controller/video.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const videoRoutes = (app) => { 
  app.get('/videos', verifyToken, videosDisplay)
  app.delete('/videos', verifyToken, deleteVideo)
}