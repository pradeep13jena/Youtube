import React from 'react'
import { useParams } from 'react-router-dom'
import Homeviewer from './Homeviewer'

export default function Playlist() {
  const {playlist} = useParams()
  const videos = [
    
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
        "https://i.pinimg.com/736x/7f/74/10/7f7410146fe75b317b34e111f42da75f.jpg",
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
  ]

  return (
    <div className='px-3 sm:px-5 my-5 w-full'>
      <h1 className='text-2xl md:text-4xl font-roboto font-bold mb-6'>{playlist}</h1>
        <div id='id1' className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-143.2px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          {videos.map((cat, index) => {
            return (
            <Homeviewer key={index} thumbnail={cat.thumbnail} title={cat.title} channelName={cat.channelName} views={cat.views}/>
            )
          })}
        </div> 
    </div>
  )
}
