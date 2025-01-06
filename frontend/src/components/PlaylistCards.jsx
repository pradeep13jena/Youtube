import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function PlaylistCards({thumbnail, title, channelName, views}) {
  const [modalopen, setModelopen] = useState(false)
  return (
      <div className="flex-shrink-0 w-60">
        <Link to={'/videos/watch'}>
          <img
            src={thumbnail}
            alt={title}
            className="rounded-md w-60 h-36 object-cover hover:opacity-70"
          />
        </Link>
        <div className="mt-2 flex justify-between">
          <div>
            <h1 className="text-base font-semibold line-clamp-2">
              {title}
            </h1>
            <p className="text-sm text-gray-700">{channelName}</p>
            <p className="text-sm text-gray-700">{views} views</p>  
          </div>
        </div>
        </div>
  )
}
