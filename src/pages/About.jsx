import React from "react";
import job from "../assets/job.jpg";
function About() {
  return (
    <div name="About" className="w-full h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-3xl font-bold inline border-b-4 border-pink-600">
          What can HireUp help you with?
        </p>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold ">
            <p className="mt-12">
              Find your next job, effortlessly.
              <hr className="inline bg-black h-1"></hr>
              <p className="text-sm mt-10 mb-5  text-gray-700  text-left">
                You deserve better than spammy job boards. In less than 5 mins,
                get matched to just the right opportunities you want. Connect
                with the actual hiring teams and get super fast responses back.
              </p>
              <div className="flex flex-row text-lg   sm:text-center">
                <button className="mr-10 w-[50vh] h-[8vh] bg-[#162962] hover:bg-[#223e92] text-2xl text-yellow-600 ">
                  Find Jobs Now
                </button>
                <button className="mr-10 w-[50vh]   border border-blue-900 text-2xl text-yellow-600 ">
                  Learn More
                </button>

                <br />
              </div>
            </p>
          </div>

          <div className="mt-10 p-12 ">
            <div className="h-[220px] w-[270px]  hover:scale-110 duration-500 ">
              <img
                src={job}
                alt="learn 1"
                className="rounded-xl h-full w-screen  object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
