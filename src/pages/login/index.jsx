import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate() // HOF
  return (
    <div>
      <h2>Login</h2>
      <button onClick={()=> navigate("/")}>Go Home</button>
      <button onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Login