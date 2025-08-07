// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import float from "../Assets/amyra/float-logo.png";
import living from "../Assets/amyra/living-1.jpeg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import team1 from "../Assets/about/team1.avif";
import backgroundLines from "../Assets/about/background-lines.svg";
import aboutIcon1 from "../Assets/about/about-img1.avif";
import aboutIcon2 from "../Assets/about/about-img2.avif";
import aboutIcon3 from "../Assets/about/about-img3.avif";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
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
      image: team1, // Replace with correct image path
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "Michael Carter",
      role: "Cinematographer",
      image: team1,
      facebook: "#",
      linkedin: "#",
    },
    {
      name: "David Smith",
      role: "Video Editor",
      image: team1,
      facebook: "#",
      linkedin: "#",
    },
  ];

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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Us
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

      {/* Section 1: About Our Agency-------------------------white */}
      <div
        id="about"
        className="w-full flex justify-center relative lg:py-[40px]  "
      >
        <div className="w-[95%] max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start z-50 gap-[25px] lg:gap-0">
          <div className="concept-heading w-[95%] h-full lg:w-[33%] flex flex-col md:flex-row lg:flex-col justify-between items-center md:items-start relative">
            <h2 className="capitalize text-[30px] font-semibold leading-[1.2em] lg:sticky top-[50px] mb-7 lg:mb-[100px]">
              About Our Agency
            </h2>

            
          </div>

          <div className="about-content w-[95%] lg:w-[67%] flex flex-col gap-[15px] lg:gap-[30px]">
            <div className="max-w-xl flex items-center justify-between">
              <div>
                <img
                  src={aboutIcon1}
                  alt="Team Member"
                  className="w-16 h-16 rounded-full"
                />
                <p className="font-bold">
                  Visionary
                  <br />
                  Creations Award
                </p>
              </div>
              <div>
                <img
                  src={aboutIcon2}
                  alt="Team Member"
                  className="w-16 h-16 rounded-full"
                />
                <p className="font-bold">
                  CineMasters
                  <br />
                  Excellence
                </p>
              </div>
              <div>
                <img
                  src={aboutIcon3}
                  alt="Team Member"
                  className="w-16 h-16 rounded-full"
                />
                <p className="font-bold">
                  ReelGenius
                  <br />
                  Award
                </p>
              </div>
            </div>
            <h2 className="font-['Inter'] text-[30px] md:text-[36px] text-[#00000080] font-light leading-[1.2em] tracking-[-1.5px] md:tracking-[-3px]">
              Established in 2015, we have dedicated ourselves to{" "}
              <span className="text-black">
                crafting captivating visual narratives
              </span>{" "}
              defined by creativity, innovation, and an unwavering commitment to{" "}
              <span className="text-black">
                excellence in video production.
              </span>
            </h2>
            <p className="font-['Inter'] text-[17px] text-[#000000cc] font-light leading-[1.4em]">
              Our mission is clear: to transform ideas into compelling visual
              stories. We believe that every project is an opportunity to create
              something extraordinary. Whether it's a corporate video, a
              commercial, an event coverage, or an animation, we approach each
              endeavor with creativity, enthusiasm, and a commitment to
              exceeding our clients' expectations.
            </p>
            <div className="counts w-full flex items-center justify-center lg:justify-start flex-wrap mt-[0px] lg:mt-[40px]">
              <div className="count-box w-full md:w-[40%] flex items-center justify-center relative p-12 my-[40px]">
                <h3 className="text-[90px] text-[#0000006b] font-bold">15+</h3>
                <p className="w-full text-[17px] font-bold uppercase text-center absolute top-[50%] left-[100%] -translate-x-[50%] translate-y-[-50%]">
                  Years of experience
                </p>
              </div>

              <div className="count-box w-full md:w-[40%] flex items-center justify-center relative p-12 my-[40px]">
                <h3 className="text-[90px] text-[#0000006b] font-bold">200+</h3>
                <p className="  w-full text-[17px] font-bold uppercase text-center absolute top-[50%] left-[100%] -translate-x-[50%] translate-y-[-50%]">
                  Repeated Clients
                </p>
              </div>

              <div className="count-box w-full md:w-[40%] flex items-center justify-center relative p-12 my-[40px]">
                <h3 className="text-[90px] text-[#0000006b] font-bold">478</h3>
                <p className="  w-full text-[17px] font-bold uppercase text-center absolute top-[50%] left-[100%] -translate-x-[50%] translate-y-[-50%]">
                  Completed Projects
                </p>
              </div>

              <div className="count-box w-full md:w-[40%] flex items-center justify-center relative p-12 my-[40px]">
                <h3 className="text-[90px] text-[#0000006b] font-bold">350+</h3>
                <p className="  w-full text-[17px] font-bold uppercase text-center absolute top-[50%] left-[100%] -translate-x-[50%] translate-y-[-50%]">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Our values-----------------------black */}
      <div
        className="bg-black text-white min-h-screen py-16 px-4"
        style={{
          backgroundImage: `url(${backgroundLines})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="capitalize text-xl md:text-2xl font-bold text-center mb-12 text-center inline-block pb-2">
          Our Values: The Secret Sauce in Every StoryStream Creation!
        </h2>
        <div className="grid md:grid-cols-1 grid-cols-2  gap-8 max-w-6xl mx-auto">
          <div className="value-card flex items-center mb-8 relative">
            <div className="text-6xl mr-4 text-gray-400">01</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Creativity</h2>
              <p className="text-gray-400">
                We believe in the power of imagination and creative thinking. We
                strive to infuse innovation and originality into everything we
                do, producing unique and captivating video content.
              </p>
            </div>
          </div>
          <div className="value-card flex items-center mb-8">
            <div className="text-6xl mr-4 text-gray-400">02</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Quality</h2>
              <p className="text-gray-400">
                Excellence is non-negotiable. We are committed to delivering
                top-notch video production services that meet and exceed our
                clients' expectations, from concept to final product.
              </p>
            </div>
          </div>
          <div className="value-card flex items-center mb-8">
            <div className="text-6xl mr-4 text-gray-400">03</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Collaboration</h2>
              <p className="text-gray-400">
                We value teamwork and collaboration. We work closely with our
                clients, understanding their vision and goals, to ensure that
                every project is a true collaboration resulting in success.
              </p>
            </div>
          </div>
          <div className="value-card flex items-center mb-8">
            <div className="text-6xl mr-4 text-gray-400">04</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Integrity</h2>
              <p className="text-gray-400">
                Trust and honesty are at the heart of our agency. We maintain
                the highest ethical standards in all our interactions, ensuring
                transparency, reliability, and long-lasting relationships with
                our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3:Our Fantastic Team-----------------------white */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-[#999] tracking-wide mt-1 uppercase">
                  {member.role}
                </p>

                <div className="mt-6 w-full space-y-3">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-[#222] text-sm py-3 px-4 rounded-full hover:bg-[#333] transition"
                  >
                    <div className="flex items-center gap-2">
                      <FaFacebookF />
                      <span>Facebook</span>
                    </div>
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-[#222] text-sm py-3 px-4 rounded-full hover:bg-[#333] transition"
                  >
                    <div className="flex items-center gap-2">
                      <FaLinkedinIn />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 : Why us?  --------------------------black */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why us?</h2>
          <div
            class
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={team1}
                alt="Team at work"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="mb-6">
                People hire us not just because we're good at what we do
                (spoiler: we are!), but because we bring the 'wow' and 'wow
                again' to every project. We're the team that believes in making
                the process as enjoyable as the final product.
              </p>
              <p className="mb-6">
                Imagine us as the life of the party, but at work. People choose
                us because we're not your typical 'suit and tie' video crew.
                We're more like your "let's roll up our sleeves and make
                something amazing" kind of team. We bring that extra spark of
                excitement to every project.
              </p>
              <p className="mb-6">
                We're the friendly faces who turn your ideas into eye-popping
                video magic.
              </p>
              <p className="text-gray-400">
                From adding a sprinkle of fun to a dash of creativity, we've got
                the secret sauce that keeps our clients coming back for more.
                So, why hire us? Because we're not just your video crew; we're
                your partners in making dreams come true!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-12">
            Wait! There’s more...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="more-about-item text-center">
              <div className="text-orange-500 text-4xl mb-4">✚</div>
              <h4 className="text-xl font-semibold mb-2">
                Exceptional Creativity
              </h4>
              <p>
                Clients choose us for our unparalleled creative prowess. We
                breathe life into ideas, turning them into visually stunning,
                memorable videos.
              </p>
            </div>
            <div className="more-about-item text-center">
              <div className="text-orange-500 text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">
                Proven Track Record
              </h4>
              <p>
                Our portfolio is a testament to our success. We’ve consistently
                delivered outstanding results, earning the trust of clients time
                and again.
              </p>
            </div>
            <div className="more-about-item text-center">
              <div className="text-orange-500 text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold mb-2">
                Collaborative Approach
              </h4>
              <p>
                We don’t just work for our clients; we work with them. Our
                collaborative spirit ensures that each project is a true
                partnership, vision coming to life.
              </p>
            </div>
            <div className="more-about-item text-center">
              <div className="text-orange-500 text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold mb-2">
                Innovative Solutions
              </h4>
              <p>
                We’re known for pushing boundaries and finding innovative
                solutions. Clients appreciate our ability to think outside the
                box and deliver beyond expectations.
              </p>
            </div>
            <div className="more-about-item text-center">
              <div className="text-orange-500 text-4xl mb-4">👥</div>
              <h4 className="text-xl font-semibold mb-2">Exceptional Team</h4>
              <p>
                Our team is a powerhouse of talent, experience, and passion.
                Clients choose us for the depth of expertise and dedication we
                bring to every project.
              </p>
            </div>
            <div className="more-about-item text-center">
              <div className="text-orange-500 text-4xl mb-4">🔍</div>
              <h4 className="text-xl font-semibold mb-2">
                Attention to Detail
              </h4>
              <p>
                We obsess over the finer points. Every frame, every edit, every
                sound is carefully crafted to ensure the highest quality and
                maximum impact.
              </p>
            </div>
          </div>
          <div className="text-right mt-4">
            <span className="text-gray-500">Made in Framer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
