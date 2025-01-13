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

export const addVideoPlaylist = async(req, res) => {
  const {id} = req.params

  
}