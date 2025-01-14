import { addVideoToPlaylist, createPlaylist, deletePlaylist } from "../Controller/playlist.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const playlist = (app) => {
  app.post("/playlist", verifyToken, createPlaylist)
  app.post("/playlist/:playlist", verifyToken, deletePlaylist)
  app.put("/playlist/:id", verifyToken, addVideoToPlaylist)
}