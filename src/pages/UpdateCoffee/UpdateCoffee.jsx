import React from 'react'
import { FaLeftLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import addingBg from "../../assets/addingBg.png"

const AddCoffee = () => {
    return (
        <section style={{ backgroundImage: `url(${addingBg})` }}>
            <div className='max-w-screen-xl mx-auto py-10 px-2 font-raleway' >
                <Link to="/" className='flex items-center duration-300 hover:bg-[#D2B48C] w-fit px-3 py-1 rounded-md gap-3 font-rancho text-3xl text-shadow text-[#374151]'><FaLeftLong className='text-xl' /> Back to home</Link>
                <div className='bg-[#F4F3F0] py-10 md:py-20 md:px-36 px-5 rounded my-10'>
                    <h1 className='text-center text-4xl text-[#374151] font-rancho font-semibold text-shadow mb-7'>Update Existing Coffee Details</h1>
                    <p className='mb-7 text-sm max-w-screen-md mx-auto text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form className="max-w-screen-lg mx-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-2 font-semibold">Name</label>
                                <input type="text" placeholder="Enter coffee name" className="input w-full border-white focus:border-[#E3B577] focus:outline-none border-2" />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">Chef</label>
                                <input type="text" placeholder="Enter coffee chef" className="input w-full border-white focus:border-[#E3B577] focus:outline-none border-2" />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">Supplier</label>
                                <input type="text" placeholder="Enter coffee supplier" className="input w-full border-white focus:border-[#E3B577] focus:outline-none border-2" />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">Taste</label>
                                <input type="text" placeholder="Enter coffee taste" className="input w-full border-white focus:border-[#E3B577] focus:outline-none border-2" />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">Category</label>
                                <input type="text" placeholder="Enter coffee category" className="input w-full border-white focus:border-[#E3B577] focus:outline-none border-2" />
                            </div>
                            <div>
                                <label className="block mb-2 font-semibold">Details</label>
                                <input type="text" placeholder="Enter coffee details" className="input w-full border-white focus:border-[#E3B577] focus:outline-none border-2" />
                            </div>
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold">Photo</label>
                            <input type="text" placeholder="Enter photo URL" className="input w-full border-white focus:border-[#E3B577] focus:outline-none border-2" />
                        </div>

                        <button type="submit" className="btn bg-[#D2B48C] w-full text-black border-2 border-black font-rancho text-xl font-light hover:bg-[white] duration-300">
                            Update Coffee Details
                        </button>
                    </form>

                </div>

            </div>
        </section>
    )
}

export default AddCoffee