import React from 'react'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  const isToggle = useSelector((state => state.sidebar.isVisible))
  const menuItem = [
    {
      navigate: '/home',
      icons: <HomeSharpIcon sx={{fontSize: 25}}/>,
      label: 'Home'
    }, {
      navigate: '/feed/subscriptions',
      icons: <SubscriptionsSharpIcon sx={{fontSize: 25}}/>,
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

  const subs = [
    { name: 'Ghanshyam Tech' },
    { name: 'Code Innovators' },
    { name: 'Tech Trends' },
    { name: 'Future Coders' },
    { name: 'DevHub Lorem Ipsum Dolor Hello' },
    { name: 'AI Insights' },
    { name: 'Cyber World' },
    { name: 'Programming Gurus' },
    { name: 'Cloud Masters' },
    { name: 'NextGen Developers' }
  ];

  // 
  
  return (
    <nav className={`hidden ${isToggle ?  'w-68' : 'w-20'} divide-y-2 md:flex gap-5 mt-2 md:h-[calc(100vh-70.2px)] md:flex-col items-start p-2 md:bg-white overflow-y-auto`}>
      {/* First */}
        <ul className='flex flex-col gap-2 w-full'>
          {menuItem.map((cat, index) => {
            return (
              <Link key={index} to={cat.navigate}>
                <li className={` ${isToggle ? 'flex px-4' : 'flex flex-col gap-[.8em] px-[2px]'} py-2 rounded-md cursor-pointer gap-5 items-center hover:bg-gray-200`}>
                    <div>{cat.icons}</div>
                    <p className={`flex-1 ${isToggle ? 'text-sm  font-normal' : 'text-[10px]'}`}>{cat.label}</p>
                </li>
              </Link>
            )
          })}
        </ul>

      {/* Second */}
      <div className={` ${isToggle ? '' : 'hidden'} py-3 w-full flex flex-col gap-5`}>
        <h1 className='font-roboto font-medium text-base px-4 '>Subscriptions</h1>
        <ul className='flex flex-col gap-1'>
          {subs.map((cat, index) => {
            return(
              <Link key={index} to={'/'}>
                <li className='flex gap-4 items-center cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md'>
                  <Avatar sx={{width: 20, height: 20, bgcolor: deepOrange[500]}}>O</Avatar>
                  <p className='truncate text-sm'>{cat.name}</p>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>

    </nav>
  )
}
