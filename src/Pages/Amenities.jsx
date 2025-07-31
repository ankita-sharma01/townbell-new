import React, { useRef } from "react";
import foldImage from "../Assets/amyra/Amayra_Trillium_Four_Fold_page-0001.jpg";

const amenitiesList = [
  "Club House with Gym",
  "Kids Play Area",
  "Indoor Games",
  "Jogging Track",
  "24x7 Security",
  "Green Landscape",
];

const Amenities = () => {
      const heroRef = useRef(null);
  return (
    <div className="w-full">

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
             AMENITIES
            </h1>
          </div>
        </div>
      </section>

      {/* Full-width Image */}
      <img
        src={foldImage}
        alt="Amayra Trillium Fold"
        className="w-full object-cover"
      />

      {/* Amenities List */}
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-4">
        {amenitiesList.map((item, index) => (
          <div
            key={index}
            className="border-b pb-2 text-lg font-medium text-gray-800"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
