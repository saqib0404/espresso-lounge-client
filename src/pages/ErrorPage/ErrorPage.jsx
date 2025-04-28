import React from 'react'
import notFound from "../../assets/404/404.gif"
import Navbar from '../../components/Shared/Navbar'
import Footer from '../../components/Shared/Footer'
import { Link } from 'react-router-dom'
import { FaLeftLong } from 'react-icons/fa6'

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center max-w-screen-lg mx-auto flex-col py-10'>
                <Link to="/" className='flex items-center duration-300 hover:bg-[#D2B48C] my-2 w-fit px-3 py-1 rounded-md gap-3 font-rancho text-3xl text-shadow text-[#374151]'><FaLeftLong className='text-xl' /> Back to home</Link>
                <img src={notFound} alt="404 Not Found" />
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage