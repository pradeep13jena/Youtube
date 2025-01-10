import React, {useState, useEffect} from 'react'
import Homeviewer from './Homeviewer';
import { deepOrange } from '@mui/material/colors';
import Filter from './Filter';
import axios from 'axios'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Subscription() {
  const [user, setUser] = useState({})
  const [videos, setVideos] = useState({})

  useEffect(() => {
    const username = 'Ashish chanchalani'

    const fetchUserData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/user", {username});
        setUser(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };


    axios.get('http://localhost:5000/videos')
      .then((data) => {
        setVideos(data.data)
        console.log(data.data)
      })
      .catch((err) => {
        console.log(err)
      })

    fetchUserData()
  }, [])

  return (
    <div className='flex flex-col px-0 sm:px-5 justify-start pb-2 md:pb-0 w-full overflow-y-auto'>

      {/* Labels */}
      <div className='w-full md:mt-7 md:mb-5'>
        <div 
          id="id1" 
          className="flex items-center justify-start gap-5 px-2 py-2 w-full min-w-0 overflow-x-auto bg-white sticky top-0 z-50"
        >
          {user &&
          user.subscriptionDetails &&
          user.subscriptionDetails.map((cat, index) => (
            <Link key={index} to ={`/channel/${cat.channelName}`}>
              <div className='flex flex-col justify-center items-center gap-1'>
                <img src={cat.channelLogo} alt={cat.channelName} className='w-12 h-12 md:w-14 md:h-14 rounded-full'/>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Content */}
      <div id="id1" className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-172px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-4 md:mt-0">
        {videos && videos.length > 0 ? (
          videos.map((cat) => (
            <Homeviewer
              key={cat._id}
              channelDetails={cat.channelDetails}
              thumbnail={cat.thumbnail}
              title={cat.title}
              channelName={cat.channelName}
              views={cat.views}
            />
          ))
        ) : (
          <p>No videos available</p> // You can display a fallback message
        )}
      </div>
    </div>
  )
}
