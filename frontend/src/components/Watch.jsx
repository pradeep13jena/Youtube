import { Avatar } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import { color, height } from '@mui/system'
import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ReplySharpIcon from '@mui/icons-material/ReplySharp';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import WatchSuggestion from './WatchSuggestion'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const style ={
  border: '1px solid #ddd',
  borderRadius: 3,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  bgcolor: 'background.paper',
  maxWidth: '200px',
  textAlign: 'center',
}

export default function Watch() {
  const [searchParams] = useSearchParams()
  const _id = searchParams.get("v")

  const [sub, Setsub] = useState(false)
  const [expand, setExpand] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("")
  const [videos, setVideos] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:5000/videos/${_id}`)
    .then((data) => {
      setVideos(data.data)
      setComments(data.data.comments)
      console.log(data.data.comments[0].username)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]); // Add new comment to the list
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className='videoWatcher w-full flex flex-col lg:flex-row gap-5 px-0 sm:px-8 py-5 md:h-[calc(100vh-59.2px)] overflow-y-auto'>
      <div className='w-full lg:w-[70%] flex flex-col gap-3'>
          <div className="videosPlayer lg:rounded-lg relative pt-[54.25%] overflow-hidden">
            <ReactPlayer
            controls={true}
            playing={true}
            light={false}
            url={videos.videoLink}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}/>
          </div>
          <div className="flex flex-col gap-5 w-full px-2 lg:px-0">

            {/* Title with views */}
            <div className='flex flex-col justify-start items-start text-sm gap-1 w-full'>
              <h1 className='videoTitle font-roboto text-sm md:text-[1.3rem] font-semibold'>{videos.title}</h1>
              <p className='text-xs md:text-sm'>{videos.views} views</p>
            </div>

            {/* Channel Details and Action */}
            <div className='w-full flex flex-col gap-7 xl:flex xl:flex-row justify-end items-start lg:items-center lg:justify-between'>

              {/* Channel name and subscribe */}
              <div className='w-full flex items-center gap-7 lg:justify-start justify-between'>

                {/* CHannel Avatar */}
                <div className='justify-between lg:justify-start flex items-center gap-3'>
                  <div>
                    <Avatar sx={{bgcolor: deepPurple[500], width: { xs: 25, sm: 30, md: 40 }, height: { xs: 25, sm: 30, md: 40 } }}>
                      P
                    </Avatar>
                  </div>
                  <div className='flex flex-col'>
                    <h1 className='font-medium font-roboto'>{videos.channelName}</h1>
                    <p className='text-gray-400 font-roboto text-xs md:text-sm'>23.3k subscribers</p>
                  </div>
                </div>
                <div>
                  <h1
                    className={`md:px-3 font-medium flex gap-2 items-center py-2 px-3 cursor-pointer rounded-3xl text-xs md:text-base font-roboto hover:opacity-80 duration-500 ${
                    sub
                    ? "bg-gray-300 text-black flex items-center justify-center"
                    : "  bg-black text-white"
                    }`}
                    onClick={() => Setsub(!sub)}
                    >
                    {sub ? (
                    <>
                    <NotificationsOutlinedIcon  
                    sx={{
                    fontSize: {
                    xs: 16, // Font size for mobile devices
                    sm: 20, // Font size for small screens and above
                    }
                    }} 
                    /> 
                    Subscribed
                    </>              
                    ) : (
                    "Subscribe"
                    )}
                  </h1>
                </div>
              </div>

              {/* Video Action */}
              <div className='flex items-center justify-start lg:justify-end gap-3 w-full lg:gap-2'>
              <div className='flex items-center'>
                <div className='flex items-center gap-3 px-2 py-1 md:px-4 md:py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-tl-3xl rounded-bl-3xl'>
                  <ThumbUpAltOutlinedIcon sx={{ fontSize: { xs: 22 } }} />
                  <p className='font-roboto text-xs'>{videos.likes}</p>
                </div>
                <div className='flex items-center gap-3 px-2 py-1 md:px-4 md:py-2 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-tr-3xl rounded-br-3xl'>
                  <ThumbDownOutlinedIcon sx={{ fontSize: { xs: 22 } }} />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-3xl bg-gray-200 px-2 py-1 md:px-4 md:py-2 cursor-pointer hover:bg-gray-300">
                <BookmarkBorderSharpIcon sx={{ fontSize: { xs: 22 } }}  />
                <p className='font-roboto text-xs'>Save</p>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-3xl bg-gray-200 px-2 py-1 md:px-4 md:py-2 cursor-pointer hover:bg-gray-300">
                <ReplySharpIcon sx={{ fontSize: { xs: 22} }}  />
                <p className='font-roboto text-xs'>Share</p>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-3xl bg-gray-200 px-2 py-2 cursor-pointer hover:bg-gray-300">
                <MoreHorizOutlinedIcon sx={{ fontSize: { xs: 22 } }}  />
              </div>
            </div>
          </div>

            {/* Description bar */}
            <div className='p-4 w-full bg-gray-200 rounded-lg'>
              <h1 className='text-black font-roboto text-sm font-medium mb-2'>43000 views 12 May 2025</h1>
              <p className={`font-roboto text-sm text-gray-700 duration-300 ${expand ? '' : 'line-clamp-1'}`}>
                {videos.description}
                </p>
                <p onClick={() => setExpand(!expand)} className='font-roboto text-sm text-black cursor-pointer'>{expand ? "less" : 'more...'}</p>
            </div>
          </div>
          <div className="comments px-2 lg:px-0 flex flex-col gap-4">
            <h1 className='text-black text-xl font-bold font-roboto mt-4'>5 Comments</h1>
            <div className="">
              {/* Input Section */}
              <div className="flex items-start gap-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a public comment..."
                    className="w-full py-1 px-2 border font-roboto border-b-black outline-none rounded-md resize-none"
                    rows={1}
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button
                      className={`px-4 py-2 font-medium text-black hover:text-gray-700 ${newComment.trim() === "" && "opacity-0"} `}
                      onClick={() => setNewComment("")}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddComment}
                      className={`ml-2 px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 ${
                        newComment.trim() === "" && "opacity-0 cursor-not-allowed"
                      }`}
                      disabled={newComment.trim() === ""}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-10 lg:mt-7">
                {comments.length > 0 ? (
                  comments.map((comment, index) => (
                    <div key={index} className="flex items-center justify-between gap-3 mt-4">
                       <div className='flex justify-between gap-2 items-start'>
                        {/*
                        <img
                          src="https://via.placeholder.com/40"
                          alt="User avatar"
                          className="w-10 h-10 rounded-full"
                        />*/}
                        <div> 
                          <p className="font-medium text-gray-700">{comment.username}</p>
                          <p className="text-gray-800">{comment.text}</p>
                        </div>
                      </div>
                      <div>
                        <div onClick={handleClick} className='cursor-pointer'>
                          <MoreVertIcon/>
                        </div>
                        <Popper id={id} open={open} anchorEl={anchorEl}>
                          <Box sx={style}>
                            <div className='flex items-center gap-3 cursor-pointer hover:rounded-md hover:bg-gray-300 px-3 py-3'>
                              <DeleteOutlineIcon/>
                              <p className='font-roboto text-base text-black hover:rounded-md'>Delete Comment</p>
                            </div>
                            <div className='flex items-center gap-3 cursor-pointer hover:rounded-md hover:bg-gray-300 px-3 py-3'>
                              <EditIcon/>
                              <p className='font-roboto text-base text-black hover:rounded-md'>Edit Comment</p>
                            </div>
                          </Box>
                        </Popper>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                )}
              </div>
            </div>
            <div></div>
          </div>
      </div>
      <div className="w-full lg:w-[30%] grid grid-cols-1 gap-2 sm:gap-3 px-2">
        <h1 className='text-2xl font-roboto font-semibold mb-5'>Suggested videos</h1>
        {/* {videos.map((cat, index) => {
          return (
            <WatchSuggestion key={index} cat={cat}/>
          )
        })} */}
      </div>
    </div>
)}