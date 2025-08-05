
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

    // Vision section animations
    // gsap.from(visionTextRef.current.children, {
    //   opacity: 0,
    //   y: 50,
    //   stagger: 0.2,
    //   duration: 0.8,
    //   scrollTrigger: {
    //     trigger: visionTextRef.current,
    //     start: "top 75%",
    //   },
    // });

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
      if (index < sections.length - 0 ) {
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
      title: " Typical Floor Plan: Tower A (3BHK)",
      image: floor1,
      square: "1819.45 SQ. FT.",
    },
    {
      title: " Typical Floor Plan: Tower B (3BHK)",
      image: floor2,
      square: "1766.91 SQ. FT.",
    },
    {
      title: " Typical Floor Plan: Tower C (3BHK)",
      image: floor3,
      square: "1821.60 SQ. FT.",
    },
    {
      title: " Typical Floor Plan: Tower D (3BHK)",
      image: floor4,
      square: "2703.96 SQ. FT.",
    },
  ];

  const amenitiesList = [
    { label: "01 Commercial Entry" },
    { label: "02 Commercial Exit" },
    { label: "03 Housing Entry/Exit" },
    { label: "04 Waterbody" },
    { label: "05 4-Wheeler Parking" },
    { label: "06 Ramp to Basement" },
    { label: "07 Basketball Practice Court" },
    { label: "08 Lawn" },
    { label: "09 Kid's Play Area" },
    { label: "10 Club" },
    { label: "11 Skating Rink" },
    { label: "12 Outdoor Fitness" },
    { label: "13 Cricket Pitch" },
    { label: "14 Yoga Lawn" },
    { label: "15 Reflexogy Park" },
    { label: "16 Fire Pit" },
    { label: "17 Badminton Court" },
    { label: "18 Guard's Room" },
    { label: "19 Stairs" },
    { label: "20 Parking Cum Plaza" },
    { label: "21 Entry to Plaza" },
    { label: "22 Corridor" },
    { label: "23 Seats" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="main-home-section relative h-[70vh] flex items-end justify-start overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
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

    
      {/* siteplan proof */}
      <div className="bg-white pt-[40px]">
        
        <div className="w-full grid lg:grid-cols-2 items-center">
          {/* Left -Map Image*/}
           <div className="flex justify-center items-center">
            <img
              ref={sitePlanMapRef}
              src={locationMap}
              alt="Location Map"
              className="w-full rounded-md shadow-md mx-auto"
            />
          </div>

          {/* Right -  Location Cards  */}
          <div className="grid grid-cols-1 sm:grid-cols-1  p-4 gap-1 md:gap-2">
            <div
          ref={sitePlanTitleRef}
          className="w-full flex flex-col m-0 pb-[20px] px-4"
        >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-[20px]">
              A NEW MARVEL IN THE VICINITY OF GREATER MOHALI
            </h2>
        </div>
            {locations.map((item, idx) => (
              <div
                key={idx}
                ref={addToLocationCardsRef}
                className="group relative flex flex-col items-start p-4 bg-white transition-shadow duration-300"
              >
                {/* Content container */}
                <div className="flex relative z-10 items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-black-600 duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 text-xl font-semibold group-hover:text-blue-800 transition-colors duration-300">
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

      {/* map section */}
      <div className="bg-white p-[40px] gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Left - Location Cards */}
          <div className="max-w-7xl grid lg:grid-cols-1 gap-1 items-top">
            <div>
              <h2
                ref={mapSectionTitleRef}
                className="text-[35px] lg:text-[62px] font-bold leading-snug mb-[10px]"
              >
                A LIFE OF EASE, A HOME OF JOY
              </h2>
              <p ref={mapSectionTextRef}>
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
              <h5 ref={amenitiesTitleRef} className="text-[32px] md:text-[45px]">
                LEGENDS
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {amenitiesList.map((item, idx) => (
                  <div
                    key={idx}
                    ref={addToAmenitiesListRef}
                    className="group relative p-[10px] overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center justify-start gap-1 mb-0">
                      <p className="text-black-700 text-sm font-semibold transition-colors duration-300">
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
            <h2 className="text-[32px] md:text-[50px] text-center font-bold leading-snug mb-[20px]">
              SITE PLAN
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
          <div className="text-center mb-20">
            <h2 className="text-[35px] lg:text-[62px] font-bold text-black-900 mb-4">
               Togetherness. Enrichment. Rejoice. Our Core Values.
            </h2>
            <p className="text-black-700 mx-auto">
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
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-teal-800 mb-4">
                    {floor.title}
                  </h3>

                  <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium">
                    {floor.square}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        
      </div>
    </div>
  );
};

export default SitePlans;





  {/* Vision Section */}
      // <div className="bg-white">
      //   <div
      //     ref={visionTextRef}
      //     className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 m-0 p-[40px]"
      //   >
      //     <div>
      //       <h2 className="text-3xl md:text-4xl font-bold leading-snug">
      //         A LIFE OF EASE,
      //         <br />A HOME OF JOY
      //       </h2>
      //     </div>
      //     <div className="text-gray-800 text-sm md:text-base leading-relaxed">
      //       Step inside a space where comfort meets elegance, and every detail
      //       speaks of refined living. Thoughtfully designed interiors offer a
      //       seamless blend of style and functionality — from airy living rooms
      //       that invite natural light to serene bedrooms crafted for restful
      //       nights. High-quality finishes, intelligent layouts, and timeless
      //       aesthetics come together to create a home that feels both luxurious
      //       and deeply personal.
      //     </div>
      //   </div>
      //   <hr />
      //   <div className="about-image-container h-[100vh] overflow-hidden">
      //     <img
      //       ref={visionImageRef}
      //       src={townBuilding}
      //       alt="Town Bell Garden"
      //       className="about-section-image w-full h-full object-cover transform scale-[1.2] origin-center pt-[20px]"
      //     />
      //   </div>
      // </div>
