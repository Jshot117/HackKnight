import React from 'react';
import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="p-4 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src={SwordLogo}
                        alt="SwordLogo"
                        className="w-16 h-auto md:w-24 md:h-auto  "
                    />
                    <h1 className="text-gold-300 font-extrabold text-4xl tracking-wide hover:text-gold-400 transform hover:scale-105 duration-200">
                        <a href={"/"}>Hack Knight</a>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="mt-4 md:mt-0">
                    <ul className="flex space-x-4 md:space-x-6 text-gray-300 text-lg font-semibold">
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/FAQ'}>FAQ</Link>
                        </li>
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/schedule'}>Schedule</Link>
                        </li>
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/our team'}>Our Team</Link>
                        </li>
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <Link to={'/sponsors'}>Sponsors</Link>
                        </li>
                        <li className="hover:text-gold-400 transform hover:scale-105 duration-200">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQ6cIO6YuTWfyfUZHcJx7c3UiRbZrRPaRJYRRusfFSgCDSVQ/viewform?usp=header">
                                <button> Register </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
