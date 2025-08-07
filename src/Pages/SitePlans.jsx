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
import locationMap from "../Assets/amyra/am1-removebg-preview.png";
import map from "../Assets/maps/map.jpg";
import floor1 from "../Assets/maps/floor-1.jpg";
import floor2 from "../Assets/maps/floor-2.jpg";
import floor3 from "../Assets/maps/floor-3.jpg";
import floor4 from "../Assets/maps/floor-4.jpg";
import backgroundAm1 from "../Assets/amyra/Amayra-map-bg.jpg";
import backgroundAm2 from "../Assets/amyra/Amayra-text-bg.jpg";
import backgroundAm3 from "../Assets/fla-6/black-bg.jpg";
import amyraBanner from "../Assets/amyra/about-banner.jpg";
import gallery1 from "../Assets/maps/img-1.jpg";
import gallery2 from "../Assets/maps/img-2.jpg";
import gallery3 from "../Assets/maps/img-3.jpg";
import gallery4 from "../Assets/maps/img-4.jpg";
import gallery5 from "../Assets/maps/img-5.jpg";
import gallery6 from "../Assets/maps/img-6.jpg";
import gallery7 from "../Assets/maps/img-7.jpg";
import gallery8 from "../Assets/maps/img-8.jpg";
import gallery9 from "../Assets/maps/img-9.jpg";
import club from "../Assets/maps/house-club-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const SitePlans = () => {
  // Create refs for animated elements
  const heroRef = useRef(null);
  // const visionTextRef = useRef(null);
  const visionImageRef = useRef(null);
  const sitePlanTitleRef = useRef(null);
  const locationCardsRef = useRef([]);
  const sitePlanMapRef = useRef(null);
  const mapSectionTitleRef = useRef(null);
  const mapSectionTextRef = useRef(null);
  const amenitiesTitleRef = useRef(null);
  const amenitiesListRef = useRef([]);
  const sitePlanImageRef = useRef(null);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  // Store location cards refs
  const addToLocationCardsRef = (el) => {
    if (el && !locationCardsRef.current.includes(el)) {
      locationCardsRef.current.push(el);
    }
  };

  // Store amenities list refs
  const addToAmenitiesListRef = (el) => {
    if (el && !amenitiesListRef.current.includes(el)) {
      amenitiesListRef.current.push(el);
    }
  };

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

    gsap.from(visionImageRef.current, {
      opacity: 0,
      scale: 1.2,
      duration: 1.2,
      scrollTrigger: {
        trigger: visionImageRef.current,
        start: "top 75%",
      },
    });

    // Site Plan section animations
    gsap.from(sitePlanTitleRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      scrollTrigger: {
        trigger: sitePlanTitleRef.current,
        start: "top 75%",
      },
    });

    locationCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.from(sitePlanMapRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: sitePlanMapRef.current,
        start: "top 75%",
      },
    });

    // Map section animations
    gsap.from(mapSectionTitleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: mapSectionTitleRef.current,
        start: "top 75%",
      },
    });

    gsap.from(mapSectionTextRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: mapSectionTextRef.current,
        start: "top 75%",
      },
    });

    gsap.from(amenitiesTitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: amenitiesTitleRef.current,
        start: "top 75%",
      },
    });

    amenitiesListRef.current.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -20 : 20,
        duration: 0.5,
        delay: index * 0.05,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      });
    });

    gsap.from(sitePlanImageRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      scrollTrigger: {
        trigger: sitePlanImageRef.current,
        start: "top 65%",
      },
    });
    // Gallery section animation
    gsap.from(galleryRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 75%",
      },
    });

    // Floating element animation
    gsap.to(".floating-element", {
      y: 20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray(".floor-section");

    sections.forEach((section, index) => {
      // Skip the last section
      if (index < sections.length - 0) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          markers: false, // Set to true for debugging
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const locations = [
    {
      title: "Rayat Bahara University ",
      time: "- 8 Mins",
      icon: <FaUniversity className="text-black-800 text-[35px]" />,
    },
    {
      title: "Hospital",
      time: " - 7 Mins",
      icon: <FaHospital className="text-black-800 text-[35px]" />,
    },
    {
      title: "Kharar Bus Stand",
      time: " - 3 Mins",
      icon: <FaBus className="text-black-800 text-[35px]" />,
    },
    {
      title: "International Airport",
      time: " - 25 Mins",
      icon: <FaPlane className="text-black-800 text-[35px]" />,
    },
    {
      title: "VR Punjab Mall",
      time: "  - 10 Mins",
      icon: <FaShoppingBag className="text-black-800 text-[35px]" />,
    },
    {
      title: "Mohali Railway Station",
      time: " - 20 Mins",
      icon: <FaTrain className="text-black-800 text-[35px]" />,
    },
  ];

  const floors = [
    {
      title: " Typical Floor Plan",
      subTitle: " Tower A (3BHK)",
      image: floor1,
      superArea: "1851 SQ. FT.",
      coveredArea: "1523 SQ. FT.",
      carpetArea: "1124 SQ. FT.",
    },
    {
      title: " Typical Floor Plan",
      subTitle: " Tower B (3BHK)",
      image: floor2,
      superArea: "1767 SQ. FT.",
      coveredArea: "1515 SQ. FT.",
      carpetArea: "1124 SQ. FT.",
    },
    {
      title: " Typical Floor Plan",
      subTitle: " Tower C (3BHK)",
      image: floor3,
      superArea: " 1851 SQ. FT.",
      coveredArea: "1523 SQ. FT.",
      carpetArea: "1124 SQ. FT.",
    },
    {
      title: " Typical Floor Plan",
      subTitle: " Tower D (3BHK)",
      image: floor4,
      superArea: "2704 SQ. FT.",
      coveredArea: "2127.50 SQ. FT.",
      carpetArea: "1506 SQ. FT.",
    },
  ];

  const amenitiesList = [
    { number: "01", label: "Commercial Entry" },
    { number: "02", label: "Commercial Exit" },
    { number: "03", label: "Housing Entry/Exit" },
    { number: "04", label: "Waterbody" },
    { number: "05", label: "4-Wheeler Parking" },
    { number: "06", label: "Ramp to Basement" },
    { number: "07", label: "Seats" },
    { number: "08", label: "Lawn" },
    { number: "09", label: "Kid's Play Area" },
    { number: "10", label: "Club" },
    { number: "11", label: "Skating Rink" },
    { number: "12", label: "Outdoor Fitness" },
    { number: "13", label: "Cricket Pitch" },
    { number: "14", label: "Yoga Lawn" },
    { number: "15", label: "Reflexogy Park" },
    { number: "16", label: "Fire Pit" },
    { number: "17", label: "Badminton Court" },
    { number: "18", label: "Guard's Room" },
    { number: "19", label: "Stairs" },
    { number: "20", label: "Parking Cum Plaza" },
    { number: "21", label: "Entry to Plaza" },
    { number: "22", label: "Corridor" },
    { number: "23", label: "Basketball Practice Court" },
  ];

  const highlightsLeft = [
    "Gated & Secured Campus",
    "High End Club",
    "24/7 CCTV Security",
    "Rain Water Harvesting",
    "Earthquake Resistant Structure",
    "Mivan Construction",
    "Power Back-up & Water Supply",
  ];

  const highlightsRight = [
    "Basement & Open Car Parking",
    "Kids Play Area",
    "Yoga Meditation Area",
    "Badminton / Tennis Court",
    "Commercial Shops at Front",
    "Well Connected to Highway",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="main-home-section relative h-[80vh] flex items-end justify-start overflow-hidden"
        style={{
          backgroundImage: `url('${amyraBanner}')`,
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

      {/* map section */}
      <div className="bg-white p-[40px] gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Left - Location Cards */}
          <div className="max-w-7xl grid lg:grid-cols-1 gap-1 items-top">
            <div>
              <h2
                ref={mapSectionTitleRef}
                className="text-[35px] lg:text-[50px] font-semibold leading-snug mb-[10px]"
              >
                A Home Of Comfort
              </h2>
              <p ref={mapSectionTextRef} className="pb-[20px] font-medium ">
                Step inside a space where comfort meets elegance, and every
                detail speaks of refined living. Thoughtfully designed interiors
                offer a seamless blend of style and functionality — from airy
                living rooms that invite natural light to serene bedrooms
                crafted for restful nights. High-quality finishes, intelligent
                layouts, and timeless aesthetics come together to create a home
                that feels both luxurious and deeply personal.
              </p>
            </div>
            <div>
              <h5
                ref={amenitiesTitleRef}
                className="capitalize text-[20px] md:text-[25px] font-medium"
              >
                Legends
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {amenitiesList.map((item, idx) => (
                  <div
                    key={idx}
                    ref={addToAmenitiesListRef}
                    className="group relative pl-0 py-[10px]  overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-start gap-1 mb-0">
                      <p className="capitalize text-black-500 text-sm font-semibold transition-colors duration-300">
                        <b className="text-black-700 text-[22px] pr-[10px]">
                          {item.number}
                        </b>{" "}
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Map Image */}
          <div className="max-w-7xl grid lg:grid-cols-1 gap-2 justify-center text-center items-top">
            <h2 className="capitalize text-[32px] md:text-[45px] text-center font-semibold leading-snug mb-[20px]">
              Site Plan
            </h2>
            <img
              ref={sitePlanImageRef}
              src={map}
              alt="Location Map"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      {/* floor section - No animations */}
      <div className="min-h-screen bg-gradient-to-b from-black-50 to-white">
        <div className="w-full px-4 sm:p-[20px] lg:p-[40px]">
          <div className="w-full flex mb-7 justify-between items-center">
            <div className="flex flex-col">
              <p className="text-3xl text-black font-semibold">FLOOR PLANS</p>
              <h2 className="capitalize text-[35px] lg:text-[55px] font-bold text-black-900 mb-4">
                The Proof Is In <br /> Our Portfolio
              </h2>
            </div>
            <p className="w-1/2 text-gray-700">
              We make even the wildest architectural dreams into dramatic yet
              feasible finished products anyone would be proud of.
            </p>
          </div>
          <div ref={containerRef} className="space-y-6 md:space-y-10">
            {floors.map((floor, index) => (
              <div
                key={index}
                className="floor-section bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 p-4 flex items-center justify-center">
                  <div className="relative">
                    <img
                      src={floor.image}
                      alt="Family dining together"
                      className="w-full h-[100vh] object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                  <h3 className="capitalize text-[18px] lg:text-[25px] font-bold text-black-800 mb-0">
                    {floor.title}
                  </h3>
                  <h4 className="text-[35px] lg:text-[45px] font-semibold">
                    {floor.subTitle}
                  </h4>
                  <div className="inline-block bg-black-100 text-black-800 mt-8 px-4 py-2 rounded-full font-medium">
                    <ul className="list-none w-[55%]">
                      <li className="text-lg flex justify-between">
                        <b>Super Area </b> {floor.superArea}
                      </li>
                      <li className="text-lg flex justify-between">
                        <b>Covered Area </b> {floor.coveredArea}
                      </li>
                      <li className="text-lg flex justify-between">
                        <b>Carpet Area </b> {floor.carpetArea}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* plans section */}
      <div className="bg-black relative text-white z-999">
        <div className="w-full flex flex-col lg:flex-row justify-center">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={club} // Update with actual path
              alt="Project Club View"
              className="w-full"
            />
          </div>

          {/* Right Content */}
          <div
            className="w-full lg:w-1/2 md:p-[50px] p-[20px]"
            style={{
              backgroundImage: `url('${backgroundAm3}')`,
              backgroundPosition: "left center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-2xl text-center md:text-3xl font-bold pb-2">
              Key Project Highlights:
            </h2>
            <div className="w-[60%] text-center h-[2px] bg-yellow-500 mx-auto mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 lg:mt-16 mt-6 text-sm md:text-base">
              {/* Left Column */}
              <ul className="space-y-2 list-disc list-inside">
                {highlightsLeft.map((item, idx) => (
                  <li className="marker:text-yellow-500" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Right Column */}
              <ul className="space-y-2 list-disc list-inside">
                {highlightsRight.map((item, idx) => (
                  <li className="marker:text-yellow-500" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section - Image Slider */}
      <section
        ref={galleryRef}
        className="bg-[#1f1e1c] py-20 px-4 relative z-999"
      >
        <div className="w-full mx-auto flex flex-cols flex-wrap p-4 gap-4 justify-center">
          <div className="flex flex-col gap-4  max-w-[30%]">
            <div className="relative w-full">
              <img
                src={gallery1}
                alt="Gym"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="relative w-full">
              <img
                src={gallery4}
                alt="Building"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="relative w-full">
              <img
                src={gallery7}
                alt="Family"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4  max-w-[30%]">
            <div className="relative w-full">
              {" "}
              {/* Adjust the margin-top to move the middle image up */}
              <img
                src={gallery2}
                alt="Building"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="relative w-full">
              {" "}
              {/* Adjust the margin-top to move the middle image up */}
              <img
                src={gallery5}
                alt="Pool with float"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="relative w-full">
              <img
                src={gallery8}
                alt="Family"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4  max-w-[30%]">
            <div className="relative w-full">
              <img
                src={gallery3}
                alt="Pool"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="relative w-full">
              <img
                src={gallery6}
                alt="Family"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="relative w-full">
              <img
                src={gallery9}
                alt="Family"
                className="w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* siteplan proof */}
      <div>
        <div className="w-full grid lg:grid-cols-2 items-center">
          {/* Left -Map Image*/}
          <div
            className="flex justify-center items-center h-full"
            style={{
              backgroundImage: `url('${backgroundAm1}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              ref={sitePlanMapRef}
              src={locationMap}
              alt="Location Map"
              className="w-max-5xl mx-auto"
            />
          </div>

          {/* Right -  Location Cards  */}
          <div
            className="grid grid-cols-1 sm:grid-cols-1 p-6 gap-1 md:gap-2 "
            style={{
              backgroundImage: `url('${backgroundAm2}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              ref={sitePlanTitleRef}
              className="w-full flex flex-col m-0 pb-[20px] px-4"
            >
              <h2 className="text-3xl md:text-4xl text-white font-bold leading-snug mb-[20px]">
                A NEW MARVEL IN THE VICINITY OF GREATER MOHALI
              </h2>
            </div>
            {locations.map((item, idx) => (
              <div
                key={idx}
                ref={addToLocationCardsRef}
                className="group relative flex flex-col items-start p-4 text-white transition-shadow duration-300"
              >
                {/* Content container */}
                <div className="flex relative z-10 items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-black-600 duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white-900 text-xl font-semibold group-hover:text-blue-800 transition-colors duration-300">
                      {item.title} {item.time}
                    </h3>
                  </div>
                </div>

                {/* Subtle hover effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 
                     group-hover:opacity-100 transition-opacity duration-500 z-0"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePlans;
