// Footer.jsx
import React from 'react';
import siteLogo from "../Assets/TownLogo/logo.png";
import { FaArrowUp, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer w-full mt-[20px] px-[10px] pb-[60px] md:px-0 flex flex-col items-center relative">
      <div className="footer-inner relative overflow-hidden w-[var(--box-width)] p-[60px] pb-[15px] md:p-[20px] flex flex-col items-center gap-[10px] rounded-[40px]">
        <div className="footer-top w-[95%] lg:w-full flex flex-col items-center gap-[30px]">
          <img
            className="w-[150px] lg:w-[150px] my-[15px]"
            src={siteLogo}
            alt="townbell"
          />
          <div className="w-full flex flex-col items-center p-[30px] md:px-[58px] md:py-[47px] border-[1px] border-solid border-[#ffffff4d] rounded-[40px] bg-[#ffffff0a]">
            <h2 className="syne text-[30px] md:text-[40px] lg:text-[60px] text-white font-bold leading-[1em] text-center w-[100%] lg:w-[80%]">
              Your Trusted Real Estate Builder in Tricity
            </h2>
            <h5 className="syne text-[16px] md:text-[20px] lg:text-[26px] text-[#ffffffcc] text-center font-semibold leading-[1.2em] md:leading-[1em] mt-[24px] mb-[51px] w-[80%] lg:w-full">
              Got questions, project ideas, or just want to say hi? We're all ears!
            </h5>
            <button className="syne text-[16px] md:text-[17px] lg:text-[20px] leading-[1em] font-bold text-white border-[1px] border-solid border-[#fff] rounded-[50px] w-full md:w-[651px] flex flex-row items-center justify-center gap-[5px]">
              <span className="btn-text pl-[10px] py-[25px] md:py-[30px] md:pl-[30px]">Let's Collaborate</span>
              <span className="btn-icon">
                <FaArrowUp />
              </span>
            </button>
          </div>
        </div>
        <div className="footer-middle w-[95%] lg:w-full flex flex-col lg:flex-row gap-[10px]">
          <div className="left w-[100%] lg:w-[49.5%] flex flex-col items-start gap-[49px] p-[30px] md:py-[38px] md:px-[50px] bg-[#ffffff0a] border-[1px] border-solid border-[#ffffff4d] rounded-[40px]">
            <div className="left-top w-full flex flex-col items-start gap-[25px]">
              <p className="inter tetx-[16px] lg:text-[18px] font-light text-white leading-[1em]">
                <span className="font-bold">Address:</span> Kharar–Kurali Highway, Punjab
              </p>
              <p className="inter tetx-[16px] lg:text-[18px] font-light text-white leading-[1em]">
                <span className="font-bold">Email:</span> info@townbell.in
              </p>
              <p className="inter tetx-[16px] lg:text-[18px] font-light text-white leading-[1em]">
                <span className="font-bold">Phone:</span> (416) 555-1234
              </p>
              <p className="inter tetx-[16px] lg:text-[18px] font-light text-white leading-[1em]">
                <span className="font-bold">Business Hours:</span> Monday - Saturday : 9am to 8pm
              </p>
            </div>
            <div className="left-bottom w-full flex flex-col items-start gap-[15px]">
              <h5 className="syne text-[16px] lg:text-[18px] text-[#ffffffcc] font-semibold leading-[1em]">
                Subscribe to our newsletter
              </h5>
              <form className="w-full flex flex-col lg:flex-row lg:items-center gap-[7px]">
                <input
                  className="w-full lg:w-[70%] bg-[#ffffff1a] p-[15px] text-[16px] border-none outline-none rounded-[50px]"
                  type="email"
                  placeholder="name@email.com"
                  required
                />
                <button
                  className="syne flex items-center justify-center gap-[7px] bg-[#6f1539] text-[16px] text-white leading-[1em] font-semibold text-center py-[15px] rounded-[50px] w-[100%] md:w-[30%] lg:w-[28%] cursor-pointer"
                >
                  <div className="red-circle w-[12px] h-[12px] bg-[#ffffff] rounded-full"></div>
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
          <div className="right w-[100%] lg:w-[49.5%] flex p-[30px] md:py-[38px] md:px-[50px] bg-[#ffffff0a] border-[1px] border-solid border-[#ffffff4d] rounded-[40px]">
            <div className="quick-links w-1/2 flex flex-col items-start gap-[15px]">
              <h5 className="syne text-[16px] md:text-[18px] text-white font-semibold leading-[1em]">
                Quick Links
              </h5>
              <div className="links w-full flex flex-col items-start gap-[15px]">
                <a className="inter text-[12px] md:text-[13px] text-[#ed991d] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Home</a>
                <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Projects</a>
                <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Projects Simplified</a>
                <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">About</a>
                <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Services</a>
                <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Contact</a>
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-start gap-[25px]">
              <div className="quick-links w-full flex flex-col items-start gap-[15px]">
                <h5 className="syne text-[16px] md:text-[18px] text-white font-semibold leading-[1em]">
                  Legal
                </h5>
                <div className="links w-full flex flex-col items-start gap-[15px]">
                  <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Privacy Policy</a>
                  <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Terms & Conditions</a>
                  <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Refund Policy</a>
                </div>
              </div>
              <div className="quick-links w-full flex flex-col items-start gap-[15px]">
                <h5 className="syne text-[16px] md:text-[18px] text-white font-semibold leading-[1em]">
                  Social Medias
                </h5>
                <div className="links w-full flex flex-col items-start gap-[15px]">
                  <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Facebook</a>
                  <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Vimeo</a>
                  <a className="inter text-[12px] md:text-[13px] text-[#fff] hover:text-[#ed991d] font-semibold hover:underline uppercase" href="#">Tiktok</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom w-[95%] lg:w-full flex flex-wrap gap-[10px]">
          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="#">
            <span className="flex items-center gap-[10px] pl-[20px] bg-[#ffffff12]">
              <FaTwitter />
              Twitter
            </span>
            <span className="flex items-center justify-center bg-[#ffffff12]">
              <FaArrowUp />
            </span>
          </a>

          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="#">
            <span className="flex items-center gap-[10px] pl-[20px] bg-[#ffffff12]">
              <FaLinkedin />
              Linkedin
            </span>
            <span className="flex items-center justify-center bg-[#ffffff12]">
              <FaArrowUp />
            </span>
          </a>

          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="#">
            <span className="flex items-center gap-[10px] pl-[20px] bg-[#ffffff12]">
              <FaYoutube />
              Youtube
            </span>
            <span className="flex items-center justify-center bg-[#ffffff12]">
              <FaArrowUp />
            </span>
          </a>

          <a className="w-full md:w-[49%] lg:w-[49.5%] bg-transparent flex items-center justify-between border-[1px] border-solid border-transparent text-[12px] font-normal text-white rounded-[50px] uppercase leading-[1em]" href="#">
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

      {/* Copyright Section */}
      <div className="copyright w-[var(--box-width)] mt-[20px] flex flex-col md:flex-row items-center justify-between gap-[10px]">
        <p className="inter text-[12px] text-[#ffffff99] font-light leading-[1em]">
          © {new Date().getFullYear()} Townbell. All rights reserved.
        </p>
        <div className="flex items-center gap-[20px]">
          <a className="inter text-[12px] text-[#ffffff99] hover:text-[#ed991d] font-light leading-[1em]" href="#">
            Privacy Policy
          </a>
          <a className="inter text-[12px] text-[#ffffff99] hover:text-[#ed991d] font-light leading-[1em]" href="#">
            Terms of Service
          </a>
          <a className="inter text-[12px] text-[#ffffff99] hover:text-[#ed991d] font-light leading-[1em]" href="#">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;