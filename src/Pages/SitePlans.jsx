// // src/pages/SitePlans.jsx
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const SitePlans = () => {
//   const heroRef = useRef(null);
//   const filterRef = useRef(null);
//   const cardsRef = useRef(null);
//   const floorPlanRef = useRef(null);
  
//   // Initialize animations
//   useEffect(() => {
//     // Hero section animations
//     gsap.fromTo(heroRef.current, 
//       { opacity: 0, y: 50 },
//       { 
//         opacity: 1, 
//         y: 0, 
//         duration: 1.2,
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: "top bottom"
//         }
//       }
//     );
    
//     // Floating element animation
//     gsap.to('.floating-element', {
//       y: 20,
//       duration: 3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut"
//     });
    
//     // Filter section animation
//     gsap.fromTo(filterRef.current, 
//       { opacity: 0, y: 30 },
//       { 
//         opacity: 1, 
//         y: 0, 
//         duration: 1,
//         scrollTrigger: {
//           trigger: filterRef.current,
//           start: "top 90%"
//         }
//       }
//     );
    
//     // Card animations
//     gsap.utils.toArray('.unit-card').forEach((card, index) => {
//       gsap.fromTo(card, 
//         { opacity: 0, y: 50, scale: 0.9 },
//         { 
//           opacity: 1, 
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           delay: index * 0.1,
//           scrollTrigger: {
//             trigger: card,
//             start: "top 90%"
//           }
//         }
//       );
//     });
    
//     // Floor plan animation
//     gsap.fromTo(floorPlanRef.current, 
//       { opacity: 0, y: 50 },
//       { 
//         opacity: 1, 
//         y: 0, 
//         duration: 1,
//         scrollTrigger: {
//           trigger: floorPlanRef.current,
//           start: "top 80%"
//         }
//       }
//     );
    
//     // Clean up
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);
  
//   // Mock data - same as SkyTouch Towers
//   const towers = ["Tower 1", "Tower 2", "Tower 3", "Tower 4"];
//   const unitTypes = ["2 BHK", "3 BHK", "4 BHK"];
//   const unitSizes = ["1000-1200 sqft", "1200-1500 sqft", "1500-1800 sqft"];
  
//   const units = [
//     { id: 1, tower: "Tower 1", unit: "T1-101", type: "2 BHK", size: "1050 sqft", price: "₹ 1.5 Cr" },
//     { id: 2, tower: "Tower 1", unit: "T1-102", type: "3 BHK", size: "1350 sqft", price: "₹ 2.1 Cr" },
//     { id: 3, tower: "Tower 2", unit: "T2-201", type: "2 BHK", size: "1100 sqft", price: "₹ 1.6 Cr" },
//     { id: 4, tower: "Tower 2", unit: "T2-202", type: "3 BHK", size: "1400 sqft", price: "₹ 2.2 Cr" },
//     { id: 5, tower: "Tower 3", unit: "T3-301", type: "2 BHK", size: "1080 sqft", price: "₹ 1.55 Cr" },
//     { id: 6, tower: "Tower 3", unit: "T3-302", type: "4 BHK", size: "1650 sqft", price: "₹ 2.8 Cr" },
//     { id: 7, tower: "Tower 4", unit: "T4-401", type: "3 BHK", size: "1420 sqft", price: "₹ 2.3 Cr" },
//     { id: 8, tower: "Tower 4", unit: "T4-402", type: "4 BHK", size: "1700 sqft", price: "₹ 2.9 Cr" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f5f5f5]">
//       {/* Hero Banner */}
//       <section 
//         className="relative h-[70vh] flex items-center justify-center overflow-hidden"
//         style={{
//           backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center"
//         }}
//         ref={heroRef}
//       >
//         <div className="text-center z-10 px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Site Plans</h1>
          
