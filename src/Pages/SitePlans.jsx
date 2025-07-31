// src/pages/SitePlans.jsx
import React, { useEffect, useRef } from "react";
import {
  FaUniversity,
  FaHospital,
  FaBus,
  FaPlane,
  FaShoppingBag,
  FaTrain,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import townBuilding from "../Assets/exterior/TRILLIUM_8.png";
import locationMap from "../Assets/amyra/am1.png";
import map from "../Assets/maps/map1.png";
import floor1 from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0005.jpg";
import floor2 from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0006.jpg";
import floor3 from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0007.jpg";
import floor4 from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0008.jpg";

gsap.registerPlugin(ScrollTrigger);

const SitePlans = () => {
  const heroRef = useRef(null);

  // Initialize animations
  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
        },
      }
    );

    // Floating element animation
    gsap.to(".floating-element", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const locations = [
    {
      title: "Rayat Bahara University ",
      time: "- 8 Mins",
      icon: <FaUniversity className="text-teal-800 text-xl" />,
    },
    {
      title: "Hospital",
      time: " - 7 Mins",
      icon: <FaHospital className="text-teal-800 text-xl" />,
    },
    {
      title: "Kharar Bus Stand",
      time: " - 3 Mins",
      icon: <FaBus className="text-teal-800 text-xl" />,
    },
    {
      title: "International Airport",
      time: " - 25 Mins",
      icon: <FaPlane className="text-teal-800 text-xl" />,
    },
    {
      title: "VR Punjab Mall",
      time: "  - 10 Mins",
      icon: <FaShoppingBag className="text-teal-800 text-xl" />,
    },
    {
      title: "Mohali Railway Station",
      time: " - 20 Mins",
      icon: <FaTrain className="text-teal-800 text-xl" />,
    },
  ];

  const floors = [
    {
      title: " Typical Floor Plan: Tower A (3BHK)",
      image: floor1,
      square: " 1819.45 SQ. FT.",
    },
    {
      title: " Typical Floor Plan: Tower B (3BHK)",
      image: floor2,
      square: "  1766.91 SQ. FT.",
    },
    {
      title: " Typical Floor Plan: Tower C (3BHK)",
      image: floor3,
      square: "  1821.60 SQ. FT.",
    },
    {
      title: " Typical Floor Plan: Tower D (3BHK)",
      image: floor4,
      square: " 2703.96 SQ. FT.",
    },
  ];

  const amenitiesList = [
    { number: "01", label: "COMMERCIAL ENTRY" },
    { number: "02", label: "COMMERCIAL EXIT" },
    { number: "03", label: "HOUSING ENTRY/EXIT" },
    { number: "04", label: "WATERBODY" },
    { number: "05", label: "4-WHEELER PARKING" },
    { number: "06", label: "RAMP TO BASEMENT" },
    { number: "07", label: "BASKETBALL PRACTICE COURT" },
    { number: "08", label: "LAWN" },
    { number: "09", label: "KID'S PLAY AREA" },
    { number: "10", label: "CLUB" },
    { number: "11", label: "SKATING RINK" },
    { number: "12", label: "OUTDOOR FITNESS" },
    { number: "13", label: "CRICKET PITCH" },
    { number: "14", label: "YOGA LAWN" },
    { number: "15", label: "REFLEXOGY PARK" },
    { number: "16", label: "FIRE PIT" },
    { number: "17", label: "BADMINTON COURT" },
    { number: "18", label: "GUARD'S ROOM" },
    { number: "19", label: "STAIRS" },
    { number: "20", label: "PARKING CUM PLAZA" },
    { number: "21", label: "ENTRY TO PLAZA" },
    { number: "22", label: "CORRIDOR" },
    { number: "23", label: "SEATS" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        className="relative h-[70vh] flex items-end justify-start overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        ref={heroRef}
      >
        <div className="text-left z-10 px-4 pb-[40px]">
          <div className="floating-element mx-auto bg-opacity-20 backdrop-blur-smp-6 max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site Plans
            </h1>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <>
        <div className="bg-white">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 m-0 p-[20px]">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                A LIFE OF EASE,
                <br />A HOME OF JOY
              </h2>
            </div>
            <div className="text-gray-800 text-sm md:text-base leading-relaxed">
              Step inside a space where comfort meets elegance, and every detail
              speaks of refined living. Thoughtfully designed interiors offer a
              seamless blend of style and functionality — from airy living rooms
              that invite natural light to serene bedrooms crafted for restful
              nights. High-quality finishes, intelligent layouts, and timeless
              aesthetics come together to create a home that feels both
              luxurious and deeply personal.
            </div>
          </div>
          <hr />
          <div className="about-image-container h-[100vh] overflow-hidden">
            <img
              src={townBuilding}
              alt="Town Bell Garden"
              className="about-section-image w-full h-full object-cover transform scale-[1.2] origin-center pt-[20px]"
            />
          </div>
        </div>
      </>

      {/* siteplan proof */}
      <div className="bg-white p-[40px]">
        <div className=" w-full flex flex-col m-0 pb-[20px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-[20px]">
              A NEW MARVEL IN THE VICINITY OF GREATER MOHALI
            </h2>
          </div>
        </div>
        <hr />

        <section className="py-12 px-4 lg:px-16">
          <div className="max-w-7xl grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-b from-white to-gray-100 border border-gray-200 px-4 py-4 rounded-md 
  hover:border-black transition-all duration-300 cursor-pointer shadow-sm overflow-hidden"
                >
                  {/* Hover background gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-white to-gray-400 opacity-0 group-hover:opacity-100 
    transition-opacity duration-300 z-0"
                  ></div>

                  {/* Content container */}
                  <div className="relative z-10 flex items-center justify-start gap-3 mb-2">
                    <div className="w-[40px] text-yellow group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-800 text-lg font-semibold group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="text-gray-700 text-base font-medium group-hover:text-white transition-colors duration-300">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Map Image */}
            <div className="flex justify-center items-center">
              <img
                src={locationMap}
                alt="Location Map"
                className="w-full max-w-lg rounded-md shadow-md"
              />
            </div>
          </div>
        </section>
      </div>

      {/* map section */}
      <div className="bg-white p-[40px]">
        <section className="py-12 px-4 lg:px-16">
          {/* Left - Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="max-w-7xl grid lg:grid-cols-1 gap-10 items-top">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-[20px]">
                  A LIFE OF EASE, A HOME OF JOY
                </h2>
                <p>
                  Step inside a space where comfort meets elegance, and every
                  detail speaks of refined living. Thoughtfully designed
                  interiors offer a seamless blend of style and functionality —
                  from airy living rooms that invite natural light to serene
                  bedrooms crafted for restful nights. High-quality finishes,
                  intelligent layouts, and timeless aesthetics come together to
                  create a home that feels both luxurious and deeply personal.
                </p>
              </div>
              <div>
                <h3>LEGENDS</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-gradient-to-b from-white to-gray-100 px-4 py-4 
      hover:border-black transition-all duration-300 cursor-pointer shadow-sm overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                      <div className="relative z-10 flex items-center justify-start gap-3 mb-0">
                        <div className="text-[20px] font-bold text-teal group-hover:text-white transition-colors duration-300">
                          {item.number}
                        </div>
                        <p className="text-gray-800 text-m font-semibold group-hover:text-white transition-colors duration-300">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Map Image */}
            <div className="flex justify-start items-center flex-col">
              <h2 className="text-xl md:text-2xl font-bold leading-snug mb-[20px]">
                SITE PLAN
              </h2>
              <img
                src={map}
                alt="Location Map"
                className="w-full max-w-lg rounded-md shadow-md"
              />
            </div>
          </div>
        </section>
      </div>

      {/* floor section */}
      <div className="p-[20px]">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 m-0 pb-[20px]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Togetherness. Enrichment. Rejoice.
              <br />
              Our Core Values.
            </h2>
          </div>
          <div className="text-gray-800 text-sm md:text-base leading-relaxed">
            We make even the wildest architectural dreams into dramatic yet
            feasible finished products anyone would be proud of.
          </div>
        </div>
        {floors.map((val) => (
          <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-300">
            <div className="w-full md:w-1/2">
              <img
                src={val.image}
                alt="Family dining together"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <h2 className="text-teal-800 text-2xl font-bold mb-4">
                {val.title}
              </h2>
              <p className="text-gray-600">{val.square}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SitePlans;
