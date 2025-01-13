import React, { useState, useEffect } from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { login } from '../features/tokenSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [action, setAction] = useState("Login")
  const [url ,setURL] = useState("http://localhost:5000/login")
  const registerURL = "http://localhost:5000/register"
  const loginURL = "http://localhost:5000/login"
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    setFormError({});
}, [action]);


  const initialValue = {
    signIN_name: "",
    signIN_username: "",
    signIN_password: ""
  }

  const [formValues, setFormValues] = useState(initialValue);
  const [formError, setFormError] = useState({});

  function handleChange(e){
    const {name, value} = e.target
    setFormValues({ ...formValues, [name]: value})
  }

  function handleSubmit(e){
    e.preventDefault()
    const isValid = handleValidate(formValues);

    if (isValid) {
      const { signIN_name: name, signIN_username: username, signIN_password: password } = formValues
      const formData = {name: name.toLowerCase(), username: username.toLowerCase(), password}
      axios.post(url, formData)
      .then((res) => {
        if(action === "Login"){
          dispatch(login(res.data.jwtToken))
          navigate("/")
        }
      })
      .catch((err) => alert(err.response.data.error))
    } else {
      console.log(formError);
    }
  }

  function handleValidate(values){
    const errors = {}
    const nameRegex = /^[a-zA-Z\s]{2,50}$/
    const usernameRegex = /^[a-zA-Z0-9](?!.*[_.]{2})[a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/
    const passRegex = /^.{8,}$/

    if(action !== "Login"){
      if(!values.signIN_name){
        errors.signIN_name = "Name is required"
      } else if (!nameRegex.test(values.signIN_name)){
        errors.signIN_name = "Name must contain only letters and spaces, and be between 2 and 50 characters!"
      }
    }

    if (!values.signIN_username) {
      errors.signIN_username = "Username is required";
    } else if (!usernameRegex.test(values.signIN_username)) {
      errors.signIN_username = "Username must be 3-20 characters, should not contain space and should not start or end with special characters!";
    }

    if (!values.signIN_password) {
      errors.signIN_password = "Password is required";
    } else if (!passRegex.test(values.signIN_password)) {
      errors.signIN_password = "Password must be at least 8 characters long!";
    }
    
    setFormError(errors)
    return Object.keys(errors).length === 0;
  }

  return (
    <div className='container flex flex-col md:max-w-2xl mx-auto mt-16'>
      <div className="header flex flex-col items-center gap-2 w-full">
        <div className="text text-red-500 text-3xl font-roboto font-bold">{action}</div>
        <div className="underline w-20 h-2 bg-red-500 border-2"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs mt-10 flex flex-col gap-3 mx-4">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className='m-auto md:w-3/4 w-full'>
            <div className="input flex items-center  h-12 md:h-14 bg-gray-200 border-2">
              <AccountCircleRoundedIcon 
                sx={{
                  width: { xs: 20, md: 27 },
                  height: { xs: 20, md: 27 },
                  marginLeft: 2,
                }} 
              />
              <input 
                id='name' 
                onChange={handleChange} 
                name="signIN_name" 
                value={formValues.signIN_name} 
                type="text" 
                placeholder='Name' 
                className='bg-transparent outline-none border-0 w-full ml-3 font-roboto text-lg' 
              />
            </div>
            <p className='text-sm text-red-500 font-roboto mt-1'>{formError.signIN_name}</p>
          </div>
        )}
        <div className='m-auto md:w-3/4 w-full'>
          <div className="input flex items-center m-auto h-12 md:h-14 bg-gray-200 border-2">
            <AlternateEmailRoundedIcon sx={{
              width: { xs: 20, md: 27 },
              height: { xs: 20, md: 27 },
              marginLeft: 2,
            }}/>
            <input id='username' onChange={handleChange} name="signIN_username" value={formValues.signIN_username} type="text" placeholder='Username' className='bg-transparent w-full outline-none border-0 ml-3 font-roboto text-lg'/>
          </div>
          <p className='text-sm text-red-500 font-roboto mt-1'>{formError.signIN_username}</p>
        </div>
        <div className='m-auto md:w-3/4 w-full'>
          <div className="input flex items-center m-auto h-12 md:h-14 bg-gray-200 border-2">
            <PasswordRoundedIcon sx={{
              width: { xs: 20, md: 27 },
              height: { xs: 20, md: 27 },
              marginLeft: 2,
            }} />
            <input id='password' onChange={handleChange} name="signIN_password" value={formValues.signIN_password} type="password" placeholder='Password'  className='bg-transparent w-full outline-none border-0 ml-3 font-roboto text-lg'/>
          </div>
          <p className='text-sm text-red-500 font-roboto mt-1'>{formError.signIN_password}</p>
        </div>
        </div>
        <div className="submit-container flex justify-center gap-3 mt-7 mx-auto ">
          <button type='button' onClick={() => 
            {
              setAction("Sign Up");
              setURL(registerURL);
              console.log(url)
            }} className={`${action === "Login" ? "bg-gray-200 text-black hover:bg-gray-300" : "bg-red-500 text-white" } submit flex justify-center items-center px-5 py-2 rounded-full border-2 font-roboto text-base md:text-lg duration-200 cursor-pointer`}>Sign Up</button>
          <button type='button' onClick={() => {
            setAction("Login");
            setURL(loginURL);
            console.log(url)
          }} className={`${action === "Sign Up" ? "bg-gray-200 text-black hover:bg-gray-300" : "bg-red-500 text-white"} submit flex justify-center items-center px-5 py-2 rounded-full border-2 font-roboto text-base md:text-lg duration-200 cursor-pointer`}>Login</button>
          <button className='px-5 rounded-full py-2 border-2 bg-gray-200 font-roboto text-base md:text-lg hover:bg-gray-300 duration-200' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
