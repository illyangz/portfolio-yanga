import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  return (
    <> 
     <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader&family=Orbit&display=swap"
          rel="stylesheet"
        />

    <div className="header-big-container">
    <nav className="navbar-container mobile-nav">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex space-x-4 ml-5 navbar-items font-Orbit">
            <p className="header">developedbymango</p>
          </div>
          <a className="mr-5 hover:text-[#FFA048]"
                href="/Hassan-Resume.pdf"
                target="_blank"> 
            <p className="header">resume</p>
          </a>
        </div>
      </div>
    </nav>
  </div></>
   

  );
};

export default Navbar;