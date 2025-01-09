import { Avatar } from "@mui/material";
import Filter from "./Filter.jsx";
import React, { useEffect, useState } from "react";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { MoreVertOutlined } from "@mui/icons-material";
import Homeviewer from "./Homeviewer.jsx";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios'

const style1= {
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
  const [videos, setVideos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/videos')
      .then((data) => {
        setVideos(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


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
            <Homeviewer key={cat._id} _id={cat._id} thumbnail={cat.thumbnail} title={cat.title} channelName={cat.channelName} views={cat.views}/>
          );
        })}
      </div>
    </div>
  </>
  );
}
