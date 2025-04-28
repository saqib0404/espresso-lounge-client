import React from 'react'
import navCup from "../../assets/nav.png";
import footerBg from "../../assets/footer.jpg"
import footerBg2 from "../../assets/footer2.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer>
            <div className=' pt-20 pb-10' style={{ backgroundImage: `url(${footerBg2})` }}>
                <div className='max-w-screen-xl mx-auto md:flex justify-around gap-16 items-center px-5 md:px-3'>

                    <div className='w-full'>
                        <div>
                            <img src={navCup} alt="Logo" className="h-24 mb-4" />
                            <h3 className='text-3xl mb-8 text-[#331A15] sm:text-5xl font-normal font-rancho text-shadow-lg'>Espresso Emporium</h3>
                            <p className='font-raleway text-lg mb-6'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                            <div className='text-[#331A15] flex text-3xl gap-4 my-6'>
                                <FaFacebook className='hover:text-[#E3B577] duration-300 hover:scale-125 cursor-pointer' />
                                <FaTwitter className='hover:text-[#E3B577] duration-300 hover:scale-125 cursor-pointer' />
                                <FaInstagram className='hover:text-[#E3B577] duration-300 hover:scale-125 cursor-pointer' />
                                <FaLinkedin className='hover:text-[#E3B577] duration-300 hover:scale-125 cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-2xl text-[#331A15] sm:text-4xl text-shadow-lg font-normal font-rancho my-6' >Get in Touch</h3>
                            <div className='w-full'>
                                <span className='flex items-center gap-2 my-2'><FaPhoneAlt /> +88 01533 333 333</span>
                                <span className='flex items-center gap-2 my-2'><MdEmail /> info@gmail.com</span>
                                <span className='flex items-center gap-2 my-2'><FaLocationDot /> 72, Wall street, King Road, Dhaka</span>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <form className='w-full'>
                            <h3 className='text-3xl text-[#331A15] sm:text-5xl font-normal font-rancho text-shadow-lg mb-10'>Contact Us</h3>
                            <input className='w-4/5 rounded px-4 my-2 py-2 border-2 border-white focus:border-[#E3B577] focus:outline-none' type="text" placeholder='Name' />
                            <br />
                            <input className='w-4/5 rounded px-4 my-2 py-2 border-2 border-white focus:border-[#E3B577] focus:outline-none' type="text" placeholder='Email' />
                            <br />
                            <input className='w-4/5 rounded px-4 mt-2 mb-6 py-2 border-2 border-white focus:border-[#E3B577] focus:outline-none' type="text" placeholder='Message' />
                            <br />

                            <span className='border-2 bg-[#E3B577]  duration-200 text-xl hover:bg-transparent border-[#331A15] py-2 px-5 font-rancho font-semibold cursor-pointer rounded-full'>Send Message</span>
                        </form>
                    </div>
                </div>
            </div>

            <div style={{ backgroundImage: `url(${footerBg})` }}>
                <p className='font-normal text-white text-center py-1 font-rancho text-2xl'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>


        </footer>
    )
}

export default Footer