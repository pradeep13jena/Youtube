import mongoose from "mongoose";
import getFormattedDateTime from "../utils/getDateandTIme.js";
import videoModel from "../Models/videos.model.js";

export const videosDisplay = async (req, res) => {
  try {
    const videos = await videoModel.find({});
    if (!videos || videos.length === 0) {
      return res.status(404).json({ message: "No videos found" });
    }
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "An unexpected error occurred", details: error.message });
  }
};

export const uploadVideo = async (req, res) => {
  const { title, thumbnail, description, categories } = req.body;
  const { channel } = req.params;

  if (!title || !thumbnail || !description || categories === undefined) {
    return res.status(400).json({ error: "Title, thumbnail, description, and categories are required" });
  }

  if (
    typeof title !== "string" ||
    typeof thumbnail !== "string" ||
    typeof description !== "string" ||
    (typeof categories !== "string" && !Array.isArray(categories))
  ) {
    return res.status(400).json({
      error: "Title, thumbnail, and description must be strings. Categories must be a string or an array",
    });
  }

  if (
    title.trim() === "" ||
    thumbnail.trim() === "" ||
    description.trim() === "" ||
    (typeof categories === "string" && categories.trim() === "")
  ) {
    return res.status(400).json({
      error: "Title, thumbnail, description cannot contain only whitespace, and categories must not be empty",
    });
  }

  try {
    const formattedCategories = Array.isArray(categories)
      ? categories
      : categories.split(",").map((cat) => cat.trim());

    const newVideo = new videoModel({
      title: title.trim(),
      thumbnail: thumbnail.trim(),
      description: description.trim(),
      channelName: channel.toLowerCase(),
      categories: formattedCategories,
      uploadDate: getFormattedDateTime(),
    });

    await newVideo.save();

    const videoFind = await videoModel.findOne({ title: title.trim() });

    const channelUpdate = await mongoose.connection.db
      .collection("channels")
      .updateOne(
        { channelName: channel.toLowerCase() },
        { $push: { videos: videoFind._id } }
      );

    if (channelUpdate.modifiedCount > 0) {
      console.log("Video added to channel successfully!");
    } else {
      console.log("No changes made to the channel.");
    }

    res.status(201).json({ message: "Video uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
};

export const deleteVideo = async (req, res) => {
}