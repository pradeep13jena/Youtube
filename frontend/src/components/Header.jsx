import React, { useEffect, useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/sidebarSlice';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

export default function Header(){
  const [isAccount, SetisAccount] = useState(false)
  const [user, setUser] = useState(false)
  const [isSearch, SetisSearch] = useState(false)
  const dispatch = useDispatch()
  
  const handletoggleSidebar = () => {
    dispatch(toggleSidebar())
  }

  useEffect(() => {
    const username = 'Ashish chanchalani'

    axios.post('http://localhost:5000/user', { username })
    .then((data) => {
      setUser(data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  
  return (
    <header className='flex px-5 py-4 md:py-2 justify-between items-center relative'>
      <div className='start flex gap-4 justify-center items-center h-full'>
          <div className='hidden md:block'>
            <MenuSharpIcon sx={{fontSize: 36}} className='cursor-pointer hover:bg-gray-200 duration-300 p-1 rounded-3xl' onClick={handletoggleSidebar}/>
          </div>
          <div>
            <img className='w-24' src="https://ik.imagekit.io/kf28wicizj/Youtube/youtubelogo-removebg-preview.png?updatedAt=1736008969847" alt="" />
          </div>
      </div>
      <div className='searchbar md:w-2/3 lg:w-2/5'>
        <div className='md:hidden'>
          <SearchSharpIcon className='cursor-pointer' onClick={() => {SetisSearch(!isSearch)}} sx={{fontSize: 32}}/>
        </div>
        <div className={` items-center absolute top-0 left-0 pl-1 pr-3 w-full border-b-2 h-full bg-white z-50 transition-all duration-100 ${isSearch ? 'flex' : 'hidden'}`}>
          <input placeholder='Search' className='w-full p-2 border-none outline-none font-roboto text-lg' type="text" />
          <CloseIcon onClick={() => {SetisSearch(!isSearch)}} sx={{fontSize: 32}}/>
        </div>
        <div className={`md:flex items-center gap-2 w-full pl-1 py-1 pr-3 border-2 border-gray-400 rounded-3xl hidden`}>
          <input type='text' placeholder='Search' className='w-full px-2 py-[3px] border-none outline-none font-roboto bg-transparent'></input>
          <SearchSharpIcon sx={{fontSize: 24}}/>
        </div>
      </div>
      <div className='relative hidden md:block z-40 '>
      <img src={user.avatar} alt="User Avatar" className="cursor-pointer" onClick={() => SetisAccount(!isAccount)} style={{
          width: '42px', 
          height: '42px',
          borderRadius: '50%',
          backgroundColor: '#FF5722', 
          fontSize: '29px', 
        }}/>
        <div className={` ${isAccount ? "" : 'hidden'} bg-white w-36 absolute shadow-[0px_8px_24px_0px_rgba(149,_157,_165,_0.2)] rounded-sm right-2 top-9 px-2 py-3`}>
          <ul className='flex flex-col gap-3 justify-center items-start font-roboto'>
            <Link path="/"><li>Sign in</li></Link>
            <Link path="/"><li>Sign up</li></Link>
            <Link path='/'><li>{user.username}</li></Link>
            <Link path="/"><li>Create Channel</li></Link>
          </ul>
        </div>
      </div>
    </header>
  )
}
