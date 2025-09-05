import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate() // HOF
  return (
    <div>
      <h2>Login</h2>
      <button className=' rounded-full bg-gray-500 py-4 px-7 mr-4 mt-5 text-white' onClick={()=> navigate("/")}>Go Home</button>
      <button className=' rounded-full bg-gray-500 py-4 px-7 text-white' onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Login