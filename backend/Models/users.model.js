import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Please provide a valid email address',
    ]
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: "https://ik.imagekit.io/kf28wicizj/Youtube/userimage.jpg?updatedAt=1735815283840"
  },
  channels: {
    type: [String]
  }
});

const userModel = mongoose.model('User', userSchema);

export default userModel