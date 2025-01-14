import { addLiked, removeLiked } from "../Controller/Likes.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const like = (app) => {
  app.put('/like/:id', verifyToken, addLiked)
  app.put('/dislike/:id', verifyToken, removeLiked)
}
