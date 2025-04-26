import React from 'react'
import navCup from "../../assets/nav.png";
import navBg from "../../assets/navbg.jpg";

const Navbar = () => {
    return (
        <nav
            className="bg-cover bg-center h-28 flex items-center justify-center"
            style={{ backgroundImage: `url(${navBg})` }}
        >
            <div className="flex items-center gap-2">
                <img src={navCup} alt="Logo" className="h-16" />
                <p className="text-white text-3xl sm:text-5xl font-normal font-rancho">Espresso Emporium</p>
            </div>
        </nav>
    )
}

export default Navbar