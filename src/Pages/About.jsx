// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import living from "../Assets/about/about-trilium-banner.jpg";
import team1 from "../Assets/about/why-chs-img.jpg";
import team2 from "../Assets/about/plac-holder-img.jpg"
import backgroundLines from "../Assets/about/background-lines.svg";
import aboutIcon1 from "../Assets/about/award-winner-img.jpg";
import aboutIcon2 from "../Assets/about/award-winner.png";
import aboutIcon3 from "../Assets/about/award-winner-2.png";
import {
  FaPlus,
  FaBullseye,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaSearch,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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

    // Section content fade-up animations
    gsap.utils.toArray(".fade-up").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });

    // Counter animations
    const counters = document.querySelectorAll(".count-box .count");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const count = { value: 0 };

      ScrollTrigger.create({
        trigger: counter,
        start: "top 80%",
        onEnter: () => {
          gsap.to(count, {
            value: target,
            duration: 2,
            onUpdate: () => {
              counter.textContent = Math.ceil(count.value);
            },
          });
        },
      });
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // -------------------------grok----------------------------------------
  useEffect(() => {
    // GSAP animations for the About section
    gsap.fromTo(
      ".concept-heading h2",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".hover-btn",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".about-content > *",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".count-box",
      { opacity: 1, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".counts",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    gsap.from(".why-us-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);
  useEffect(() => {
    // GSAP animations for the About section
    gsap.from(".why-us-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);
  useEffect(() => {
    gsap.from(".more-about-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    gsap.from(".value-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  const teamMembers = [
    {
      name: "John Davis",
      role: "Creative Director",
      image: team2, // Replace with correct image path
      
    },
    {
      name: "Michael Carter",
      role: "Cinematographer",
      image: team2,
     
    },
    {
      name: "David Smith",
      role: "Video Editor",
      image: team2,
     
    },
  ];
  const features = [
    {
      icon: <FaPlus className="text-white-500 text-2xl mb-4" />,
      title: "Future-Ready Design",
      desc: "Our developments are built with evolving urban lifestyles in mind.",
    },
    {
      icon: <FaBullseye className="text-white-500 text-2xl mb-4" />,
      title: "Advanced Construction",
      desc: "Using modern technologies like Mivan formwork for stronger, safer structures.",
    },
    {
      icon: <FaHandshake className="text-white-500 text-2xl mb-4" />,
      title: "Essential Conveniences On-Site",
      desc: "Retail, parking, and basic services are all integrated into our community planning.",
    },
    {
      icon: <FaLightbulb className="text-white-500 text-2xl mb-4" />,
      title: "Uninterrupted Utilities",
      desc: "24/7 power backup and water supply make life seamless.",
    },
    {
      icon: <FaUsers className="text-white-500 text-2xl mb-4" />,
      title: "Peaceful Surroundings",
      desc: "Enjoy the benefits of urban access without sacrificing natural calm.",
    },
    {
      icon: <FaSearch className="text-white-500 text-2xl mb-4" />,
      title: "Value-Driven Living",
      desc: "Whether for personal use or investment, every square foot is designed for long-term value.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="main-home-section relative h-[100dvh] flex items-end justify-start overflow-hidden"
        style={{
          backgroundImage: `url(${living})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div className="h-screen flex flex-col justify-end item-center text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About Us
          </h1>
        </div>
      </section>

      {/* Section 1: About Our Agency-------------------------white */}
      <div
        id="about"
        className="w-full flex justify-center relative lg:py-[40px]  "
      >
        <div className="w-[95%] max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start z-50 gap-[25px] lg:gap-0">
          <div className="concept-heading w-[95%] h-full lg:w-[33%] flex flex-col md:flex-row lg:flex-col justify-between items-center md:items-start relative">
            <h2 className="capitalize xl:text-[50px] lg:text-[55px] text-[30px] font-bold leading-[1.2em] lg:sticky top-[50px] mb-7 lg:mb-[100px]">
              Crafting Landmarks,
              <br /> Building Trust
            </h2>
          </div>

          <div className="about-content w-[95%] lg:w-[67%] flex flex-col gap-[15px] lg:gap-[20px]">
            <h2 className="text-[16px] md:text-[20px] font-normal text-[#000000] leading-[1.2em] ">
              Welcome to Townbell India Landcraft Private Limited— where vision
              meets craftsmanship and every project reflects our commitment to
              thoughtful, future-ready living. As one of the emerging names in
              North India’s real estate space, we pride ourselves on delivering
              premium developments that blend smart planning, quality
              construction, and lifestyle-rich amenities.
            </h2>
            <p className="text-[22px] text-[#000000cc] font-light leading-[1.1em]">
              From vibrant residential communities to integrated townships and
              commercial spaces, our focus remains on creating environments that
              enhance life—not just house it. Strategically located projects,
              efficient layouts, modern infrastructure, and timely delivery form
              the foundation of every Townbell development. Whether you’re
              buying your first home or expanding your portfolio, you can trust
              us to deliver long-term value with a personal touch.
            </p>
            <div className="max-w-xl flex items-center justify-between">
              <div>
                <img
                  src={aboutIcon1}
                  alt="Team Member"
                  className="w-[9rem] h-auto rounded-full"
                />
                <p className="font-bold text-center">
                  Visionary
                  <br />
                  Creations Award
                </p>
              </div>
              <div>
                <img
                  src={aboutIcon2}
                  alt="Team Member"
                  className="w-[9rem] h-auto rounded-full"
                />
                <p className="font-bold text-center">
                  CineMasters
                  <br />
                  Excellence
                </p>
              </div>
              <div>
                <img
                  src={aboutIcon3}
                  alt="Team Member"
                  className="w-[9rem] h-auto rounded-full"
                />
                <p className="font-bold text-center">
                  ReelGenius
                  <br />
                  Award
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Our values-----------------------black */}
      <div
        className="bg-black text-white min-h-screen py-11 px-4"
        style={{
          backgroundImage: `url(${backgroundLines})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="max-w-5xl capitalize xl:text-[35px] lg:text-[32px] md:text-[30px] text-[28px] font-bold text-center mb-8 b-2 mx-auto leading-[45px]">
          Our Core Values <br/>The Heart of Every Townbell Project
        </h2>
        <div className="grid md:grid-cols-1 grid-cols-2  gap-8 max-w-4xl mx-auto">
          <div className="value-card flex flex-col mb-8 lg:mr-[260px] md:mr-[200px] mr-[100px]">
            <div className="text-6xl font-bold mr-4 text-gray-400">01</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Creativity</h2>
              <p className="text-gray-400">
                We approach each project with fresh ideas, design innovation,
                and a deep understanding of how people live, work, and connect.
              </p>
            </div>
          </div>
          <div className="value-card flex flex-col mb-8 lg:ml-[260px] md:ml-[200px] ml-[100px]">
            <div className="text-6xl font-bold mr-4 text-gray-400">02</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Quality</h2>
              <p className="text-gray-400">
                We’re committed to high standards in every brick laid—from
                materials to execution—ensuring durability, elegance, and
                performance.
              </p>
            </div>
          </div>
          <div className="value-card flex flex-col mb-8 lg:mr-[260px] md:mr-[200px] mr-[100px]">
            <div className="text-6xl font-bold mr-4 text-gray-400">03</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Collaboration</h2>
              <p className="text-gray-400">
                AtTownbell, we believe success is shared. We work closely with
                customers, partners, and communities to build with purpose and
                unity.
              </p>
            </div>
          </div>
          <div className="value-card flex flex-col mb-8 lg:ml-[260px] md:ml-[200px] ml-[100px]">
            <div className="text-6xl font-bold mr-4 text-gray-400">04</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Integrity</h2>
              <p className="text-gray-400">
                Transparency and trust are the cornerstones of our reputation.
                We do what we say and deliver what we promise—every time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3:Our Fantastic Team-----------------------white */}
      <section className="py-12 px-4">
        <div className="ml-4">
          <h2 className="text-4xl font-bold mb-8 capitalize">
            Peek Behind the Curtain: Meet Our Fantastic Team!
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border border-[#727272] p-3 overflow-hidden flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[350px] object-fill"
              />
              <div className="pt-4 w-full flex justify-between items-center">
                <h3 className="capitalize text-[18px] font-bold leading-1.5">
                  {member.name}
                </h3>
                <p className="capitalize text-[13px] text-[#999] tracking-wide mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 : Why us?  --------------------------black */}
      <div className="bg-black text-white py-10 px-4">
        <div className="max-w-7xl mx-auto border border-[#e9e9e9cc]  p-10">
          <div class className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={team1}
                style={{ backgroundSize: "contain" }}
                alt="Team at work"
                className="w-full h-full"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="capitalize text-3xl font-bold mb-8">
                Why Choose Townbell India Landcraft
              </h2>
              <b className="block mb-[10px]">• Prime Locations</b>
              <p className="mb-4 text-gray-400 text-[16px]">
                Our projects are carefully placed in rapidly developing,
                well-connected areas with high future potential.
              </p>
              <b className="block mb-[10px]">• Smart & Spacious Layouts</b>
              <p className="mb-4 text-gray-400 text-[16px]">
                We design homes that maximize natural light, ventilation, and
                liveable space for real everyday needs.
              </p>
              
              <b className="block mb-[10px]">• Amenities That Matter</b>
              <p className="mb-4 text-gray-400 text-[16px]">
                From lifestyle clubs and fitness zones to kids' play areas and
                wellness spaces—we build more than just walls.
              </p>

              <b className="block mb-[10px]">• On-Time Delivery</b>
              <p className="mb-4 text-gray-400 text-[16px]">
                Our team is committed to timelines, ensuring peace of mind and
                financial reliability for every buyer.
              </p>

             <b className="block mb-[10px]">• Transparent Dealings</b>
              <p className="mb-4 text-gray-400 text-[16px]">
                No hidden clauses. No last-minute surprises. Our communication
                and pricing are always clear and honest.
              </p>

              <b className="block mb-[10px]">• Built for Community Living</b>
              <p className="mb-4 text-gray-400 text-[16px]">
                Each project is designed to foster a sense of belonging with
                green areas, shared spaces, and secure environments.{" "}
              </p>

            </div>
          </div>

          <div className="bg-black text-white pt-8 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="capitalize text-3xl font-bold text-center mb-8">
                Wait! There’s more...
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((item, index) => (
                  <div key={index} className="more-about-item flex gap-2">
                    <div className="mt-[3px]">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
