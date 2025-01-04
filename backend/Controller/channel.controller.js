import mongoose from "mongoose";
import channelModel from "../Models/channel.model.js";
import userModel from "../Models/users.model.js";

export const createChannel = async (req, res) => {
  const { channelName, description, channelBanner } = req.body;

  if (
    !channelName ||
    !description ||
    typeof channelName !== "string" ||
    typeof description !== "string" ||
    channelName.trim() === "" ||
    description.trim() === ""
  ) {
    return res
      .status(400)
      .json({ error: "Invalid channelName or description" });
  }

  const existingChannel = await channelModel.findOne({ channelName: channelName.toLowerCase() });
  if (existingChannel) {
    return res.status(403).json({ message: "Channel already exists" });
  }

  const newChannel = new channelModel({
    channelName: channelName.toLowerCase(),
    description,
    owner: req.user.username,
    channelBanner,
  });

  const savedChannel = await newChannel.save();

  if(savedChannel){
    const updateResult = await mongoose.connection.db
    .collection("users")
    .updateOne(
      { username: req.user.username },
      { $push: { channels: channelName } }
    );

    if (!updateResult.modifiedCount) {
      return res.status(400).json({ message: "Failed to add channel to user" });
    }
  }

  res.status(201).json({ message: "Channel created successfully" });
};

export const viewChannel = async (req, res) => {
  try {
    const { channel } = req.params;

    if (!channel || typeof channel !== "string" || channel.trim() === "") {
      return res.status(400).json({ message: "Invalid channel name provided" });
    }

    const checkChannel = await channelModel.findOne({
      channelName: channel.toLowerCase(),
    });

    if (!checkChannel) {
      return res.status(404).json({ message: "No such channel" });
    }

    res.status(200).json(checkChannel);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An unexpected error occurred", error: error.message });
  }
};
