import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-700 via-indigo-800 to-purple-900 p-4 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 rounded-full border-2 border-gold-500 shadow-md"
                    />
                    <h1 className="text-gold-300 font-extrabold text-4xl tracking-wide hover:text-gold-400 transform hover:scale-105 duration-200">
                        <a href={"/"}>Hack Knight</a>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="mt-4 md:mt-0">
                    <ul className="flex space-x-6 text-gray-300 text-lg font-semibold">
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/schedule'}>schedule</Link>
                        </li>
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/prizes'}>prizes</Link>
                        </li>
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/register'}>register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
