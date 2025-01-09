import { getUser, login, register } from "../Controller/users.controller.js"

export const registration = (app) => { 
  app.post('/register', register)
  app.post('/login', login)
  app.post('/user', getUser)
}