import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { MoreVertOutlined } from "@mui/icons-material";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

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

function formatNumber(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'b';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString();
}

export default function ChannelOwnerRender({cat}) {

  const [openModal, setOpenModal] = useState(false)
  const [editVideo, seteditVideos] = useState(false)
  const handleeditVideo = () => seteditVideos(true);
  const handleCloseeditVideo = () => seteditVideos(false);

  return (
    <div className="flex flex-col">
      <div className="flex md:flex-col sm:gap-[1px] transform transition-transform duration-300">
        <Link to={`/watch?v=${cat._id }`}>
          <img
            src={cat.thumbnail}
            alt={cat.title}
            className="md:rounded-lg md:w-full h-24 sm:h-40 md:h-48 object-cover"
          />
        </Link>
        <div className="flex gap-3 pl-2 py-2 flex-1 justify-between items-start">
          <div className="flex flex-col gap-[.8px] flex-1">
            <h1 className="text-sm sm:text-base font-semibold line-clamp-2">{cat.title}</h1>
            <div className="flex md:flex-col items-center justify-between md:items-start">
              <div className="flex-col sm:flex items-end">
                <p className=" text-gray-700 text-[10px] md:text-[13px]">
                  {formatNumber(cat.views)} views{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div onClick={() => setOpenModal(!openModal)} className="cursor-pointer hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-end sm:justify-center hover:border-gray-300 z-40">
              <MoreVertOutlined
              className="text-gray-700"
              />
            </div>
            <div
              className={` bottom-16 right-8 rounded-md shadow-md bg-white ${
                openModal ? "fixed" : "hidden"
              } `}
            >
              <div className="py-1">
                <div className="flex items-center cursor-pointer hover:bg-gray-200 hover:text-black gap-2 px-2 py-2">
                  <ModeEditOutlineIcon />
                  <h1  onClick={handleeditVideo} className="text-base font-roboto ">
                    Edit video
                  </h1>
                  <Modal
                      open={editVideo}
                      onClose={handleCloseeditVideo}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                    <Box sx={style1}>
                      <div className=' '>
                        <div className='flex mb-8 justify-between items-center'>
                          <h1 className='text-base md:text-2xl font-roboto font-semibold'>Add Video</h1>
                          <CloseIcon onClick={() => seteditVideos(false)} className='cursor-pointer' sx={{fontWeight: 800, fontSize: 30}}/>
                        </div>
                        <form action="" onSubmit={(event) => event.preventDefault()} className='flex flex-col gap-5'>
                            <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video title' name="channelName" />
                            <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video Description' name="channelDescp" />
                            <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video URL' name="channelBanner" />
                            <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video thumbnail Logo' name="channelLogo" />
                            <input className='px-3 py-2 font-roboto text-base border-gray-600 rounded-md outline-none border-2' type="text" placeholder='Video Category' name="channelLogo" />
                            <button onClick={() => seteditVideos(false)} className='px-3 py-1 font-roboto text-base rounded-md outline-none border-2 border-blue-600' type="submit">Add Video</button>
                        </form>
                      </div>
                    </Box>
                  </Modal>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-gray-200 hover:text-black gap-2 px-2 py-2">
                  <DeleteOutlineIcon />
                  <h1 className="text-base font-roboto ">
                    Delete video
                  </h1>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
