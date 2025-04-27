import React from 'react'
import Navbar from '../../components/Shared/Navbar'
import Banner from '../../components/Banner/Banner'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Shared/Footer'
import Insta from '../../components/Insta/Insta'

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Insta />
            <Footer />
        </>
    )
}

export default Home