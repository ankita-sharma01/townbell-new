// import React, { useRef } from "react";
// import foldImage from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0001.jpg";

// const amenitiesList = [
//   "Club House with Gym",
//   "Kids Play Area",
//   "Indoor Games",
//   "Jogging Track",
//   "24x7 Security",
//   "Green Landscape",
// ];

// const Amenities = () => {
//       const heroRef = useRef(null);
//   return (
//     <div className="w-full">

//           <section
//         className="relative h-[70vh] flex items-end justify-start overflow-hidden"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         ref={heroRef}
//       >
//         <div className="text-left z-10 px-4 pb-[40px]">
//           <div className="floating-element mx-auto bg-opacity-20 backdrop-blur-smp-6 max-w-md">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//              AMENITIES
//             </h1>
//           </div>
//         </div>
//       </section>

//       {/* Full-width Image */}
//       <img
//         src={foldImage}
//         alt="Amayra Trillium Fold"
//         className="w-full object-cover"
//       />

//       {/* Amenities List */}
//       <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-4">
//         {amenitiesList.map((item, index) => (
//           <div
//             key={index}
//             className="border-b pb-2 text-lg font-medium text-gray-800"
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Amenities;






















import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaSwimmingPool, FaDumbbell, FaTree, FaParking, FaWifi, FaGlassCheers } from 'react-icons/fa';
import { GiFlowerPot, GiPartyPopper, GiCommercialAirplane } from 'react-icons/gi';
import ClubhouseAmenities from '../Components/ClubhouseAmenities';

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
  const heroRef = useRef(null);
  const amenitiesRef = useRef(null);
  const cardsRef = useRef([]);

  // Amenities data
  const amenities = [
    { icon: <FaSwimmingPool size={40} />, title: "Infinity Pool", description: "Stunning rooftop infinity pool with panoramic city views" },
    { icon: <FaDumbbell size={40} />, title: "Fitness Center", description: "State-of-the-art gym with premium equipment" },
    { icon: <FaTree size={40} />, title: "Landscaped Gardens", description: "Beautifully designed green spaces throughout the property" },
    { icon: <GiFlowerPot size={40} />, title: "Yoga Deck", description: "Peaceful outdoor space for yoga and meditation" },
    { icon: <FaParking size={40} />, title: "Valet Parking", description: "Convenient and secure parking services" },
    { icon: <FaWifi size={40} />, title: "High-Speed WiFi", description: "Fiber-optic internet throughout the property" },
    { icon: <GiPartyPopper size={40} />, title: "Party Hall", description: "Elegant event space for celebrations" },
    { icon: <FaGlassCheers size={40} />, title: "Lounge Bar", description: "Sophisticated bar area for residents" },
    { icon: <GiCommercialAirplane size={40} />, title: "Concierge", description: "24/7 concierge services for all your needs" }
  ];

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
      }
    });

    // Section title animation
    gsap.from(".section-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
      }
    });

    // Amenities cards animation
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: amenitiesRef.current,
          start: "top 70%",
        }
      });
    });

    // Image reveal animation
    gsap.utils.toArray(".amenity-image").forEach((image) => {
      gsap.from(image, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">World-Class Amenities</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Experience luxury living with our premium collection of amenities designed for your comfort and convenience.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section ref={amenitiesRef} className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16">
            Premium Amenities for Discerning Residents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="text-teal-600 mb-4 group-hover:text-teal-800 transition-colors">
                    {amenity.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Infinity Pool With Panoramic Views</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our signature rooftop infinity pool offers breathtaking 360-degree views of the city skyline. 
                The perfect place to unwind after a long day or entertain guests in style.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-100 p-4 rounded-lg">
                  <p className="font-bold text-teal-800">25m Length</p>
                  <p className="text-sm text-gray-600">Olympic-sized pool</p>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg">
                  <p className="font-bold text-teal-800">Sunset Views</p>
                  <p className="text-sm text-gray-600">West-facing orientation</p>
                </div>
              </div>
            </div>
            <div className="amenity-image h-96 bg-gray-300 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Infinity Pool"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Image Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="amenity-image h-96 bg-gray-300 rounded-xl overflow-hidden order-last lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Fitness Center"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Fitness Center</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our fully-equipped fitness center features the latest cardio and strength training equipment, 
                along with dedicated spaces for yoga and functional training. Open 24/7 for your convenience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-teal-100 p-4 rounded-lg">
                  <p className="font-bold text-teal-800">24/7 Access</p>
                  <p className="text-sm text-gray-600">Available anytime</p>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg">
                  <p className="font-bold text-teal-800">Personal Trainers</p>
                  <p className="text-sm text-gray-600">Available on request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Luxury Living</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a tour today to see our amenities and experience the SkyTouch Towers difference.
          </p>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Book a Tour
          </button>
        </div>
      </section>
      <ClubhouseAmenities/>
    </div>
  );
};

export default Amenities;