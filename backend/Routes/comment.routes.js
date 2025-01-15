import { verifyToken } from "../Middlewares/verifyToken.js"
import { addComment, editComment, deleteComment } from "../Controller/comments.controller.js"

export const comment = (app) => {
  app.post("/comment", verifyToken, addComment)
  app.put("/comment", verifyToken, editComment)
  app.delete("/comment", verifyToken, deleteComment)
}