import { subscribed } from "../Controller/subscribed.controller.js"
import { verifyToken } from "../Middlewares/verifyToken.js"

export const subscribe = (app) => {
  app.put("/subscribe", verifyToken, subscribed)
}
