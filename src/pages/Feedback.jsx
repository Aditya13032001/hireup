import React from "react";
import mi from "../assets/mi.png";
import swig from "../assets/swig.png";
import cred from "../assets/cred.png";
import { BiSolidQuoteLeft } from "react-icons/bi";

function FeedBack() {
  return (
    <div className="h-[50vh] w-full mt-[8vh] grid grid-cols-3 gap-0 mb-32 text-black text-xl font-bold">
      {/* Crad1 */}
      <div className=" text-center m-4 p-4 border-2 border-black  shadow-2xl hover:scale-110 transition-all duration-300">
        <BiSolidQuoteLeft className="text-4xl bg-slate-300 rounded-full  p-2" />
        <div>
          <p>
            HireUp was able to make the process really easy. They were able to
            schedule interviews with the best companies in the industry and
            drove the entire process smoothly.
          </p>
        </div>
        <div className="flex flex-row items-center  justify-center w-full mt-10 p-3 rounded-lg">
          <img
            src={cred}
            alt="team pic "
            className="h-10 rounded-full w-10 object-cover"
          />
          <h1 className="ml-3">KARAN KUMARAN</h1>
        </div>
      </div>
      {/* Crad2 */}

      <div className=" text-center  m-4 p-4 border-2 border-black  shadow-2xl hover:scale-110 transition-all duration-300">
        <BiSolidQuoteLeft className="text-4xl bg-slate-300 rounded-full p-2" />
        <div>
          <p>
            A friend of mine told me about HireUp when I started looking for new
            opportunities. The HireUp team was extremely helpful, professional
            and quick with everything.
          </p>
        </div>
        <div className="flex flex-row items-center  justify-center w-full mt-10 p-3 rounded-lg">
          <img
            src={swig}
            alt="team pic "
            className="h-10 rounded-full w-10 object-cover"
          />
          <h1 className="ml-3">NAMAN SHAH</h1>
        </div>
      </div>
      {/* Crad3 */}

      <div className=" text-center  m-4 p-4 border-2 border-black  shadow-2xl hover:scale-110 transition-all duration-300">
        <BiSolidQuoteLeft className="text-4xl bg-slate-300 rounded-full  p-2" />
        <div>
          <p>
            Compared to other job portals, what stood out for me was that
            HireUp, on top of providing really good opportunities, helped me in
            negotiations with the companies too.
          </p>
        </div>
        <div className="flex flex-row items-center  justify-center w-full mt-10 p-3 rounded-lg">
          <img
            src={mi}
            alt="team pic "
            className="h-10 rounded-full w-10 object-cover"
          />
          <h1 className="ml-3">ANURAG CHEBIUM</h1>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
