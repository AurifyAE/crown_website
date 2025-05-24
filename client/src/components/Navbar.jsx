import React from 'react'
import logo from '../assets/crownlogo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='sticky top-0 left-0 w-full z-50 flex justify-between items-center bg-[#7F4F20] text-white py-4 px-5 md:px-15 lg:px-30'>
            <img src={logo} alt="Crown logo" className='w-30 md:w-30' />
            <button className='w-40 h-12 bg-white text-[#7F4F20] border rounded-[20px]'>Live Rate</button>
            <div className='lg:flex justify-evenly items-center w-1/2 gap-3 hidden'>
                <button 
                    className='cursor-pointer '
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                >
                    About Us
                </button>
                <button 
                    className='cursor-pointer '
                    onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                >
                    Products
                </button>
                <button 
                    className='cursor-pointer '
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                    Services
                </button>
                <Link to="/account">
                    <button className="cursor-pointer">My Account</button>
                </Link>

                <Link to="/contact">
                    <button className="cursor-pointer">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}
