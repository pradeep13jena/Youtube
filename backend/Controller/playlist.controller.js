import mongoose from "mongoose"
import userModel from "../Models/users.model.js"

export const createPlaylist = async (req, res) => {
  const { playlistName } = req.body

  if(!playlistName || typeof playlistName !== 'string' || playlistName.trim() === ""){
    return res.status(400).json({"message": "Channel name is required & cannot be empty"})
  }

  try {
    const user = await userModel.findOne({username: req.user.username})

    const playlistExists = user.playlists.some((playlist) => playlist.name === playlistName);

    if (playlistExists) {
      return res.status(403).json({ message: "Playlist already exists" });
    }

    const updatedDocument = await userModel.updateOne(
      {username: req.user.username},
      {
        $push: {
          playlists: { name: playlistName, videos: [] }, // Add the new playlist
        },
      },
      { upsert: true }
    )

    return res.status(201).json({ message: "Playlist created successfully", updatedDocument });
    
  } catch (error) {
    console.error("Error creating playlist:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const deletePlaylist = async (req, res) => {
  const { playlist } = req.params

  if(!playlist || playlist.trim() === ""){
    return res.status(400).json({"message": "Playlist name is required & cannot be empty"})
  }

  try {
    const user = await userModel.findOne({username: req.user.username})
    
    const playlistExists = user.playlists.some((list) => list.name === playlist);

    if (!playlistExists) {
      return res.status(404).json({ message: "Playlist does not exist" });
    }

    await userModel.updateOne(
      { username: req.user.username },
      {
        $pull: { playlists: { name: playlist } } // $pull operator removes the playlist with the given name
      }
    );
  
    return res.status(200).json({ message: "Playlist deleted successfully" });

  } catch (error) {
    console.log(error) 
    res.status(500).json({ message: "Internal server error" });
  }
}

export const addVideoToPlaylist = async (req, res) => {
  const { id } = req.params; // Video ID
  const { userName, playlistName } = req.body;

  // Check if the video ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Given ID is not a valid Video ID" });
  }

  // Validate input fields
  if (!userName || !playlistName) {
    return res.status(400).send({ message: "Username and playlist name are required." });
  }

  try {
    // Find the user by username
    const user = await userModel.findOne({ username: userName });
    console.log(user)
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Find the playlist within the user's playlists
    const playlist = user.playlists.find((pl) => pl.name === playlistName);
    if (!playlist) {
      return res.status(404).send({ message: `Playlist '${playlistName}' not found for user '${userName}'.` });
    }

    // Check if the video is already in the playlist
    const videoIndex = playlist.videos.indexOf(id);

    if (videoIndex !== -1) {
      // Video already exists in the playlist; remove it
      playlist.videos.splice(videoIndex, 1);
      await user.save();
      return res.status(200).send({
        message: `Video removed from playlist '${playlistName}'.`,
      });
    }

    // Add the video to the playlist
    playlist.videos.push(id);
    await user.save();

    res.status(200).send({
      message: `Video added to playlist '${playlistName}'.`,
    });
  } catch (error) {
    console.error("Error adding video to playlist:", error);
    res.status(500).send({
      message: "An error occurred while processing your request.",
      error: error.message,
    });
  }
};
