import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import float from "../Assets/amyra/float-logo.png";
import living from "../Assets/amyra/living-1.jpeg";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const heroRef = useRef(null);
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="main-home-section relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${living})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
        ref={heroRef}
      >
        <div className="h-screen flex flex-col justify-center item-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white  mb-6">
            Contact Us
          </h1>

          {/* Floating Element */}
          <div className="floating-element max-w-md">
            <img
              className="w-60 mx-auto h-auto mb-4"
              src={float}
              alt="amayra"
            />
          </div>
        </div>
      </section>


      {/* Contact Information */}
       <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto border border-[#333] rounded-2xl p-8 md:p-14 grid md:grid-cols-2 gap-10">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit us</h2>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-black-500 mt-1" />
            <p className="text-[15px] leading-6">
              123 Studio Street, Filmmaker's Haven, Cityville, USA
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="text-black-500 mt-1" />
            <p className="text-[15px] leading-6">
              Monday – Friday, 9:00 AM – 6:00 PM
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope className="text-black-500 mt-1" />
            <p className="text-[15px] leading-6">info@storystreamvideos.com</p>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-black-500 mt-1" />
            <p className="text-[15px] leading-6">(123) 456-7890</p>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Question? Send us a message. Don’t be shy
          </h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="bg-[#1a1a1a41]   px-4 py-3 rounded-full outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="bg-[#1a1a1a41]   px-4 py-3 rounded-full outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="jane@framer.com"
                className="bg-[#1a1a1a41]   px-4 py-3 rounded-full outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="bg-[#1a1a1a41]   px-4 py-3 rounded-xl outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black-500 hover:bg-orange-600   font-medium py-3 w-full rounded-full transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
