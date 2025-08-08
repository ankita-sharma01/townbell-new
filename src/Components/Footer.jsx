// Footer.jsx
import React from 'react';
import siteLogo from "../Assets/TownLogo/logo.png";
import { FaArrowUp, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const  navigate = useNavigate();
  return (
    <div className="footer w-full mt-0 px-[10px] pb-[40px] md:px-0 flex flex-col items-center relative">
      <div className="footer-inner relative overflow-hidden w-[var(--box-width)] lg:p-[60px] p-[10px] pb-[15px] md:p-[20px] flex flex-col items-center gap-[10px] rounded-[40px]">
        <div className="footer-top w-[95%] lg:w-full flex flex-col items-center gap-[30px]">
          <img
          onClick={()=>navigate("/")}
            className="w-[125px] lg:w-[125px] my-[15px]"
            src={siteLogo}
            alt="townbell"
          />
          <div className="w-full flex flex-col items-center p-[18px] md:px-[58px] md:py-[47px] border-[1px] border-solid border-[#ffffff4d] rounded-[40px] bg-[#ffffff0a]">
            <h2 className="archivo text-[30px] mb-2 md:text-[40px] lg:text-[60px] text-white font-bold leading-[1em] text-center w-[100%] lg:w-[80%]">
              Your Trusted Real Estate Builder in Tricity
            </h2>
    
              <div className="footer-bottom w-[95%] lg:w-full flex flex-wrap gap-[10px]">
          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="https://x.com/Townbell1" target='_blank' rel="noopener noreferrer">
            <span className="flex items-center gap-[10px] pl-[20px] bg-[#ffffff12]">
              <FaTwitter />
              Twitter
            </span>
            <span className="flex items-center justify-center bg-[#ffffff12]">
              <FaArrowUp />
            </span>
          </a>

          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="https://www.linkedin.com/company/town-bell/?viewAsMember=true" target='_blank' rel="noopener noreferrer">
            <span className="flex items-center gap-[10px] pl-[20px] bg-[#ffffff12]">
              <FaLinkedin />
              Linkedin
            </span>
            <span className="flex items-center justify-center bg-[#ffffff12]">
              <FaArrowUp />
            </span>
          </a>

          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="https://www.youtube.com/@Town-Bell" target='_blank'  rel="noopener noreferrer">
            <span className="flex items-center gap-[10px] pl-[20px] bg-[#ffffff12]">
              <FaYoutube />
              Youtube
            </span>
            <span className="flex items-center justify-center bg-[#ffffff12]">
              <FaArrowUp />
            </span>
          </a>

          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="https://www.instagram.com/town_bell/?hl=en" target='_blank' rel="noopener noreferrer">
            <span className="flex items-center gap-[10px] pl-[20px] bg-[#ffffff12]">
              <FaInstagram />
              Instagram
            </span>
            <span className="flex items-center justify-center bg-[#ffffff12]">
              <FaArrowUp />
            </span>
          </a>
        </div>
          </div>
        </div>
      
      
      </div>

      {/* Copyright Section */}
      <div className="copyright w-[var(--box-width)] mt-[20px] flex flex-col md:flex-row items-center justify-between gap-[10px]">
        <p className="inter text-[12px] text-[#ffffff99] font-light leading-[1em]">
          © {new Date().getFullYear()} Townbell. All rights reserved.
        </p>
        <div className="flex items-center gap-[20px]">
          <a className="inter text-[12px] text-[#ffffff99] hover:text-[#ed991d] font-light leading-[1em]" href="/">
            Privacy Policy
          </a>
          <a className="inter text-[12px] text-[#ffffff99] hover:text-[#ed991d] font-light leading-[1em]" href="/">
            Terms of Service
          </a>
          <a className="inter text-[12px] text-[#ffffff99] hover:text-[#ed991d] font-light leading-[1em]" href="/">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;