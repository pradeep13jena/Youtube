import userModel from "../Models/users.model.js";
import videoModel from "../Models/videos.model.js";
import channelModel from "../Models/channel.model.js";

export const subscribed = async (req, res) => {
  const { _id } = req.user; // User ID from the request
  const { channelName } = req.body; // Channel name from the request body

  try {
    // Find the user by ID
    const user = await userModel.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Find the channel by name
    const channel = await channelModel.findOne({ channelName: channelName });
    if (!channel) {
      return res.status(404).json({ message: "Channel not found." });
    }

    // Check if the channel is already in the subscription array
    const isSubscribed = user.subscription.includes(channelName);

    if (isSubscribed) {
      // If subscribed, remove it from the array and decrease the subscriber count
      user.subscription = user.subscription.filter((name) => name !== channelName);
      channel.subscribers = Math.max(0, channel.subscribers - 1); // Ensure it doesn't go below 0
    } else {
      // If not subscribed, add it to the array and increase the subscriber count
      user.subscription.push(channelName);
      channel.subscribers += 1;
    }

    // Save the updated user and channel
    await user.save();
    await channel.save();

    res.status(200).json({
      message: isSubscribed
        ? `Unsubscribed from ${channelName}.`
        : `Subscribed to ${channelName}.`,
      userSubscriptions: user.subscription,
      channelSubscribersCount: channel.subscribers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong.", error: error.message });
  }
};
