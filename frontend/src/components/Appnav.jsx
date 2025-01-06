import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

export default function Appnav() {
  return (
    <div className='w-full md:hidden sticky bottom-0 bg-white flex justify-between px-4 py-2 shadow-[0px_1px_5px_0px_rgba(0,_0,_0,_0.25)]'>
      <Link to={'/home'}><HomeIcon sx={{fontSize: 27}}/></Link>
      <Link to={'/playlist/watchlist'}><WatchLaterOutlinedIcon sx={{fontSize: 27}}/></Link>
      <Link to={'/feed/subscriptions'}><SubscriptionsOutlinedIcon sx={{fontSize: 27}}/></Link>
      <Link to={'/feed/you'}><AccountCircleOutlinedIcon sx={{fontSize: 27}}/></Link>
    </div>
  )
}
