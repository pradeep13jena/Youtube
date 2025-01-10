import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ChannelOwnerRender from "./ChannelOwnerRender";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";


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

export default function ChannelOwner() {
  const { channel } = useParams();
  
  const [Addvideo, setAddvideo] = useState(false)
  const handleAddvideo = () => setAddvideo(true);
  const handleCloseAddvideo = () => setAddvideo(false);

  const [updateBanner, setUpdateBanner] = useState(false)
  const handleupdateBanner = () => setUpdateBanner(true);
  const handleCloseupdateBanner = () => setUpdateBanner(false);

  const [updateLogo, setUpdateLogo] = useState(false)
  const handleupdateLogo = () => setUpdateLogo(true);
  const handleCloseupdateLogo = () => setUpdateLogo(false);

  const [channelDetails, setChannelDetails] = useState({})
  const [Expand, setExpand] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:5000/channel/${channel}`)
    .then((data) => {
      setChannelDetails(data.data)
      console.log(data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className="md:h-[calc(100vh-59.2px)] overflow-y-auto px-3 md:px-24 flex flex-col gap-4 md:gap-7 py-0 w-full">
      <div
        className="channelBanner w-full relative"
        style={{ paddingTop: "16.13%" }}
      >
      <img
        src={channelDetails && channelDetails.channelBanner && channelDetails.channelBanner}
        alt="YouTube Banner"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg md:rounded-xl"
      />
      <p onClick={handleupdateBanner} className="absolute right-2 bottom-2 sm:right-1 sm:bottom-1 cursor-pointer bg-black rounded-full w-[2px] sm:w-9 h-[2px] sm:h-9 p-1 flex justify-center items-center">
        <ModeEditOutlineIcon sx={{color: "white", fontSize: { xs: 12, sm: 15, lg: 20 } }} />
      </p>
      <Modal
          open={updateBanner}
          onClose={handleCloseupdateBanner}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style1}>
          <div className=' '>
            <div className='flex mb-8 justify-between items-center'>
              <h1 className='text-2xl font-roboto font-semibold'>Banner</h1>
              <CloseIcon onClick={() => setUpdateBanner(false)} className='cursor-pointer' sx={{fontWeight: 800, fontSize: 30}}/>
            </div>
            <form action="" onSubmit={(event) => event.preventDefault()} className='flex flex-col lg:flex lg:flex-row gap-2'>
              <input className='w-full lg:w-[70%] px-2 py-1 font-roboto text-base rounded-md outline-none border-2' type="text" placeholder='Banner URL' name="channelBanner" />
              <button onClick={() => setUpdateBanner(false)} className='w-full lg:w-[30%] px-2 py-1 font-roboto text-base rounded-md outline-none border-2 border-blue-600' type="submit">Update Banner</button>
            </form>
          </div>
        </Box>
      </Modal>
      </div>
      <div className="channelDetails w-full flex justify-start items-center gap-4 mb-5 md:mb-0">
          <div className="relative">
            <img src={channelDetails.channelLogo} alt={channelDetails.channelName} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full md:w-32 md:h-32"/>
            <p onClick={handleupdateLogo} className="absolute right-0 bottom-0 cursor-pointer bg-black rounded-full w-5 h-5 sm:w-9 sm:h-9 p-1 flex justify-center items-center">
              <ModeEditOutlineIcon sx={{color: "white", fontSize: { xs: 12, sm: 15, lg: 20 } }} />
            </p>
            <Modal
                open={updateLogo}
                onClose={handleCloseupdateLogo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
              <Box sx={style1}>
                <div className=' '>
                  <div className='flex mb-8 justify-between items-center'>
                    <h1 className='text-2xl font-roboto font-semibold'>Profile</h1>
                    <CloseIcon onClick={() => setUpdateLogo(false)} className='cursor-pointer' sx={{fontWeight: 800, fontSize: 30}}/>
                  </div>
                  <form action="" onSubmit={(event) => event.preventDefault()} className='flex flex-col lg:flex lg:flex-row gap-2'>
                    <input className='w-full lg:w-[70%]  px-2 py-1 font-roboto text-base rounded-md outline-none border-2' type="text" placeholder='Profile URL' name="channelBanner" />
                    <button onClick={() => setUpdateLogo(false)} className='w-full lg:w-[30%] px-2 py-1 font-roboto text-base rounded-md outline-none border-2 border-blue-600' type="submit">Update Profile</button>
                  </form>
                </div>
              </Box>
            </Modal>
          </div>
        <div className="flex flex-col md:gap-3">
          <h1 className="text-xl md:text-4xl font-bold font-roboto">
            {channelDetails.channelName}
          </h1>
          <div className="flex flex-col gap-1 items-start justify-start mb-3 md:mb-0">
            <div className="flex items-center gap-0 justify-start">
              <p className="text-sm text-gray-800">
                {channelDetails.subscribers} subscribers
              </p>
              <p className="text-sm px-1 text-gray-800">&#x2022;</p>
              <p className="text-sm text-gray-800">{channelDetails && channelDetails.videos && channelDetails.videos.length} videos</p>
            </div>
            <p className={`font-roboto text-sm md:text-base font-light text-black duration-300 ${Expand ? '' : 'line-clamp-1'}`}>
              {channelDetails.description}
            </p><span onClick={() => setExpand(!Expand)} className='font-roboto text-sm  text-gray-800 cursor-pointer'>{Expand ? "less" : 'more...'}</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <h1
              className={`md:px-4 flex gap-1 items-center py-2 px-3 cursor-pointer rounded-3xl text-xs md:text-base font-roboto hover:opacity-80 duration-100
                   bg-gray-300 text-black hover:bg-gray-500 hover:text-white
              `}
              onClick={handleAddvideo}
            >
              Add video
            </h1>
            <Modal
                open={Addvideo}
                onClose={handleCloseAddvideo}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
              <Box sx={style1}>
                <div className=' '>
                  <div className='flex mb-8 justify-between items-center'>
                    <h1 className='text-base md:text-2xl font-roboto font-semibold'>Add Video</h1>
                    <CloseIcon onClick={() => setAddvideo(false)} className='cursor-pointer' sx={{fontWeight: 800, fontSize: 30}}/>
                  </div>
                  <form action="" onSubmit={(event) => event.preventDefault()} className='flex flex-col gap-5'>
                      <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video title' name="channelName" />
                      <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video Description' name="channelDescp" />
                      <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video URL' name="channelBanner" />
                      <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video thumbnail Logo' name="channelLogo" />
                      <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video Category' name="channelLogo" />
                      <button onClick={() => setAddvideo(false)} className='px-3 py-1 font-roboto text-base rounded-md outline-none border-2 border-blue-600' type="submit">Add Video</button>
                  </form>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div className="videoList w-full border-b-2 sm:sticky top-0 bg-white z-50">
        <div className="sliderContent pb-0 sm:pb-3 flex justify-between md:justify-start overflow-x-auto gap-6">
          <h1 className="font-roboto text-base font-medium text-black cursor-pointer transition-all">
            Home
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Videos
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Shorts
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Playlists
          </h1>
          <h1 className="font-roboto text-base font-medium text-gray-700 cursor-pointer transition-all">
            Community
          </h1>
        </div>
      </div>
      <div className="w-full mt-0 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-3 sm:gap-4">
        {channelDetails && channelDetails.videoDetails && channelDetails.videoDetails.map((cat, index) => {
          return (
            <ChannelOwnerRender key={index} cat={cat} />
          )
        })}
      </div>
    </div>
  );
}
