import React from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs"

const Navbar = () => {
    return (
        <nav className='py-10 mb-10 flex justify-between'>
            <h1 className='text-xl font-lexend'> dsCelestial </h1>
            <ul className='flex items-center'>
                <li><BsFillMoonStarsFill /></li>
            </ul>
        </nav>
    )
}

export default Navbar