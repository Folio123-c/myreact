import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (

        <nav className="bg-cyan-50">
            <div className= "bg-black p-0.5  flex items-baseline space-x-4 ">
                <div className=" text-white px-3 py-2 rounded-md text-sm font-medium">Free standard shipping order over $100</div>
                <div className=" text-white px-3 py-2 rounded-md text-sm font-medium">My account</div>
                <div className=" text-white">EN</div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <a href="/" className="text-white font-bold text-xl p-2"><img src={Logo} alt=""/></a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 justify-between">
                            <Link to="/" className="hover:bg-cyan-500 hover:text-white text-titans px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/allproduct" className="hover:bg-cyan-500 hover:text-white text-titans px-3 py-2 rounded-md text-sm font-medium">Shop</Link>
                            <Link to="/" className="hover:bg-cyan-500 hover:text-white text-titans px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
                            <Link to="/" className="hover:bg-cyan-500 hover:text-white text-titans px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link to="/signup" className="hover:bg-cyan-500 hover:text-white text-titans px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
                            <Link to="/LoginForm" className="hover:bg-cyan-500 hover:text-white text-titans px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-titans hover:text-white hover:bg-cyan-500 focus:outline-none focus:bg-titans focus:text-cyan-500">
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="hover:bg-cyan-500 text-titans block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link to="/allproduct" className="hover:bg-cyan-500 text-titans block px-3 py-2 rounded-md text-base font-medium">Shop</Link>
                    <Link to="/" className="hover:bg-cyan-500 text-titans block px-3 py-2 rounded-md text-base font-medium">Categories</Link>
                    <Link to="/" className="hover:bg-cyan-500 text-titans block px-3 py-2 rounded-md text-base font-medium">About</Link>
                    <Link to="/signup" className="hover:bg-cyan-500 text-titans block px-3 py-2 rounded-md text-base font-medium">Signup</Link>
                    <Link to="/LoginForm" className="hover:bg-cyan-500 text-titans block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
