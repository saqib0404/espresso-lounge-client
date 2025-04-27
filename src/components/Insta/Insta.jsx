import React from 'react'
import coffee1 from "../../assets/cups/cup1.png"
import coffee2 from "../../assets/cups/cup2.png"
import coffee3 from "../../assets/cups/cup3.png"
import coffee4 from "../../assets/cups/cup4.png"
import coffee5 from "../../assets/cups/cup5.png"
import coffee6 from "../../assets/cups/cup6.png"
import coffee7 from "../../assets/cups/cup7.png"
import coffee8 from "../../assets/cups/cup8.png"

const Insta = () => {
    const coffeeImages = [
        coffee1, coffee2, coffee3, coffee4, coffee5, coffee6, coffee7, coffee8,
    ];

    return (
        <div className="flex flex-col items-center py-10">
            <div className="text-center mb-8">
                <p className="text-gray-500 font-raleway my-2">Follow Us Now</p>
                <h2 className="text-5xl font-semibold font-rancho text-brown-800 text-shadow-lg text-[#331A15]">Follow on Instagram</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {coffeeImages.map((src, index) => (
                    <div key={index} className="overflow-hidden shadow-md hover:shadow-lg transition">
                        <div className="p-0">
                            <img src={src} alt={`Coffee ${index + 1}`} className="w-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Insta