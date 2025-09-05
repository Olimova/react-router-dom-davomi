import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get("https://dummyjson.com/users")
            .then(res => setData(res.data))
    }, [])
    return (
        <>
            <h2>Home</h2>
            <div>
                {
                    data?.users?.map((item) => (
                        <div key={item.id}>
                            <div onClick={() => navigate(`/users/${item.id}`)}>
                                <img width={300} src={item.image} alt="" />
                            </div>
                            <div>
                                <h3>{item.firstName}</h3></div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default User