import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ChannelRender from "./ChannelRender";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export default function Channel() {
  const [sub, Setsub] = useState(false);

  const videos = [
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Node.js Crash Course",
      channelName: "The Dev Channel",
      views: "1.3M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/43/f2/39/43f2392a45622d3a8f889b7be4793e5c.jpg",
      title: "CSS Flexbox Tutorial for Beginners",
      channelName: "WebDev Simplified",
      views: "850K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Learn JavaScript in 10 Minutes",
      channelName: "CodeAcademy",
      views: "1.5M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    }
  ];

  const channels = {
    channelName: "Anurag Singh ProCodrr",
    channelBanner:
      "https://ik.imagekit.io/kf28wicizj/Youtube/coming%20soon.jpg?updatedAt=1736231127177", // Channel Banner URL
    channelDescription:
      "Welcome to My Awesome Channel where we share exciting content about tech  tutorials, and more.", // Channel Description
    subscribers: 15000,
    videos: 423,
    channelOwner: {
      name: "John Doe",
      email: "johndoe@example.com",
      dateJoined: "2023-06-15",
      profilePicture: "https://example.com/johndoe.jpg",
    },
  };

  const { channel } = useParams();
  return (
    <div className="md:h-[calc(100vh-59.2px)] overflow-y-auto px-3 md:px-24 flex flex-col gap-4 md:gap-7 py-0 w-full">
      <div className="channelBanner w-full relative" style={{ paddingTop: "16.13%" }}>
          <img
            src="https://yt3.googleusercontent.com/oMHcxAQRfjxcjqhALtxiattja70jMkjyKPImWCOoQSukahQQqgkx0NvVviP1uoD9sdJQFRFC5sk=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="YouTube Banner"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg md:rounded-xl"
          />
      </div>
      <div className="channelDetails w-full flex justify-start items-center gap-4 mb-5 md:mb-0">
        <Avatar
          sx={{
            width: { xs: 70, sm: 80, md: 130 }, // Small width for smaller screens
            height: { xs: 70, sm: 80, md: 130 }, // Match height with width
            fontSize: { xs: 30, sm: 45, md: 80 },
            bgcolor: deepOrange[500], // Adjust font size proportionally
          }}
        >
          P
        </Avatar>
        <div className="flex flex-col md:gap-3">
          <h1 className="text-2xl md:text-4xl font-bold font-roboto">
            {channels.channelName}
          </h1>
          <div className="flex flex-col gap-1 items-start justify-start mb-3 md:mb-0">
            <div className="flex items-center gap-0 justify-start">
              <p className="text-sm text-gray-800">
                {channels.subscribers} subscribers
              </p>
              <p className="text-sm px-1 text-gray-800">&#x2022;</p>
              <p className="text-sm text-gray-800">{channels.videos} videos</p>
            </div>
            <p className="text-sm md:text-base text-gray-800 font-roboto font-light line-clamp-2">
              {channels.channelDescription}
            </p>
          </div>
          <div className="flex justify-start items-center">
            <h1
              className={`md:px-4 flex gap-2 items-center py-2 px-3 cursor-pointer rounded-3xl text-xs md:text-base font-roboto hover:opacity-80 duration-500 ${
                sub
                  ? "bg-gray-300 text-black flex items-center justify-center"
                  : "  bg-black text-white"
              }`}
              onClick={() => Setsub(!sub)}
            >
              {sub ? (
                <>
                <NotificationsOutlinedIcon  
                  sx={{
                    fontSize: {
                      xs: 16, // Font size for mobile devices
                      sm: 20, // Font size for small screens and above
                    }
                  }} 
                /> 
                Subscribed
              </>              
              ) : (
                "Subscribe"
              )}
            </h1>
          </div>
        </div>
      </div>
      <div className="videoList w-full sticky top-0 z-50 bg-white pt-10 border-b-2">
        <div className="sliderContent pb-0 sm:pb-3 flex justify-between md:justify-start overflow-x-auto gap-6">
          <h1 className="font-roboto text-base font-medium text-black cursor-pointer transition-all">
            Home
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Videos
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Shorts
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Playlists
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Community
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Community
          </h1>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-1 sm:gap-4">
        {videos.map((cat, index) => {
          return (
            <ChannelRender key={index} cat={cat}/>
          )
        })}
      </div>
    </div>
  );
}
