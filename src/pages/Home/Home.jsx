import React from 'react'
import Navbar from '../../components/Shared/Navbar'
import Banner from '../../components/Banner/Banner'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Outlet />
            <Footer />
        </>
    )
}

export default Home