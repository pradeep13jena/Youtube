import { Avatar } from "@mui/material";
import Filter from "./Filter.jsx";
import React, { useState } from "react";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { MoreVertOutlined } from "@mui/icons-material";
import Homeviewer from "./Homeviewer.jsx";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

export default function Home() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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

  const videoGenres = [
    "Nature",
    "Adventure",
    "Travel",
    "Education",
    "Technology",
    "Gaming",
    "Music",
    "Fitness",
    "Food",
    "Health & Wellness",
    "Sports",
    "Comedy",
    "Science",
    "Documentary",
    "DIY & Craft",
    "Fashion & Beauty",
    "Motivational",
    "Kids",
    "Movies & Entertainment",
    "News & Politics",
    "History",
    "Photography",
    "Lifestyle",
    "Automobile",
    "Art & Design",
    "Programming & Development",
  ];

  return (
  <>
    <div className="flex flex-col px-0 sm:px-5 justify-start pb-2 md:pb-0 w-full overflow-y-auto z-30">
      <div 
        id="id1" 
        className="flex items-center justify-start gap-2 py-2 w-full min-w-0 overflow-x-auto bg-white sticky top-0 z-50"
      >
        {videoGenres.map((cat, index) => (
          <div 
            key={index} 
            className="shrink-0 min-w-max px-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
          >
            <p className='font-medium'>{cat}</p>
          </div>
        ))}
      </div>

      {/* Body Section */}
      <div id="id1" className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-122.2px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {videos.map((cat, index) => {
          return (
            <Homeviewer key={index} thumbnail={cat.thumbnail} title={cat.title} channelName={cat.channelName} views={cat.views}/>
          );
        })}
      </div>
    </div>
  </>
  );
}
