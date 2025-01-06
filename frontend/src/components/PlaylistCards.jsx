import React from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function PlaylistCards({thumbnail, title, channelName, views}) {
  return (
    <Link to={`/videos/watch?`}>
      <div className="flex-shrink-0 w-60">
        <img
          src={thumbnail}
          alt={title}
          className="rounded-md w-60 h-36 object-cover hover:opacity-70"
        />
        <div className="mt-2">
          <h1 className="text-base font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </h1>
          <p className="text-sm text-gray-700">{channelName}</p>
          <p className="text-sm text-gray-700">{views} views</p>  
        </div>
        </div>
    </Link>
  )
}
