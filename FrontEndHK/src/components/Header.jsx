import React from "react";
import { Link, useLocation } from "react-router-dom";
import SwordLogo from "../assets/sword_hack_knight_transparentBG.png";
import {
  FaQuestionCircle,
  FaCalendar,
  FaUsers,
  FaHandshake,
  FaUserPlus,
} from "react-icons/fa";

export function Header() {
  const location = useLocation();

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-2 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 ml-20 md:ml-24">
          <Link to="/about">
            <img
              src={SwordLogo}
              alt="SwordLogo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </Link>
          <h1 className="text-white font-extrabold text-3xl md:text-4xl tracking-wide hover:text-yellow-500 transition-all duration-200">
            <Link to="/">Hack Knight</Link>
          </h1>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center md:flex-nowrap items-center space-x-2 md:space-x-6">
            <NavItem
              to="/FAQ"
              icon={<FaQuestionCircle />}
              activePath={location.pathname}
            >
              FAQ
            </NavItem>
            <NavItem
              to="/schedule"
              icon={<FaCalendar />}
              activePath={location.pathname}
            >
              Schedule
            </NavItem>
            <NavItem
              to="/our_team"
              icon={<FaUsers />}
              activePath={location.pathname}
            >
              Our Team
            </NavItem>
            <NavItem
              to="/sponsors"
              icon={<FaHandshake />}
              activePath={location.pathname}
            >
              Sponsors
            </NavItem>
            {/* <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfQ6cIO6YuTWfyfUZHcJx7c3UiRbZrRPaRJYRRusfFSgCDSVQ/viewform?usp=header"
                className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-4 py-2 rounded-lg transition-all duration-200 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaUserPlus />
                <span>Register</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const NavItem = ({ to, icon, children, activePath }) => {
  const isActive = activePath === to;

  return (
    <li>
      <Link
        to={to}
        className={`flex items-center space-x-2 ${
          isActive ? "text-yellow-500" : "text-gray-300 hover:text-yellow-500"
        } transition-all duration-200 font-semibold`}
      >
        <span className="text-lg">{icon}</span>
        <span>{children}</span>
      </Link>
    </li>
  );
};
