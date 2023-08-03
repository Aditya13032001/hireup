import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Intern from "../assets/intern.png";
import Coursify from "../assets/coursify.png";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  const [show, setShow] = useState(false);
  const subscribe = () => {
    setShow(!show);
  };
  return (
    <div className="  bg-[#090b04] h-[70vh] w-full text-white rounded-t-3xl">
      <div
        className={
          show
            ? " w-full text-center mt-20 justify-center text-white "
            : "hidden"
        }
      >
        <p>Thank You Gor Subscribing our NewsLetter</p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {/*  */}
        <div className="w-full text-center mt-10  text-3xl ">
          <div className="w-full flex justify-center ">
            <img src={Logo} alt="logo" className="h-20" />
          </div>

          <p className="text-sm">
            TopHire is on a mission to make <br />
            it dead simple for leading Indian <br />
            startups to hire the top 2% of tech talent.
          </p>
          <div className="flex flex-row  justify-center text-xl lg:text-3xl mt-12">
            <a href="" rel="noreferrer">
              <BsInstagram className="ml-2 mr-2 cursor-pointer" />
            </a>
            <a href="" rel="noreferrer">
              <FiTwitter className="ml-2 mr-2 cursor-pointer" />
            </a>

            <a href="" rel="noreferrer">
              <BsFacebook className="ml-2 mr-2 cursor-pointer" />
            </a>
          </div>
        </div>

        {/*  */}

        <div className=" w-full text-left mt-10 justify-center ">
          <div className="mt-10">
            <h1 className="text-gray-300">CANDIDATES</h1>
            <ul>
              <li>For Candidates </li>
              <li>Candidate Sign Up</li>
              <li>Invite & Earn ₹15k </li>
              <li>Candidate FAQ</li>
            </ul>
          </div>
        </div>

        {/*  */}

        <div className=" w-full text-left mt-10 justify-center ">
          <div className="mt-10">
            <h1 className="text-gray-300">COMPANY</h1>
            <ul>
              <li>Careers</li>
              <li>Policy </li>
            </ul>
          </div>
        </div>

        {/*  */}

        <div className=" w-full text-left mt-10 justify-center ">
          <div className="mt-10">
            <h1 className="text-gray-300">EMPLOYERS</h1>
            <ul>
              <li>For Employers </li>
              <li>Employers Sign Up</li>
              <li>Employers FAQ</li>
            </ul>
          </div>
        </div>
        {/*  */}

        <div className=" w-full text-left mt-10 justify-center ">
          <div className="mt-10">
            <h1 className="text-gray-300">Partners</h1>
            <br />
            <div className="w-full flex items-start">
              <ul>
                <li>
                  <img src={Intern} alt="logo" className="h-10 rounded-lg" />
                </li>
                <li>
                  <img
                    src={Coursify}
                    alt="logo"
                    className="h-20 w-full ml-[-2vh]"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <form
        className={
          show
            ? "hidden"
            : "flex flex-row w-full text-center mt-10 justify-center "
        }
        method="POST"
      >
        <input
          className="w-[60vh] text-black pl-6 placeholder:font-bold placeholder:text-lg"
          type="email"
          placeholder=" Subscribe to our NewsLetter"
          name="email"
        />
        <button
          className=" text-xl p-3 ml-3  w-40 bg-lime-800 hover:bg-gray-700 hover:text-white rounded-sm"
          onClick={subscribe}
        >
          Subscribe
        </button>
      </form>
      <div>
        <p className="hidden lg:block w-full text-center mt-20 justify-center ">
          © 2023 HireUp India. Powered by HireUp India.
        </p>
      </div>
    </div>
  );
}

export default Footer;
