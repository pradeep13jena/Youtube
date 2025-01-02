import mongoose from "mongoose";
import express from "express";

const port = 5000
const app = express()

app.listen(port, () => {
  console.log("Backend, up and running")
})


app.get("/users", (req, res) => {
  res.send({"message": "Hello"})
})