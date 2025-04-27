import React from 'react'
import banner from "../../assets/banner.png";
import ban1 from "../../assets/icons/1.png"
import ban2 from "../../assets/icons/2.png"
import ban3 from "../../assets/icons/3.png"
import ban4 from "../../assets/icons/4.png"

const Banner = () => {
    return (
        <section>
            <div className="h-[70vh] bg-cover bg-center flex items-center md:justify-end md:pr-20 px-4"
                style={{ backgroundImage: `url(${banner})` }}>
                <div className="text-white md:text-left space-y-8 text-center">
                    <h2 className="text-3xl sm:text-5xl font-normal font-rancho">
                        Would you like a Cup of Delicious Coffee?
                    </h2>
                    <p className="font-raleway">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! <br /> Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="bg-[#E3B577] border-2 border-[#E3B577] hover:text-white hover:bg-transparent duration-200 hover:border-white text-black text-xl px-5 py-2 font-rancho">
                        Learn More
                    </button>
                </div>
            </div>

            <div className='bg-[#ECEAE3]'>
                <div className=' md:flex gap-5 w-8/12 mx-auto py-10'>
                    <div className='space-y-3 my-2'>
                        <img src={ban1} alt="" />
                        <h3 className='font-rancho text-xl'>Awesome Aroma</h3>
                        <p className='font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='space-y-3 my-2'>
                        <img src={ban2} alt="" />
                        <h3 className='font-rancho text-xl'>High Quality</h3>
                        <p className='font-raleway'>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='space-y-3 my-2'>
                        <img src={ban3} alt="" />
                        <h3 className='font-rancho text-xl'>Pure Grades</h3>
                        <p className='font-raleway'>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='space-y-3 my-2'>
                        <img src={ban4} alt="" />
                        <h3 className='font-rancho text-xl'>Proper Roasting</h3>
                        <p className='font-raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner