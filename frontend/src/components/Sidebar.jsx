import React, { useState, useEffect } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Sidebar() {
  const isToggle = useSelector((state => state.sidebar.isVisible))
  const menuItem = [
    {
      navigate: '/',
      icons: <HomeOutlinedIcon sx={{fontSize: 25}}/>,
      label: 'Home'
    }, {
      navigate: '/feed/subscriptions',
      icons: <SubscriptionsOutlinedIcon sx={{fontSize: 25}}/>,
      label: 'Subscription'
    }, {
      navigate: '/playlist/Watch later',
      icons: <AccessTimeSharpIcon sx={{fontSize: 25}}/>,
      label: 'Watch later'
    }, {
      navigate: '/playlist/Liked videos',
      icons: <ThumbUpAltOutlinedIcon sx={{fontSize: 25}}/>,
      label: 'Liked vidoes'
    }, {
      navigate: '/feed/you',
      icons: <AccountCircleOutlinedIcon sx={{fontSize: 25}}/>,
      label: 'You'
    }
  ]

  const [user, setUser] = useState({})

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

    fetchUserData()
  }, [])

  return (
    <nav className={`hidden ${isToggle ?  'w-[18rem]' : 'w-20'} divide-y-2 md:flex gap-5 mt-2 md:h-[calc(100vh-66.2px)] md:flex-col items-start p-2 md:bg-white overflow-y-auto`}>
      {/* First */}
        <ul className='flex flex-col gap-2 w-full'>
          {menuItem.map((cat, index) => {
            return (
              <Link key={index} to={cat.navigate}>
                <li className={` ${isToggle ? 'flex px-4' : 'flex flex-col gap-[.8em] px-[2px]'} py-2 rounded-md cursor-pointer gap-5 items-center hover:bg-gray-100`}>
                    <div>{cat.icons}</div>
                    <p className={`flex-1 ${isToggle ? 'text-sm  font-normal' : 'text-[10px]'}`}>{cat.label}</p>
                </li>
              </Link>
            )
          })}
        </ul>

      {/* Second */}
      <div className={` ${isToggle ? '' : 'hidden'} py-3 w-full flex flex-col gap-2`}>
        <h1 className='font-roboto font-medium text-[1.1rem] px-4 '>Subscriptions</h1>
        <ul className='flex flex-col gap-1'>
          {user && user.subscriptions && user.subscriptions.length > 0 ? 
          (user.subscriptions.map((cat, index) => {
            return(
              <Link key={index} to={`/channel/${cat.name}`}>
                <li className='flex gap-3 items-center cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md'>
                  <Avatar sx={{width: 25, height: 25, bgcolor: deepOrange[500]}}>O</Avatar>
                  <p className='truncate text-sm'>{cat.name}</p>
                </li>
              </Link>
          )})) : (
            <p className='mt-3 text-sm font-roboto px-4'>No subscribed channels to display...</p>
          )}
        </ul>
      </div>

    </nav>
  )
}