//           {/* Floating Element */}
//           <div className="floating-element mx-auto bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-md border border-white border-opacity-30">
//             <p className="text-white text-lg">Explore our meticulously designed residential units</p>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section 
//         className="py-12 px-4 md:px-8 bg-white shadow-md"
//         ref={filterRef}
//       >
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Find Your Perfect Home</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div>
//               <label className="block text-gray-700 mb-2">Select Tower</label>
//               <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="">All Towers</option>
//                 {towers.map((tower, index) => (
//                   <option key={index} value={tower}>{tower}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 mb-2">Unit Type</label>
//               <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="">All Types</option>
//                 {unitTypes.map((type, index) => (
//                   <option key={index} value={type}>{type}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 mb-2">Unit Size</label>
//               <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="">All Sizes</option>
//                 {unitSizes.map((size, index) => (
//                   <option key={index} value={size}>{size}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div>
//               <label className="block text-gray-700 mb-2">Search Units</label>
//               <div className="flex">
//                 <input 
//                   type="text" 
//                   placeholder="Unit number..." 
//                   className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition-colors">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Unit Cards Section */}
//       <section className="py-16 px-4 md:px-8 bg-[#f5f5f5]">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={cardsRef}>
//             {units.map((unit) => (
//               <div 
//                 key={unit.id} 
//                 className="unit-card bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={`https://picsum.photos/400/300?random=${unit.id}`} 
//                     alt={`Unit ${unit.unit}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <h3 className="text-xl font-bold text-gray-800">{unit.unit}</h3>
//                     <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
//                       {unit.tower}
//                     </span>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <p className="text-gray-600 text-sm">Unit Type</p>
//                       <p className="font-medium">{unit.type}</p>
//                     </div>
//                     <div>
//                       <p className="text-gray-600 text-sm">Size</p>
//                       <p className="font-medium">{unit.size}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex justify-between items-center border-t border-gray-200 pt-4">
//                     <p className="text-lg font-bold text-blue-600">{unit.price}</p>
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                       View Floor Plan
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Floor Plan Section */}
//       <section 
//         className="py-16 px-4 md:px-8 bg-white"
//         ref={floorPlanRef}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Detailed Floor Plans</h2>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Explore our meticulously designed floor plans that maximize space, natural light, and functionality. 
//               Each unit is crafted to provide the perfect balance of comfort and luxury.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="bg-gray-100 p-4 rounded-xl">
//               <img 
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
//                 alt="Detailed Floor Plan"
//                 className="w-full h-auto rounded-lg shadow-lg"
//               />
//             </div>
            
//             <div>
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">3 BHK Premium Unit</h3>
//                 <p className="text-gray-600 mb-4">Tower 2, Unit T2-202</p>
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <div className="bg-blue-50 p-4 rounded-lg">
//                     <p className="text-gray-600">Total Area</p>
//                     <p className="text-xl font-bold">1400 sqft</p>
//                   </div>
//                   <div className="bg-blue-50 p-4 rounded-lg">
//                     <p className="text-gray-600">Price</p>
//                     <p className="text-xl font-bold">₹ 2.2 Cr</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-4">
//                   This premium 3 BHK unit features spacious living areas, a modern kitchen, 
//                   and large balconies with panoramic views. The master bedroom includes a walk-in closet 
//                   and an ensuite bathroom.
//                 </p>
//               </div>
              
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800 mb-4">Unit Features</h4>
//                 <div className="grid grid-cols-2 gap-4">
//                   {[
//                     "Spacious living/dining area",
//                     "Modern modular kitchen",
//                     "3 Bedrooms with wardrobes",
//                     "2 Bathrooms (1 ensuite)",
//                     "2 Balconies",
//                     "Utility area",
//                     "Wooden flooring in bedrooms",
//                     "Vitrified tiles in living areas"
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-start">
//                       <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 px-4 md:px-8 bg-blue-600 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Contact our sales team today to schedule a private tour and experience 
//             the SkyTouch Towers difference firsthand.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
//               Schedule a Visit
//             </button>
//             <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SitePlans;


