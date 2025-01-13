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
  const { channelName, description, channelBanner, channelLogo } = req.body;

  if (
    !channelLogo ||
    !channelName ||
    !description ||
    typeof channelLogo !== "string" ||
    typeof channelName !== "string" ||
    typeof description !== "string" ||
    channelLogo.trim() === "" ||
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
    channelLogo
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

export const deleteChannel = async (req, res) => {
  const { Channel } = req.params;

  if (!Channel || Channel.trim() === "") {
    return res.status(400).json({ "message": "Channel name is required & cannot be empty" });
  }

  try {
    const user = await userModel.findOne({ username: req.user.username });
    
    // Deleting the channel from the channelModel
    const ChannelExists = await channelModel.findOneAndDelete({ channelName: Channel });

    if (ChannelExists) {
      // Remove the channel from the user's channels array
      await userModel.updateOne(
        { username: req.user.username },
        {
          $pull: { channels: Channel }  // Corrected to use 'Channel'
        }
      );
      return res.status(200).json({ "message": "Channel deleted successfully" });
    } else {
      return res.status(404).json({ "message": "Channel not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ "message": "Server error" });
  }
};

export const updateChannel = async (req, res) => {

  try {
    const { channelBanner, channelLogo, description, newChannelName } = req.body;
    const { channelName } = req.params


    // Check if at least one field is present in the request body
    if (!channelBanner && !channelLogo && !description && !newChannelName) {
      return res.status(400).json({ message: 'No data present to update.' });
    }

    // Ensure the current channelName is provided to locate the channel
    if (!channelName) {
      return res.status(400).json({ message: 'Current channel name is required to update the channel.' });
    }

    // Find the channel by current name
    const channel = await channelModel.findOne({ channelName });

    // If the channel doesn't exist, return an error
    if (!channel) {
      return res.status(404).json({ message: 'Channel not found.' });
    }

    // Update the fields that are provided
    if (channelBanner) channel.channelBanner = channelBanner;
    if (channelLogo) channel.channelLogo = channelLogo;
    if (description) channel.description = description;

    // If a new channel name is provided, check for conflicts and update
    if (newChannelName) {
      const existingChannel = await channelModel.findOne({ channelName: newChannelName });
      if (existingChannel) {
        return res.status(409).json({ message: 'The new channel name is already in use.' });
      }
      channel.channelName = newChannelName;

    }
      // Save the updated channel to the database
      await channel.save();

      await userModel.updateOne(
        { username: req.user.username },
        {
          $pull: { channels: channelName }, // Remove the old channel name (or id, depending on your schema)
        }
      );
    
      await userModel.updateOne(
        { username: req.user.username },
        {
          $push: { channels: newChannelName }, // Add the new channel name (or id)
        }
      );

    // Send a success response with the updated channel data
    res.status(200).json({ message: 'Channel updated successfully.', channel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the channel.', error });
  }
};