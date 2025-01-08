import React from 'react';
import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";
import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaCalendar, FaUsers, FaHandshake, FaUserPlus } from 'react-icons/fa';

export function Header() {
    return (
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-2 shadow-lg fixed w-full top-0 z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src={SwordLogo}
                        alt="SwordLogo"
                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                    <h1 className="text-white font-extrabold text-3xl md:text-4xl tracking-wide hover:text-yellow-500 transition-all duration-200">
                        <Link to="/">Hack Knight</Link>
                    </h1>
                </div>

                {/* Navigation */}
                <nav className="">
                    <ul className="flex flex-wrap justify-center md:flex-nowrap items-center space-x-2 md:space-x-6">
                        <NavItem to="/FAQ" icon={<FaQuestionCircle />}>FAQ</NavItem>
                        <NavItem to="/schedule" icon={<FaCalendar />}>Schedule</NavItem>
                        <NavItem to="/our team" icon={<FaUsers />}>Our Team</NavItem>
                        <NavItem to="/sponsors" icon={<FaHandshake />}>Sponsors</NavItem>
                        <li>
                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfQ6cIO6YuTWfyfUZHcJx7c3UiRbZrRPaRJYRRusfFSgCDSVQ/viewform?usp=header"
                                className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-4 py-2 rounded-lg transition-all duration-200 font-semibold"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaUserPlus />
                                <span>Register</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}


const NavItem = ({ to, icon, children }) => (
    <li>
        <Link 
            to={to}
            className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-all duration-200 font-semibold"
        >
            <span className="text-lg">{icon}</span>
            <span>{children}</span>
        </Link>
    </li>
);