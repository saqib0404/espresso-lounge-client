import React from 'react'
import Home from '../pages/Home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root