import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/users/${id}`)
            .then(res => setData(res.data))
    })


    return (
        <div className='grid grid-cols-2'>
            <div>
                <img width={300} src={data?.image} alt="" />
            </div>
            <div><h3>{data?.firstName}</h3></div>
        </div>
    )
}

export default UserDetail