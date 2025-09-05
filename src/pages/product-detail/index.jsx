import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id}=useParams()
    const [data,setData]=useState(null)

    useEffect(()=>{
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(res=>setData(res.data))
    })
    
    
  return (
    <div className='grid grid-cols-2'>
      <div>
        <img width={300} src={data?.images} alt="" />
      </div>
      <div></div>
    </div>
  )
}

export default ProductDetail