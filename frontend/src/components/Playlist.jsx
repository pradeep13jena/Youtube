import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Homeviewer from './Homeviewer'
import Playlistcards from './PlaylistCards'
import PlaylistRender from './PlaylistRender'
import axios from 'axios'

export default function Playlist() {
  const {playlist} = useParams()

  const [user, setUser] = useState({})

  useEffect(() => {
    const username = 'Ashish chanchalani'

    const fetchUserData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/user", {username});
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData()
  }, [])

  return (
    <div className='sm:px-5 my-5 w-full'>
      <h1 className='text-2xl md:text-3xl font-roboto font-bold mb-6 md:my-10 px-3'>{playlist}</h1>
        <div id='id1' className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-173.2px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
        {
          user && 
          user.playlists &&
          user.playlists
            .filter(cat => cat.name.toLowerCase() === playlist.toLowerCase())
            .map((cat, index) => (
              cat.videos.length > 0 ? (
                cat.videos.map((video, videoIndex) => (
                  <PlaylistRender
                    key={videoIndex}
                    thumbnail={video.thumbnail}
                    title={video.title}
                    channelName={video.channelName}
                    views={video.views}
                  />
                ))
              ) : (
                <p key={index}>No videos available in this playlist</p>
              )
            ))
          }
        </div> 
    </div>
  )
}
