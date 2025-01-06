import React from 'react'
import ChannelViewer from './ChannelViewer';
import { Link } from 'react-router-dom';

export default function Channelseen() {
  const channels = [
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Tech Savvy",
      description: "Latest tech reviews, tutorials, and gadget news.",
      category: "Technology",
      subscribers: 1500000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Fit & Fab",
      description: "Workout tips, fitness routines, and healthy lifestyle guides.",
      category: "Health & Fitness",
      subscribers: 950000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Epic Eats",
      description: "Delicious recipes and food challenges.",
      category: "Food & Cooking",
      subscribers: 1200000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "World Explorers",
      description: "Travel vlogs and destination reviews.",
      category: "Travel",
      subscribers: 800000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Code Masters",
      description: "Programming tutorials and software development tips.",
      category: "Education",
      subscribers: 500000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Music Vibes",
      description: "Original songs, covers, and music reviews.",
      category: "Music",
      subscribers: 2000000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Game On",
      description: "Gaming walkthroughs, reviews, and live streams.",
      category: "Gaming",
      subscribers: 1750000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Daily Laughs",
      description: "Funny sketches, pranks, and stand-up comedy.",
      category: "Comedy",
      subscribers: 2200000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "DIY Crafts",
      description: "Creative DIY projects and home improvement ideas.",
      category: "Lifestyle",
      subscribers: 650000,
    },
    {
      thumbnail:
      "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      name: "Cinema Central",
      description: "Movie reviews, trailers, and entertainment news.",
      category: "Entertainment",
      subscribers: 1300000,
    },
  ];
  
  console.log(channels);
  
  return (
    <div className='px-3 sm:px-5 my-5 w-full'>
      <h1 className='text-2xl md:text-4xl font-roboto font-bold mb-6'>Channels</h1>
      <div id='id1' className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-162.2px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
        {channels.map((cat, index) => {
          return (
            <ChannelViewer key={index} thumbnail={cat.thumbnail} name={cat.name} date={cat.created}/>
          )
        })}
      </div> 
    </div>
  )
}
