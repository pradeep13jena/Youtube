import React,{useEffect} from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import PlaylistCards from './PlaylistCards';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: { xs: '90%', sm: '50%', md: '500px'},
  borderRadius: '0.375rem',
  p: 2,
  outline: 0,
};

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: { xs: '90%', sm: '35%', md: '500px'},
  borderRadius: '0.375rem',
  p: 2,
  outline: 0,
};

export default function Account() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

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
    <div className='px-3 sm:px-5 w-full flex flex-col gap-10 md:gap-3 md:h-[calc(100vh-59.2px)] overflow-y-auto '>

      {/* Profile */}
      <div className='flex gap-4 mt-10 mb-10 md:mb-5'>
        <img
          src={user.avatar}
          alt="User Avatar"
          className="cursor-pointer w-15 h-15 text-3xl bg-orange-500 rounded-full object-cover sm:w-20 sm:h-20 sm:text-4xl md:w-32 md:h-32 md:text-5xl"
          onClick={() => SetisAccount(!Account)}
        />
        <div>
        <div className='flex-col gap-1'>
          <p className='font-roboto text-2xl md:text-3xl font-semibold'>{user.username  }</p>
          <p className='font-roboto'>Joined 06 January 2025</p>
        </div>
        </div>
      </div>

      {/* Channel Container */}
      <div className='w-full'>
        {/* label */}
        <div className='flex items-center justify-between mb-3'>
          <h1 className='font-roboto text-xl font-medium'>Channels</h1>
          <div className='flex items-center gap-3'>
            <div className="cursor-pointer rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center md:border-2 md:hover:bg-gray-100">
              <AddIcon onClick={handleOpen}/>

              <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                  <div className=' '>
                    <div className='flex mb-8 justify-between items-center'>
                      <h1 className='text-2xl font-roboto font-semibold'>Channel details</h1>
                      <CloseIcon onClick={() => setOpen(false)} className='cursor-pointer' sx={{fontWeight: 800, fontSize: 30}}/>
                    </div>
                    <form action="" onSubmit={(event) => event.preventDefault()} className='flex flex-col gap-5'>
                      <input className='px-3 py-1 font-roboto text-lg border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Channel name' name="channelName" />
                      <input className='px-3 py-1 font-roboto text-lg border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Channel Description' name="channelDescp" />
                      <input className='px-3 py-1 font-roboto text-lg border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Channel Banner' name="channelBanner" />
                      <input className='px-3 py-1 font-roboto text-lg border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Channel Logo' name="channelLogo" />
                      <button onClick={() => setOpen(false)} className='px-3 py-1 font-roboto text-base rounded-md outline-none border-2 border-blue-600' type="submit">Create channel</button>
                    </form>
                  </div>
                </Box>
              </Modal>
            </div>
            <Link to={'/feed/channels'}><p className='py-2 px-4 border-2 rounded-full cursor-pointer hover:bg-gray-100'>View all</p></Link>
          </div>
        </div>
        {/* cards */}
        <div className="flex gap-4 overflow-x-auto p-3 channel-list">
          {user && user.channelDetails && user.channelDetails.map((cat, index) => (
            <Link  key={index} to={`/owner/${cat.channelName}`}>
              <div className="flex-shrink-0 w-60">
                <img
                  src={cat.channelLogo}
                  alt={cat.channelName}
                  className="rounded-md w-36 h-36 object-cover hover:opacity-70"
                />
                <p className="text-sm font-medium mt-2">{cat.channelName}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Playlists Container*/}
      <div className='w-full'>
        {/* Label */}
        <div className='flex items-center justify-between mb-3'>
            <h1 className='font-roboto text-xl font-medium'>Playlists</h1>
            <div className='flex items-center gap-3'>
              <div className="cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border-2 hover:bg-gray-100">
                <AddIcon onClick={handleOpen1}/>
                <Modal
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                <Box sx={style1}>
                  <div className=' '>
                    <div className='flex mb-8 justify-between items-center'>
                      <h1 className='text-2xl font-roboto font-semibold'>Playlist</h1>
                      <CloseIcon onClick={() => setOpen1(false)} className='cursor-pointer' sx={{fontWeight: 800, fontSize: 30}}/>
                    </div>
                    <form action="" onSubmit={(event) => event.preventDefault()} className='flex flex-col lg:flex lg:flex-row gap-2'>
                      <input className='w-full lg:w-[70%] px-2 py-1 text-black placeholder:text-black font-roboto text-base rounded-md outline-none border-black border-2' type="text" placeholder='Playlist' name="CreatePlaylist" />
                      <button onClick={() => setOpen1(false)} className='w-full lg:w-[30%] px-2 py-1 font-roboto text-base rounded-md outline-none border-2 border-blue-600' type="submit">Update Banner</button>
                    </form>
                  </div>
                </Box>
              </Modal>
              </div>
              <Link to={'/feed/playlists'}><p className='py-2 px-4 border-2 rounded-full cursor-pointer hover:bg-gray-100'>View all</p></Link>
            </div>
        </div>
        {/* cards */}
        <div className="flex gap-4 overflow-x-auto p-3 channel-list">
          {user && user.playlists && user.playlists.map((cat, index) => (
            <Link key={index} to={`/playlist/${cat.name}`}>
              <div className="flex-shrink-0 w-60">
                <img
                  src="https://ik.imagekit.io/kf28wicizj/Youtube/playlist.jpg?updatedAt=1736162630427"
                  alt='cat.name'
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
        <div className='flex items-center justify-between mb-3'>
          <h1 className='font-roboto text-xl font-medium'>Watch Later</h1>
          <div className='flex items-center gap-3'>
            <Link to={'/playlist/Watch later'}>
              <p className={`py-2 px-4 border-2 rounded-full ${user && user.playlists && user.playlists[1].videos.length > 0 ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-not-allowed bg-gray-300'}  `}>View all</p>
            </Link>
          </div>
        </div> 
        {/* Cards */}
        <div className='flex gap-4 overflow-x-auto p-3 channel-list'>
        {user && user.playlists && user.playlists[1].videos.length > 0 ? 
          (user.playlists[1].videos.map((cat, index) => (
            <PlaylistCards key={cat._id} _id={cat._id} thumbnail={cat.thumbnail} title={cat.title} views={cat.views} channelName={cat.channelName}/>
          ))) : (
            <div className="flex-shrink-0 w-60">
                <img
                  src="https://ik.imagekit.io/kf28wicizj/Youtube/No%20videos%20to%20display.png?updatedAt=1736438114685"
                  alt="image"
                  className="rounded-md w-60 h-36 object-cover"
                />
            </div>
          )}
        </div>
      </div>

      {/* Liked videos */}
      <div>
        {/* Label */}
        <div className='flex items-center justify-between mb-3'>
          <h1 className='font-roboto text-xl font-medium'>Liked videos</h1>
          <div className='flex items-center gap-3'>
            <Link to={'/playlist/Liked videos'}>
              <p className={`py-2 px-4 border-2 rounded-full ${user && user.playlists && user.playlists[0].videos.length > 0 ? 'hover:bg-gray-100 cursor-pointer' : 'cursor-not-allowed bg-gray-300'}  `}>View all</p>
            </Link>
          </div>
        </div>
        {/* Cards */}
        <div className='flex gap-4 overflow-x-auto p-3 channel-list justify-centers sm:justify-start'>
          {user && user.playlists && user.playlists[0].videos.length > 0 ? 
          (user.playlists[0].videos.map((cat, index) => (
            <PlaylistCards key={cat._id} _id={cat._id} thumbnail={cat.thumbnail} title={cat.title} views={cat.views} channelName={cat.channelName}/>
          ))) : (
            <div className="flex-shrink-0 w-60">
                <img
                  src="https://ik.imagekit.io/kf28wicizj/Youtube/No%20videos%20to%20display.png?updatedAt=1736438114685"
                  alt="image"
                  className="rounded-md w-60 h-36 object-cover"
                />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
