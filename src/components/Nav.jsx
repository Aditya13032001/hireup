import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-scroll";

import Logo from "../assets/logo.png";

const Nav = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => setnav(!nav);
  return (
    <div className="relative w-full h-[80px] flex justify-between items-center px-4   bg-[#162962] font-bold font-8xl  rounded-b-3xl ">
      <div>
        <Link to="Home" smooth={true} duration={500}>
          <p className="text-black font-bold text-4xl cursor-pointer">
            <img src={Logo} alt="logo" style={{ height: "100px" }} />
          </p>
        </Link>
      </div>
      {/* Navbar */}

      <ul className="hidden md:flex text-white flex items-center">
        <li>
          <Link to="Home" smooth={true} duration={500}>
            <input
              type="text"
              placeholder="Home"
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border  border-white bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-yellow-600 focus:pl-16 focus:pr-4"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-yellow-600 peer-focus:stroke-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>{" "}
        </li>
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="About" smooth={true} duration={500}>
            For-Employeers
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={500}>
            Find Jobs
          </Link>
        </li>

        <li>
          <Link to="Testimonals" smooth={true} duration={500}>
            Refer & Earn
          </Link>
        </li>
        <li className="flex items-center text-4xl">
          <Link to="Contact" smooth={true} duration={500}>
            <CgProfile />
          </Link>
        </li>
      </ul>

      {/* Humburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer text-3xl text-white"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile ui */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#162962]  font-black flex flex-col justify-center items-center "
        }
      >
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>{" "}
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="About" smooth={true} duration={500}>
            For-Employeers
          </Link>
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
            Find Jobs
          </Link>
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link
            onClick={handleClick}
            to="Testimonals"
            smooth={true}
            duration={500}
          >
            Refer & Earn
          </Link>
        </li>
        <li className="py-4 text-4xl hover:bg-slate-100 transition">
          <Link onClick={handleClick} to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
