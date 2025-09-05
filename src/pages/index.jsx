import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from "./home"
import About from "./about"
import Login from "./login"
import MainLayout from './layout'
import Contact from './contact'
import ProductDetail from './product-detail'
import User from './user'
import UserDetail from './user-detail'
import Service from './service'

const AppRouter = () => {
    return (
        // v5
        // <React.Fragment> vs <></>
        <React.Fragment>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/service' element={<Service/>}/>
                    <Route path='/products/:id' element={<ProductDetail/>}/>
                    <Route path='/users' element={<User/>} />
                    <Route path='/users/:id' element={<UserDetail/>}/>
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </React.Fragment>
    )
}

export default AppRouter