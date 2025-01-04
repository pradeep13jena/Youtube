import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import userModel from "../Models/users.model.js";

export const register = async (req, res) => {
  const { email, username, password, avatar } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "Username, password, and email are required" });
  }

  if (typeof username !== "string" || typeof password !== "string" || typeof email !== "string") {
    return res.status(400).json({ error: "Username, password, and email must be strings" });
  }

  if (username.trim() === "" || password.trim() === "" || email.trim() === "") {
    return res.status(400).json({ error: "Username, password, and email cannot contain only whitespace" });
  }

  if (avatar && (typeof avatar !== "string" || !/^(https?:\/\/[^\s]+)$/.test(avatar))) {
    return res.status(400).json({ error: "Avatar must be a valid URL if provided" });
  }

  const existingUser = await userModel.findOne({ username: username.toLowerCase() });
  if (existingUser) {
    return res.status(409).json({ error: "Username already exists" });
  }

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
      avatar, // Directly use the provided avatar (default URL will apply if omitted)
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "Username and password must be strings" });
  }

  if (username.trim() === "" || password.trim() === "") {
    return res.status(400).json({ error: "Username and password cannot contain only whitespace" });
  }

  try {
    const checkUsername = await userModel.findOne({ username: username.toLowerCase() });
    if (!checkUsername) {
      return res.status(404).json({ error: "User is not registered" });
    }

    const validUser = bcryptjs.compareSync(password, checkUsername.password);
    if (!validUser) {
      return res.status(403).json({ error: "Password is incorrect" });
    }

    const token = jwt.sign({ _id: checkUsername._id }, "E<x?XbO8dKI{p;9");

    res.status(200).json({
      "User Name": username,
      "Access token": token,
    });
  } catch (error) {
    res.status(500).json({ error: "An unexpected error occurred", details: error.message });
  }
};
