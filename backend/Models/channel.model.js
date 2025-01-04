import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true // Should correspond to a userId in the User schema
  },
  description: {
    type: String,
    required: true
  },
  channelBanner: {
    type: String,
    default: "https://ik.imagekit.io/kf28wicizj/Youtube/userimage.jpg?updatedAt=1735815283840"
  },
  subscribers: {
    type: Number,
    required: true,
    default: 0
  },
  videos: {
    type: [String], // Array of video IDs
    required: true,
    default: []
  }
});

const channelModel = mongoose.model('Channel', channelSchema);

export default channelModel