import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBuilding, FaLeaf, FaHeart } from "react-icons/fa";
import sitePlanImg from "../Assets/CLUB_INTERIOR/BANQUET.png"; // Add image assets

gsap.registerPlugin(ScrollTrigger);

const SitePlans = () => {
  const heroRef = useRef();
  const amenitiesRef = useRef();
  const plansRef = useRef();
  const connectivityRef = useRef();

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0, y: 50, duration: 1,
      scrollTrigger: { trigger: heroRef.current, start: "top bottom" }
    });
    // Amenities cards fade-in sequentially
    gsap.from(amenitiesRef.current.children, {
      opacity: 0, y: 30, stagger: 0.2, duration: 0.8,
      scrollTrigger: { trigger: amenitiesRef.current, start: "top 80%" }
    });
    // Floor plans appear with scale
    gsap.from(plansRef.current.querySelectorAll(".plan-card"), {
      scale: 0.8, opacity: 0, stagger: 0.3, duration: 0.8,
      scrollTrigger: { trigger: plansRef.current, start: "top 80%" }
    });
    // Connectivity icons with fade
    gsap.from(connectivityRef.current.children, {
      opacity: 0, x: -20, stagger: 0.2, duration: 0.8,
      scrollTrigger: { trigger: connectivityRef.current, start: "top 80%" }
    });
  }, []);

  return (
    <div className="site-plans-page space-y-24">
      {/* Hero Section */}
      <section ref={heroRef} className="text-center px-6 py-16 bg-white">
        <h1 className="text-4xl font-bold mb-4">Site Plans</h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          Designed for Seamless Living... Vision to Reality.
        </p>
      </section>

      {/* Our Core Values (Amenities) */}
      <section className="px-6">
        <div className="amenities-grid grid grid-cols-1 md:grid-cols-3 gap-8" ref={amenitiesRef}>
          <div className="amenity-card p-6 bg-gray-50 rounded-lg text-center">
            <FaBuilding className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Togetherness</h3>
            <p>Community where bonds are nurtured...</p>
          </div>
          <div className="amenity-card p-6 bg-gray-50 rounded-lg text-center">
            <FaLeaf className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enrichment</h3>
            <p>Modern amenities, lush green spaces...</p>
          </div>
          <div className="amenity-card p-6 bg-gray-50 rounded-lg text-center">
            <FaHeart className="text-4xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rejoice</h3>
            <p>Celebration spaces designed for joy...</p>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="px-6" ref={plansRef}>
        <h2 className="text-3xl font-bold mb-6 text-center">The Proof is in Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "5BHK Type 3", area: "3373 Sq. Ft.", towers: "A, B, C, D" },
            { title: "4BHK Type 1", area: "2925 Sq. Ft.", towers: "A, B, C, D" },
            { title: "4BHK Type 2", area: "2897 Sq. Ft.", towers: "A, B, C, D" },
          ].map((plan, i) => (
            <div key={i} className="plan-card bg-white rounded-lg shadow-md overflow-hidden">
              <img src={sitePlanImg} alt={plan.title} className="w-full h-[200px] object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-1">{plan.title}</h3>
                <p>{plan.area} | Availability: {plan.towers}</p>
                <p>Balcony: 6'0", Kitchen dims... Drawing-Dining dims...</p>
                <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded">View Site Plan →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connectivity */}
      <section className="px-6 mb-16" ref={connectivityRef}>
        <h2 className="text-3xl font-bold mb-6 text-center">Strategic Location, Effortless Connectivity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "10 Min drive to Bus Stand" },
            { label: "3 Min drive to Delhi World Public School" },
            { label: "14 Min drive to International Airport" },
            { label: "3 Min drive to D‑Mart" },
            { label: "10 Min drive to Railway Station" },
            { label: "1 Min drive to Public Park" },
          ].map((item,i)=>(
            <div key={i} className="flex items-center p-4 bg-gray-100 rounded">
              <FaBuilding className="text-3xl text-indigo-600 mr-3" />
              <span className="text-lg">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SitePlans;
