import React from 'react'
import ChannelViewer from './ChannelViewer';
import { Link } from 'react-router-dom';

export default function Channelseen() {
  
  return (
    <div className='px-3 sm:px-5 my-5 w-full'>
      <h1 className='text-2xl md:text-4xl font-roboto font-bold mb-6'>Channels</h1>
      <div id='id1' className="w-full grid grid-cols-1 sm:grid-cols-2 md:h-[calc(100vh-162.2px)] overflow-y-auto lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
        {channels.map((cat, index) => {
          return (
            <ChannelViewer key={index} thumbnail={cat.thumbnail} name={cat.name} date={cat.created}/>
          )
        })}
      </div> 
    </div>
  )
}
