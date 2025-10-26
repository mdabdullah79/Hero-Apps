import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-7">
      <div className="m-6">
        <h1 className="text-6xl font-extrabold text-center mb-4">
          We Build <br />{" "}
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="text-[16px] font-light">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-2 m-5 items-center justify-center place-items-center">
          <a href="https://play.google.com/store/games?hl=en" target="blank">
            <div className="flex items-center bg-white border rounded-md px-3 py-2 shadow-sm">
              <img
                className="w-[45px] h-[45px] rounded-full mr-3 object-cover"
                src="./appstore.jpg"
                alt="Google Play"
              />
              <p className="text-[16px] font-bold">Google Play</p>
            </div>
          </a>

          <a href="https://www.apple.com/app-store/" target="blank">
            <div className="flex items-center bg-white border rounded-md px-3 py-2 shadow-sm">
              <img
                className="w-[45px] h-[45px] rounded-full mr-3 object-cover"
                src="./appstore.png"
                alt="App Store"
              />
              <p className="text-[16px] font-bold">App Store</p>
            </div>
          </a>
        </div>
      </div>
      <img src="/hero.png" alt="" />
      <div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full p-10 h-[350px]">
        <h1 className="text-[48px] text-center text-white font-bold mb-8">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[16px] text-white font-light">Total Downloads</p>
            <h2 className="text-6xl font-extrabold text-white m-3">29.6M</h2>
            <p className="text-[16px] text-white font-light mb-2.5">
              21% more than last month
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[16px] text-white font-light">Total Downloads</p>
            <h2 className="text-6xl font-extrabold text-white m-3">29.6M</h2>
            <p className="text-[16px] text-white font-light mb-2.5">
              21% more than last month
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-[16px] text-white font-light">Total Downloads</p>
            <h2 className="text-6xl font-extrabold text-white m-3">29.6M</h2>
            <p className="text-[16px] text-white font-light mb-2.5">
              21% more than last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
