import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [data,setData]=useState(null)
  const navigate=useNavigate()
  useEffect(()=>{
    axios
    .get("https://dummyjson.com/products")
      .then(res => setData(res.data))
  },[])
  return (
    <>
   <h2>Home</h2>
   <div>
    {
      data?.products?.map((product)=>(
        <div key={product.id}>
          <div onClick={()=>navigate(`/products/${product.id}`)}>
            <img width={300} src={product.images} alt="" />
          </div>
          <div>
            <h3>{product.title}</h3></div>
        </div>
      ))
    }
   </div>
    </>
  )
}

export default Home