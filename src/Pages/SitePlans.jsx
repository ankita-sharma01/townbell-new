// src/pages/SitePlans.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import townBuilding from "../Assets/TownLogo/about-img (1).png";

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

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
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
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 m-0 pb-[20px]">
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
            aesthetics come together to create a home that feels both luxurious
            and deeply personal.
          </div>
        </div>
        <div className="about-image-container h-[100vh] overflow-hidden border">
          <img
            src={townBuilding}
            alt="Town Bell Garden"
            className="about-section-image w-full h-full object-cover transform scale-[1.2] origin-center pt-[20px]"
          />
        </div>
      </div>

      {/* values section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 m-0 pb-[20px]">
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
          aesthetics come together to create a home that feels both luxurious
          and deeply personal.
        </div>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
        <div className="w-full md:w-1/2">
          <img
            src="path-to-your-image.jpg"
            alt="Family dining together"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-teal-800 text-2xl font-bold mb-4">
            Togetherness
          </h2>
          <p className="text-gray-600">
            A community where bonds are nurtured, neighbors become friends, and
            shared moments turn into cherished memories. Skytouch fosters an
            environment of warmth and harmony.
          </p>
        </div>
      </section>

      {/* siteplan proof */}
      <div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 m-0 pb-[20px]">
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
            aesthetics come together to create a home that feels both luxurious
            and deeply personal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePlans;
