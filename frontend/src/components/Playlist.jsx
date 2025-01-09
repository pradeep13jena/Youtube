import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Homeviewer from './Homeviewer'
import Playlistcards from './PlaylistCards'
import PlaylistRender from './PlaylistRender'

export default function Playlist() {
  const {playlist} = useParams()
  const [user, setUser] = useState({})
  const [videos, setVideos] = useState([])

  return (
    <div className='sm:px-5 my-5 w-full'>
      <h1 className='text-2xl md:text-4xl font-roboto font-bold mb-6 px-3'>{playlist}</h1>
        <div id='id1' className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-173.2px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
          {videos.map((cat, index) => {
            return (
            <PlaylistRender key={index} thumbnail={cat.thumbnail} title={cat.title} channelName={cat.channelName} views={cat.views}/>
            )
          })}
        </div> 
    </div>
  )
}
