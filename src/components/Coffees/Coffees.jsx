import React, { useEffect, useState } from 'react'
import { BsCupHot } from 'react-icons/bs'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import coffeeBg from "../../assets/cofeeBg.png"

const Coffees = () => {
    const [coffeeData, setCoffeeData] = useState([])
    useEffect(() => {
        fetch("./coffee.json")
            .then(res => res.json())
            .then(data => setCoffeeData(data))
    }, [])
    console.log(coffeeData);



    return (
        <section className="relative py-20 min-h-screen overflow-hidden">
  
        {/* Background */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-80 z-0"
          style={{ backgroundImage: `url(${coffeeBg})` }}
        ></div>
      
        {/* Main Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center gap-5 mb-5 relative">
            <span className="font-raleway text-lg">--- Sip & Savor ---</span>
            <h3 className="text-5xl font-semibold text-shadow-lg font-rancho">Our Popular Products</h3>
            <Link to={"add-coffee"} className="text-white font-normal hover:bg-white hover:text-black text-shadow duration-300 font-rancho text-xl border-2 border-black flex items-center gap-2 px-3 py-1 rounded w-fit bg-[#E3B577]">
              Add Coffee <BsCupHot />
            </Link>
          </div>
      
          {/* Coffees */}
          {
            !coffeeData ?
              <div className="text-center my-20">
                <span className="loading loading-dots loading-xl"></span>
              </div>
            :
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {coffeeData.map((coffee) => (
                  <div key={coffee.id} className="flex items-center bg-base-200 rounded-lg shadow-md p-4">
                    
                    <div className="w-1/3">
                      <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600">Image</span>
                      </div>
                    </div>
      
                    <div className="w-2/3 pl-4 flex justify-between items-center space-y-2">
                      <div className="font-raleway space-y-2">
                        <h2 className="text-xl font-bold">{coffee.name}</h2>
                        <p><span className="font-semibold">Chef:</span> {coffee.chef}</p>
                        <p><span className="font-semibold">Price: </span>{coffee.price} Taka</p>
                      </div>
      
                      <div className="flex items-center flex-col gap-3 mt-3">
                        <Link className="text-white duration-300 text-sm px-3 py-2 hover:scale-110 hover:bg-[#cda75f] rounded bg-[#E3B577]">
                          <FaEye />
                        </Link>
                        <Link className="text-white duration-300 text-sm px-3 py-2 hover:scale-110 hover:bg-[#5a5758] rounded bg-[#3C393B]">
                          <FaEdit />
                        </Link>
                        <Link className="text-white duration-300 text-sm px-3 py-2 hover:scale-110 hover:bg-[#d93b38] rounded bg-[#EA4744]">
                          <FaTrash />
                        </Link>
                      </div>
      
                    </div>
      
                  </div>
                ))}
              </div>
          }
      
        </div>
      
      </section>
      
    )
}

export default Coffees