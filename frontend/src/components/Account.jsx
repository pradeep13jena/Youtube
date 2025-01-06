import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import PlaylistCards from './PlaylistCards';
import { Link } from 'react-router-dom';

export default function Account() {
  const channels = [
    {
      name: "DIY Crafts",
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      description: "Creative DIY projects and home improvement ideas.",
      category: "Lifestyle",
      subscribers: 650000,
    },
    {
      name: "Cinema Central",
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      description: "Movie reviews, trailers, and entertainment news.",
      category: "Entertainment",
      subscribers: 1300000,
    },
  ];

  const playlists = [
    {
      name: "Watch later",
      thumbnail:
        "https://ik.imagekit.io/kf28wicizj/Youtube/playlist.jpg?updatedAt=1736162630427",
      description: "Original songs, covers, and music reviews.",
      category: "Music",
      subscribers: 2000000,
    },
    {
      name: "Liked videos",
      thumbnail:
        "https://ik.imagekit.io/kf28wicizj/Youtube/playlist.jpg?updatedAt=1736162630427",
      description: "Gaming walkthroughs, reviews, and live streams.",
      category: "Gaming",
      subscribers: 1750000,
    },
    {
      name: "Cinema Central",
      thumbnail:
        "https://ik.imagekit.io/kf28wicizj/Youtube/playlist.jpg?updatedAt=1736162630427",
      description: "Movie reviews, trailers, and entertainment news.",
      category: "Entertainment",
      subscribers: 1300000,
    },
  ];

  const videos = [
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Master ReactJS in 30 Days",
      channelName: "ReactMastery",
      views: "2.1M",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/94/ae/fe/94aefebbb20286aedf467dea994fda32.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    }
  ];

  const videos1 = [
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    },
    {
      thumbnail:
        "https://i.pinimg.com/236x/ec/7c/0e/ec7c0e0b557e16fb687652d1924c4480.jpg",
      title: "Building a YouTube Clone: Full Stack Guide",
      channelName: "CodeWithMe",
      views: "950K",
    }
  ];
  
  return (
    <div className='px-3 sm:px-5 w-full flex flex-col gap-10 md:gap-3 md:h-[calc(100vh-59.2px)] overflow-y-auto '>

      {/* Profile */}
      <div className='flex gap-4 mt-10 mb-10 md:mb-5'>
      <Avatar
        sx={{
          width: { xs: 60, sm: 80, md: 110 }, // Small width for smaller screens
          height: { xs: 60, sm: 80, md: 110 }, // Match height with width
          fontSize: { xs: 30, sm: 45, md: 60 }, 
          bgcolor: deepOrange[500]// Adjust font size proportionally
        }}>P</Avatar>
        <div>
        <div className='flex-col gap-1'>
          <p className='font-roboto text-2xl md:text-3xl font-semibold'>Pradeep Jena</p>
          <p className='font-roboto'>Joined 06 January 2025</p>
        </div>
        </div>
      </div>

      {/* Channel Container */}
      <div className='w-full'>
        {/* label */}
        <div className='flex items-center justify-between'>
          <h1 className='font-roboto text-xl font-medium'>Channels</h1>
          <div className='flex items-center gap-3'>
            <div className="cursor-pointer rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center md:border-2 md:hover:bg-gray-100">
              <AddIcon/>
            </div>
            <Link to={'/feed/channels'}><p className='py-2 px-4 border-2 rounded-full cursor-pointer hover:bg-gray-100'>View all</p></Link>
          </div>
        </div>
        {/* cards */}
        <div className="flex gap-4 overflow-x-auto p-3 channel-list">
          {channels.map((cat, index) => (
            <Link  key={index} to={`/channel/${cat.name}`}>
              <div className="flex-shrink-0 w-60">
                <img
                  src={cat.thumbnail}
                  alt={cat.name}
                  className="rounded-md w-60 h-36 object-cover hover:opacity-70"
                />
                <p className="text-sm font-medium mt-2">{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Playlists Container*/}
      <div className='w-full'>
        {/* Label */}
        <div className='flex items-center justify-between'>
            <h1 className='font-roboto text-xl font-medium'>Playlists</h1>
            <div className='flex items-center gap-3'>
              <div className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border-2 hover:bg-gray-100">
                <AddIcon/>
              </div>
              <Link to={'/feed/playlists'}><p className='py-2 px-4 border-2 rounded-full cursor-pointer hover:bg-gray-100'>View all</p></Link>
            </div>
        </div>
        {/* cards */}
        <div className="flex gap-4 overflow-x-auto p-3 channel-list">
          {playlists.map((cat, index) => (
            <Link key={index} to={`/playlist/${cat.name}`}>
              <div className="flex-shrink-0 w-60">
                <img
                  src={cat.thumbnail}
                  alt={cat.name}
                  className="rounded-md w-60 h-36 object-cover hover:opacity-70"
                />
                <p className="text-sm font-medium mt-2">{cat.name}</p>
              </div>
            </Link>
        ))}
        </div>
      </div>

      {/* Watch Later */}
      <div className='w-full'>
        {/* Label */}
        <div className='flex items-center justify-between'>
          <h1 className='font-roboto text-xl font-medium'>Watch Later</h1>
          <div className='flex items-center gap-3'>
            <div className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border-2 hover:bg-gray-100">
              <AddIcon/>
            </div>
            <Link to={'/playlist/watchlater'}><p className='py-2 px-4 border-2 rounded-full cursor-pointer hover:bg-gray-100'>View all</p></Link>
          </div>
        </div> 
        {/* Cards */}
        <div className='flex gap-4 overflow-x-auto p-3 channel-list'>
          {videos.map((cat, index) => (
            <PlaylistCards key={index} thumbnail={cat.thumbnail} title={cat.title} views={cat.views} channelName={cat.channelName}/>
          ))}
        </div>
      </div>

      {/* Liked videos */}
      <div>
        {/* Label */}
        <div className='flex items-center justify-between'>
          <h1 className='font-roboto text-xl font-medium'>Liked videos</h1>
          <div className='flex items-center gap-3'>
            <div className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border-2 hover:bg-gray-100">
              <AddIcon/>
            </div>
            <Link to={'/playlist/Liked videos'}>
              <p className='py-2 px-4 border-2 rounded-full cursor-pointer hover:bg-gray-100'>View all</p>
            </Link>
          </div>
        </div>
        {/* Cards */}
        <div className='flex gap-4 overflow-x-auto p-3 channel-list'>
          {videos1.map((cat, index) => (
            <PlaylistCards key={index} thumbnail={cat.thumbnail} title={cat.title} views={cat.views} channelName={cat.channelName}/>
          ))}
        </div>
      </div>
    </div>
  )
}
