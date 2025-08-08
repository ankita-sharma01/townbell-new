import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import living from "../Assets/about/contact-banner.jpg";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });
    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="main-home-section relative h-[100vh] flex items-end justify-start overflow-hidden"
        style={{
          backgroundImage: `url('${living}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-left z-10 px-4 pb-[40px]">
          <div className="floating-element mx-auto bg-opacity-20 backdrop-blur-smp-6 max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Amayra Trillium
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto border border-[#727272] rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <h2 className="capitalize text-xl md:text-2xl font-bold mb-4">Visit us</h2>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-black-500 mt-1 text-3xl" />
              <p className="text-[16px] font-semibold leading-6">
                123 Studio Street, Filmmaker's Haven, Cityville, USA
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-black-500 mt-1 text-3xl" />
              <p className="text-[16px] font-semibold leading-6">
                Monday – Friday, 9:00 AM – 6:00 PM
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black-500 mt-1 text-3xl" />
              <p className="text-[16px] font-semibold  leading-6">
                info@storystreamvideos.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-black-500 mt-1 text-3xl" />
              <p className="text-[16px] font-semibold  leading-6">(123) 456-7890</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <h2 className="capitalize text-xl md:text-2xl font-bold mb-6">
              Question? Send us a message. Don’t be shy
            </h2>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#f3f3f3] p-3 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="bg-[#f3f3f3] p-3 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#f3f3f3] p-3 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="bg-[#f3f3f3] p-3 outline-none  "
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black hover:bg-gray-600 text-white font-medium py-3 w-full transition"
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
