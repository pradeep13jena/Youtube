import mongoose from "mongoose";
import videoModel from "../Models/videos.model.js";
import {ObjectId} from 'mongodb'
import channelModel from "../Models/channel.model.js";

const getChannelDetails = async (id) => {

try{
  const userDetails = await mongoose.connection.db
  .collection("videos")
  .aggregate([
    {
      $match: { _id: new ObjectId(id) }
    },
    {
      $lookup: {
        from: 'channels',
        localField: 'channelName',
        foreignField: 'channelName',
        as: 'channelDetails'
      }
    },
    {
      $unwind: {
        path: '$channelDetails',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        _id: 1,
        title: 1,
        thumbnail: 1,
        videoLink: 1,
        description: 1,
        categories: 1,
        channelName: 1,
        views: 1,
        likes: 1,
        dislikes: 1,
        uploadDate: 1,
        comments: 1,
        channelDetails: {
          _id: 1,
          description: 1,
          channelBanner: 1,
          channelLogo: 1,
          subscribers: 1,
          videos: 1,
          channelName: 1,
          owner: 1
        }
      }
    }
  ])
  .toArray();  // Using toArray to fetch results

  return userDetails;

} catch (error) {
  throw new Error(`Failed to fetch user details: ${error.message}`);
};

}

const getEntireVideos = async () => {

try{
  const userDetails = await mongoose.connection.db
  .collection("videos")
  .aggregate([
    {
      $lookup: {
        from: 'channels',
        localField: 'channelName',
        foreignField: 'channelName',
        as: 'channelDetails'
      }
    },
    {
      $unwind: {
        path: '$channelDetails',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $project: {
        _id: 1,
        title: 1,
        thumbnail: 1,
        videoLink: 1,
        description: 1,
        categories: 1,
        channelName: 1,
        views: 1,
        likes: 1,
        dislikes: 1,
        uploadDate: 1,
        comments: 1,
        channelDetails: {
          _id: 1,
          description: 1,
          channelBanner: 1,
          channelLogo: 1,
          subscribers: 1,
          videos: 1,
          channelName: 1,
          owner: 1
        }
      }
    }
  ])
  .toArray();  // Using toArray to fetch results

  return userDetails;

} catch (error) {
  throw new Error(`Failed to fetch user details: ${error.message}`);
}
}

export const videosDisplay = async (req, res) => {
  try {
    const videos = await getEntireVideos();
    if (!videos || videos.length === 0) {
      return res.status(404).json({ message: "No videos found" });
    }
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "An unexpected error occurred", details: error.message });
  }
};

export const oneVideo = async (req, res) => {
  const { id } = req.params;  // Use 'id' from the route parameters
  try {
    const video = await getChannelDetails(id);  // Pass 'id' to getChannelDetails
    if (!video || video.length === 0) {  // Check if video is found
      return res.status(404).json({ message: `No video with ID ${id} found` });
    }

    res.status(200).json(video[0]);  // Return the first video result
  } catch (error) {
    res.status(500).json({ message: "An unexpected error occurred", details: error.message });
  }
};

export const uploadVideo = async (req, res) => {
  const { title, thumbnail, videoLink, description, categories } = req.body;
  const { channel } = req.params;

  if (!title || !thumbnail || !videoLink || !description || categories === undefined) {
    return res.status(400).json({ error: "Title, thumbnail, videoLink, description, and categories are required" });
  }

  if (
    typeof title !== "string" ||
    typeof thumbnail !== "string" ||
    typeof description !== "string" ||
    typeof videoLink !== "string" ||
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
      videoLink: videoLink.trim(),
      thumbnail: thumbnail.trim(),
      description: description.trim(),
      channelName: channel.toLowerCase(),
      categories: formattedCategories,
      uploadDate: new Date(),
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

export const updateVideo = async (req, res) => {
  const { title, thumbnail, videoLink, description, categories } = req.body;
  const { videoId } = req.params; // Assuming the videoId is provided in the URL params

  try {
    // Check if at least one field is provided to update
    if (!title && !thumbnail && !videoLink && !description && !categories) {
      return res.status(400).json({ message: 'No data present to update.' });
    }

    // Find the video by videoId
    const video = await videoModel.findById(videoId);

    if (!video) {
      return res.status(404).json({ message: 'Video not found.' });
    }

    // Update the fields that are provided
    if (title) video.title = title;
    if (thumbnail) video.thumbnail = thumbnail;
    if (videoLink) video.videoLink = videoLink;
    if (description) video.description = description;
    if (categories) video.categories = categories;

    // Save the updated video
    await video.save();

    // Send a success response with the updated video data
    res.status(200).json({ message: 'Video updated successfully.', video });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the video.', error });
  }
};


export const deleteVideo = async (req, res) => {
  try {
    const { channel, id } = req.params;

    // Find and delete the video from the videoModel
    const video = await videoModel.findOneAndDelete({ _id: id });
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Find the channel related to the video and remove the video from the video array
    const channelExists = await channelModel.findOneAndUpdate(
      { channelName: channel },  // Ensure `channelName` is correct and case-sensitive
      { $pull: { videos: new Object(id) } }, // Directly pull the ObjectId from the `videos` array
      { new: true } // Return the updated document
    );

    // If the channel exists and the video was removed
    if (channelExists) {
      return res.status(200).json({ message: 'Video deleted and removed from channel successfully', updatedChannel: channelExists });
    }

    // If the channel is not found or the video ID was not removed from the channel
    return res.status(404).json({ message: 'Channel not found or video not linked to channel' });

  } catch (error) {
    console.error('Error deleting video:', error); // Log error for debugging purposes
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
