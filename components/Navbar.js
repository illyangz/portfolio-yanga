import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="header-big-container">
      <nav className="navbar-container mobile-nav">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a className="flex space-x-4 ml-5 navbar-items hover:text-[FFA048]">
                developedbymango
            </a>
          </div>
          <a className="flex space-x-4 ml-5 navbar-items hover:text-[FFA048]">
                Resume
            </a>
          <div className="flex items-center mr-5">
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
