import { deleteVideo, oneVideo, videosDisplay } from "../Controller/video.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const videoRoutes = (app) => { 
  app.get('/videos', videosDisplay)
  app.get('/videos/:id', oneVideo)
  app.delete('/videos', deleteVideo)

}