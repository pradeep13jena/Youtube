import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { MoreVertOutlined } from "@mui/icons-material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: { xs: '90%', sm: '35%', md: '250px'},
  borderRadius: '0.375rem',
  p: 2,
  outline: 0,
};


const playlist = ["Top Hits 2025", "Relaxing Vibe", "Liked videos", 'Watch later']

export default function Homeviewer(cat) {
    const [openModal, setOpenModal] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[1px] transform transition-transform duration-300">
        <Link to={`/watch?v=${cat._id}`}>
          <img
            src={cat.thumbnail}
            alt=""
            className="md:rounded-lg w-full h-44 sm:h-48 object-cover"
          />
        </Link>
        <div className="flex gap-3 px-2 md:px-0 py-2 justify-start items-start">
          <Avatar sx={{ width: 35, height: 35, bgcolor: deepPurple[500] }}>
            N
          </Avatar>
          <div className="flex flex-col gap-[.8px] flex-1">
            <h1 className="text-base font-semibold">{cat.title}</h1>
            <div className="flex md:flex-col items-center md:items-start">
              <p className="text-gray-700 text-[11px] md:text-[13px]">
                {cat.channelName}
              </p>
              {window.screen.availWidth < 640 ? (
                <p className="text-[10px] px-1 text-gray-500 md:hidden">
                  &#x2022;
                </p>
              ) : (
                ""
              )}
              <div className="flex items-end">
                <p className=" text-gray-700 text-[11px] md:text-[13px]">
                  {cat.views} views{" "}
                </p>
                <p className="text-[10px] px-1 text-gray-500">&#x2022;</p>
                <p className=" text-gray-700 text-[11px] md:text-[13px]">
                  {cat.views} views{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div onClick={() => setOpenModal(!openModal)} className="cursor-pointer hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:border-gray-300">
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
                  <WatchLaterOutlinedIcon />
                  <h1 className="text-base font-roboto ">
                    Add to watch Later
                  </h1>
                </div>
                <div className="flex items-center cursor-pointer hover:bg-gray-200 hover:text-black gap-2 px-2 py-2">
                  <BookmarkBorderOutlinedIcon />
                  <h1 onClick={handleOpen} className="text-base font-roboto ">
                    Save to playlist
                  </h1>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                  <Box sx={style}>
                    <div className="flex flex-col gap-1 px-3 py-2">
                      <div className="mb-7 flex items-center justify-between">
                        <h1 className="text-2xl font-roboto font-bold">Playlist</h1>
                      </div>
                      {
                        playlist.map((cat, index) => {
                          return (
                            <div key={index} className="flex w-full items-center justify-start gap-6">
                              <input className="w-4 h-4" type="checkbox" value={cat} name={cat} id={cat} />
                              <label className="text-lg cursor-pointer font-roboto" htmlFor={cat}>{cat}</label>
                            </div>
                          )
                        })
                      }
                    </div>
                  </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
