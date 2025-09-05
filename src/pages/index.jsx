import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Home from "./home"
import About from "./about"
import Login from "./login"
import MainLayout from './layout'
import Contact from './contact'
import Service from './service'
import ProductDetail from './product-detail'

const AppRouter = () => {
  return (
    // v5
    // <React.Fragment> vs <></>
    <React.Fragment>
        <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/product/:id' element={<ProductDetail/>}/>
              <Route path='*' element={<div>404</div>}/>
              <Route path='/service' element={<Service/>} />
            </Route>
            
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </React.Fragment>
  )
}

export default AppRouter