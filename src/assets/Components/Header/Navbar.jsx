import { Github } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";
const Navbar = () => {
  const [activePage,setactivePage] = useState();
  const links = (
    <>
      <Link to='/' onClick={()=>setactivePage("home")}>
      <li>
        <a className={` ${activePage==="home" && "border-b-3 border-blue-600 text-blue-500 font-bold"}`}>Home</a>
      </li>
      </Link>
      <Link to='/apps' onClick={()=>setactivePage("apps")}>
      <li>
        <a className={`${activePage=== "apps" &&  "border-b-3 border-blue-600 text-blue-500 font-bold"}`}>Apps</a>
      </li>
      </Link>

      <Link to={'/installation'} onClick={()=>setactivePage("install")}>
      <li>
        <a className={`${activePage=== "install" &&  "border-b-3 border-blue-600 text-blue-500 font-bold"}`}>Installation</a>
      </li>
      </Link>
      
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-7">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to='/' >
            <li>
              <a>Home</a>
            </li>
            </Link>

            <Link to='/apps' >
            <li>
              <a>Apps</a>
            </li>
            </Link>

            <Link to={'/installation'}>
            <li>
              <a>Installation</a>
            </li>
            </Link>
          </ul>
        </div>
       <Link to={'/'}> <div className="flex items-center">
          <img src="/logo.png" className="w-10" />
          <h2 className="text-blue-800 font-bold ml-3">HERO.IO</h2>
        </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/mdabdullah79/Hero-Apps" target="blank" className="btn border-none text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <Github />
          Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
