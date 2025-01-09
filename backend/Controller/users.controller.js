import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";
import userModel from "../Models/users.model.js";

const getUserDetails = async (username) => {
  try {
    const userDetails = await mongoose.connection.db
      .collection("users")
      .aggregate([
        {
          $match: { username: username } // Match the user by username
        },
        {
          $lookup: {
            from: "channels", // Lookup details for channels in the subscription array
            localField: "subscription", // Array of channel names (in `subscription`)
            foreignField: "channelName", // Match against channelName in `channels` collection
            as: "subscriptionDetails" // Populated subscription details
          }
        },
        {
          $unwind: { path: "$playlists", preserveNullAndEmptyArrays: true } // Unwind playlists array
        },
        {
          $lookup: {
            from: "videos", // Lookup video details for playlists
            localField: "playlists.videos", // Array of video IDs in each playlist
            foreignField: "videoId", // Match against videoId in `videos` collection
            as: "playlists.videoDetails" // Populated video details
          }
        },
        {
          $group: {
            _id: "$_id", // Regroup by user ID
            username: { $first: "$username" },
            email: { $first: "$email" },
            password: { $first: "$password" },
            avatar: { $first: "$avatar" },
            subscription: { $first: "$subscriptionDetails" }, // Include populated subscription details
            playlists: { $push: "$playlists" } // Push all playlists with populated video details
          }
        },
        {
          $project: {
            username: 1,
            email: 1,
            password: 1,
            avatar: 1,
            subscription: 1, // Populated subscription array
            playlists: 1 // Playlists with populated video details
          }
        }
      ])
      .toArray();
  
    return userDetails.length > 0 ? userDetails[0] : null; // Return a single user or null
  } catch (error) {
    throw new Error(`Failed to fetch user details: ${error.message}`);
  }
  
};

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

export const getUser = async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    const user = await getUserDetails(username);
    if (!user) {
      return res.status(404).json({ message: "No such user" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
