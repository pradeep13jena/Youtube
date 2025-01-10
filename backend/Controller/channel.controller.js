import mongoose from "mongoose";
import channelModel from "../Models/channel.model.js";
import userModel from "../Models/users.model.js";

const getVideoDetails = async (channelName) => {
  try {
    const channelExpand = await mongoose.connection.db
      .collection("channels")
      .aggregate([
        // Match the specific channel by channelName
        {
          $match: { "channelName": channelName }
        },

        // Lookup to get video details by matching the ObjectIds in the "videos" array
        {
          $lookup: {
            from: "videos",  // The collection to join with
            localField: "videos",  // The array of ObjectIds in the channel object
            foreignField: "_id",  // The field to match in the "videos" collection
            as: "videoDetails"  // The new field to store matched video details
          }
        },

        // Project to format the output and include the necessary fields
        {
          $project: {
            channelName: 1,
            owner: 1,
            description: 1,
            channelBanner: 1,
            channelLogo: 1,
            subscribers: 1,
            videos: 1,  // Keep the original video ObjectIds
            videoDetails: 1  // Include the matched video details
          }
        }
      ]).toArray(); // Ensure you convert the cursor to an array

    // Check if result is empty
    if (channelExpand.length === 0) {
      throw new Error("Channel not found or no video details available.");
    }

    return channelExpand[0]; // Return the first (and only) result since channelName is unique

  } catch (error) {
    throw new Error(`Failed to fetch video details: ${error.message}`);
  }
}

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

    const checkChannel = await getVideoDetails(channel);

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
