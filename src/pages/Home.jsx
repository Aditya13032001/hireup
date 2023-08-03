import React from "react";
import CompLogo from "../assets/com.jpg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Home = () => {
  return (
    <div name="Home" className="w-full h-full ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto mt-20 px-8   h-full">
        <h1 className="text-3xl text-center lg:w-[139vh] lg:text-5xl font-bold uppercase  ">
          Find your next top tech job in 1 week.
        </h1>
        <h2 className="text-lg text-center mt-6 font-bold text-gray-800">
          Look beyond the obvious. Use HireUp to easily get discovered by
          awesome companies and get referred to job positions very few know
          about.
        </h2>
        <div>
          <button className="mt-10 mb-10 ml-[30vh] lg:ml-[50vh] bg-[#162962] hover:bg-[#223e92] text-2xl text-yellow-600 font-black h-[10vh] w-[30vh]">
            Apply Now
          </button>
        </div>

        <div className="grid grid-cols-3  gap-2 mt-2  ">
          {/* 1 */}
          <div className="h-[30vh] w-[30vh] lg:w-full text-center">
            <div className=" h-24 w-24 rounded-full border hover:border hover:border-black ml-12 lg:ml-20">
              <img className="h-20 ml-2 mt-[1vh]" src={icon3} alt="step1" />
            </div>
            <h1 className="font-bold text-xl mt-4">STEP 1: COMPLETE PROFILE</h1>
            <p className=" text-center mt-8 font-black">
              Companies start sending interview requests. Talk to only the ones
              you like.
            </p>
          </div>

          {/* 2 */}
          <div className="h-[30vh] w-[30vh] lg:w-full text-center">
            <div className=" h-24 w-24 rounded-full border hover:border hover:border-black ml-12 lg:ml-20">
              <img className="h-20 ml-2 mt-2" src={icon1} alt="step1" />
            </div>
            <h1 className="font-bold text-xl mt-4">
              STEP 2: RECEIVE JOB OFFERS
            </h1>
            <p className=" text-center mt-8 font-black">
              Compare your offers and accept the best one. Hired!
            </p>
          </div>

          {/* 3 */}
          <div className="h-[30vh] w-[30vh] lg:w-full text-center">
            <div className=" h-24 w-24 rounded-full border hover:border hover:border-black ml-12 lg:ml-20">
              <img className="h-20 ml-2 mt-2" src={icon2} alt="step1" />
            </div>
            <h1 className="font-bold text-xl mt-4">STEP 3: ACCEPT DREAM JOB</h1>
            <p className=" text-center mt-8 font-black">
              Once you are approved, we showcase you to leading Indian
              technology startups
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[15vh] mb-[15vh] text-center">
        <h1 className="text-3xl font-black border border-b-2 border-black inline">
          LEADING COMPANIES ON HIREUP
        </h1>
        <img src={CompLogo} alt=" " className="mt-5 lg:ml-[55vh] shadow-2xl" />
      </div>
    </div>
  );
};

export default Home;
