import React, { useState } from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <h1 className="w-[300px] text-3xl font-bold text-black z-0">EcoBill</h1>
      <div className="flex-grow">
        <ul className="flex justify-center z-10">
          <li className="p-4">Download</li>
          <li className="p-4">Support</li>
          <li className="p-4">About Us</li>
        </ul>
      </div>
      <div className="w-[300px] flex">
        <a href="/Login">
          {" "}
          <button className="bg-[#33836f] w-[130px] h-[40px] rounded-md my-6 py-3 text-white flex items-center justify-center ml-auto">
            Sign In
          </button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
