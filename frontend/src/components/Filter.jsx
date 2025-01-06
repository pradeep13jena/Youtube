import React from 'react'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

export default function Filter({name, thumbnail}) {

  return (
    <div className='flex flex-col justify-center items-center gap-1'>
      <Avatar
      sx={{
        width: {xs: 40, md: 50 }, // Adjust sizes for different breakpoints
        height: {xs: 40, md: 50 },
        bgcolor: deepOrange[500],
      }}
    >
      P
    </Avatar>
    </div>
  )
}
