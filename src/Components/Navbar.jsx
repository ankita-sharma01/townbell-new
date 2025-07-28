// Navbar.jsx
import './../style.css';
import './../output.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-[var(--full-width)] flex items-center justify-center fixed top-[30px] z-[9999]">
      <header className="w-[85%] lg:w-[950px] rounded-[44px] py-[6px] pl-[30px] pr-[30px] bg-[#fff] bg-opacity-50 transition-all duration-300 ease-in-out overflow-hidden">
        <div className="header-top flex items-center justify-between">
          <div className="logo">
            <img
              className="lg:w-[130px] w-[100px]"
              src="./Assets/TownLogo/Townlogo.png"
              alt="townbell"
            />
          </div>
          <div className="links flex items-center gap-[40px]">
            <ul className="hidden lg:flex items-center nav-menu">
              <li className="px-[16px] py-[14px] rounded-[50px]">
                <a
                  className="syne flex text-[16px] font-semibold leading-[1em] text-[#000]"
                  href="index.html"
                >Home</a>
              </li>
              <li className="px-[16px] py-[14px] rounded-[50px]">
                <a
                  className="syne flex text-[16px] font-semibold leading-[1em] text-[#000]"
                  href="about.html"
                >About</a>
              </li>
              <li className="px-[16px] py-[14px] rounded-[50px]">
                <a
                  className="syne flex text-[16px] font-semibold leading-[1em] text-[#000]"
                  href="projects.html"
                >Projects</a>
              </li>
              <li className="px-[16px] py-[14px] rounded-[50px]">
                <a
                  className="syne flex text-[16px] font-semibold leading-[1em] text-[#000]"
                  href="blogs.html"
                >Blogs</a>
              </li>
              <li className="px-[16px] py-[14px] rounded-[50px]">
                <a
                  className="syne flex text-[16px] font-semibold leading-[1em] text-[#000]"
                  href="contact.html"
                >Contact us</a>
              </li>
            </ul>
            <button
              className="syne text-[#0d0d0d] bg-white text-[16px] leading-[1em] font-bold px-[33px] py-[17px] items-center gap-[7px] rounded-[50px] cursor-pointer hidden lg:flex"
            >
              <div
                className="red-circle w-[12px] h-[12px] bg-[#FF000D] rounded-full"
              ></div>
              <span>Let's Talk</span>
            </button>
            <div className="hamburger lg:hidden">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
        {/* Mobile menu items */}
        <div
          className="mobile-menu flex flex-col items-center w-full gap-4 max-h-0 opacity-0"
        >
          <ul className="flex flex-col items-center w-full gap-2">
            <li className="px-[16px] py-[14px] rounded-[50px] w-full text-center">
              <a
                className="syne flex justify-center text-[16px] font-semibold leading-[1em] text-[#6e183c]"
                href="#"
              >Home</a>
            </li>
            <li className="px-[16px] py-[14px] rounded-[50px] w-full text-center">
              <a
                className="syne flex justify-center text-[16px] font-semibold leading-[1em] text-[#6e183c]"
                href="#"
              >Projects</a>
            </li>
            <li className="px-[16px] py-[14px] rounded-[50px] w-full text-center">
              <a
                className="syne flex justify-center text-[16px] font-semibold leading-[1em] text-[#6e183c]"
                href="#"
              >About</a>
            </li>
            <li className="px-[16px] py-[14px] rounded-[50px] w-full text-center">
              <a
                className="syne flex justify-center text-[16px] font-semibold leading-[1em] text-[#6e183c]"
                href="#"
              >Blogs</a>
            </li>
            <li className="px-[16px] py-[14px] rounded-[50px] w-full text-center">
              <a
                className="syne flex justify-center text-[16px] font-semibold leading-[1em] text-[#6e183c]"
                href="#"
              >Contact us</a>
            </li>
          </ul>
          <button
            className="syne text-[#0d0d0d] bg-white text-[16px] leading-[1em] font-bold px-[33px] py-[17px] rounded-[50px] cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;