import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import townBuilding from "../Assets/TownLogo/about-img (1).png";
import gardenView from "../Assets/TownLogo/about-top-img.png";
import "../output.css";
import "swiper/css";
import "swiper/css/navigation";
import port1 from "../Assets/CLUB_INTERIOR/BANQUET.png";
import port2 from "../Assets/CLUB_INTERIOR/GAMEROOM.png";
import port3 from "../Assets/CLUB_INTERIOR/GYM.png";
import port4 from "../Assets/CLUB_INTERIOR/RECEPTION.png";
import joy1 from "../Assets/fla-6/fla-1.jpg";
import joy2 from "../Assets/fla-6/fla-2.jpg";
import joy3 from "../Assets/fla-6/fla-3.jpg";
import joy4 from "../Assets/fla-6/fla-4.jpg";
import joy5 from "../Assets/fla-6/fla-5.jpg";
import joy6 from "../Assets/fla-6/fla-6.jpg";
import img1 from "../Assets/fla-6/fla-6.jpg";
import img2 from "../Assets/fla-6/fla-6.jpg";
import img3 from "../Assets/fla-6/fla-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const blogCardsRef = useRef([]);
   const textRef = useRef(null);
  const boxesRef = useRef(null);
  const imageScrollRef = useRef(null);
  const [portfolioItems, setPortfolioItems] = useState([
    {
      title: "GreenWaves",
      subtitle: "Eco-Warriors",
      image: port1,
    },
    {
      title: "Mystic Horizons",
      subtitle: "ModeElite",
      image: port2,
    },
    {
      title: "Pixel Fusion",
      subtitle: "Techno",
      image: port3,
    },
    {
      title: "EcoExplorer",
      subtitle: "GreenEarth",
      image: port4,
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [joy1, joy2, joy3, joy4, joy5, joy6];
  const slideImages = [
    "./Assets/exterior/TRILLIUM_10.png",
    "./Assets/exterior/TRILLIUM_2.png",
    "./Assets/exterior/TRILLIUM_12.png",
    // Add more images as needed
  ];
  const boxes =[
              { title: "Confidence in quality", icon: "🏗️" },
              { title: "Clarity in communication", icon: "🗣️" },
              { title: "Commitment to timelines", icon: "⏰" },
              { title: "Comfort in living", icon: "🏡" },
            ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      // Pin the hero section while animations occur
      gsap.to(".main-about", {
        scrollTrigger: {
          trigger: ".main-about",
          start: "top top",
          end: "+=800", // Extended duration for smoother transition
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: false,
        },
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      tl.to(
        ".showreel h1",
        {
          scale: "0",
        },
        "a"
      ).to(
        ".showreel video",
        {
          scale: "1",
        },
        "a"
      );
    }
  }, []);

  // portfolio------------------------
  useEffect(() => {
    if (window.matchMedia("(min-width: 1224px)").matches) {
      gsap.to(".portfolio-parent .scrolling-containers", {
        // scrollTrigger: {
        //   trigger: ".parent",
        //   start: "top top",
        //   end: "+=2000",
        //   scrub: 2,
        //   trigger: ".portfolio-parent",
        // },
        scrollTrigger: {
          trigger: ".portfolio-parent",
          start: "top top",
          end: "+=800", // Extended duration for smoother transition
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: false,
        },
      });

      // Horizontal scroll animation----------------------------------------------------------------
      gsap.to(".portfolio-cards", {
        x: () => {
          // Calculate total width to scroll
          const cards = document.querySelector(".portfolio-cards");
          return -(cards.scrollWidth - window.innerWidth);
        },
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top top",
          end: "+=2000",
          scrub: true,
        },
      });

      // About section overlay animation
      gsap.to(".portfolio-parent", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".portfolio-parent",
          start: "center center",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  // Add this useEffect hook for the about section image zoom
  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      gsap.to(".about-section-image", {
        scale: 1.2,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  // Auto scroll images-------------------------------------------------------
  useEffect(() => {
    // Setup for the Grand Vision auto-scrolling image strip
    if (window.matchMedia("(min-width: 768px)").matches) {
      const container = document.querySelector(".scrolling-container");
      const scrollContent = document.querySelector(".scrolling-content");

      // Calculate total width
      const items = gsap.utils.toArray(".scrolling-item");
      const itemWidth = items[0].offsetWidth;
      const gap = 20; // Gap between items
      const totalWidth = (itemWidth + gap) * items.length;

      // Duplicate content for seamless looping
      scrollContent.innerHTML += scrollContent.innerHTML;

      // GSAP animation for continuous scrolling
      gsap.to(scrollContent, {
        x: -totalWidth,
        duration: 40, // Adjust duration for speed
        ease: "none",
        repeat: -1, // Infinite loop
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }
  }, []);


   // Scroll & entrance animations
  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });

    gsap.from(boxesRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: boxesRef.current,
        start: "top 85%",
      },
    });

    // Infinite image scroll
    const scrollTimeline = gsap.timeline({ repeat: -1 });
    scrollTimeline.to(imageScrollRef.current, {
      x: "-50%",
      ease: "linear",
      duration: 20,
    });
  }, []);
  return (
    <div className="home-page bg-black">
      <div className="main-home-section relative">
        <div
          id="top"
          className="hero w-full h-[120vh] flex flex-col items-center justify-start relative"
        >
          <h1 className="archivo text-[30px] lg:text-[45px] md:text-[40px] font-bold leading-[1em] text-white ml-[40px] mt-[150px] md:mt-[137px] lg:mt-[130px]">
            Your Trusted Real Estate
            <br /> Builder In Tricity.
          </h1>
        </div>
        <div className="main-about bg-black text-white py-[40px] px-8 pb-0 md:px-20">
          <div className="about-home flex flex-col md:flex-row justify-between item-center w-full">
            <div className="about-home-content relative text-left">
              <h2 className="text-[35px] lg:text-[62px] font-bold">
                About
                <br /> Town Bell
              </h2>
            </div>
            <div className="max-w-3xl text-[18px]  border-l border-[#494949] pl-[40px]">
              <p>
                With a strong legacy of excellence, Town Bell is one of the most
                reputed and reliable builders in the Tricity region. Backed by
                years of experience and a proven track record, we have
                successfully delivered a series of high-quality residential
                projects that combine smart design, robust construction, and
                lifestyle-driven amenities.
              </p>
              <p className="mt-4">
                At Town Bell, we don’t just build homes—we build communities,
                relationships, and long-term value for our buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Showreel Section */}
      <div className="parent w-full h-[fit-content] lg:h-[250vh] bg-[#0D0D0D] relative">
        <div className="showreel w-full h-[90vh] md:h-screen lg:sticky top-0 flex flex-col items-center justify-center">
          <div className="top-blur absolute w-full h-[134px] pointer-events-none top-[-133px] left-p"></div>

          <h1 className="archivo  text-[44px] lg:text-[140px] md:text-[90px] font-bold leading-[1em] text-transparent mb-[15px] lg:mb-[0] md:mb-[10px] lg:absolute top-0 pt-[40px]">
            AMAYRA TRILLIUM
          </h1>
          <video
            autoPlay
            muted
            loop
            className="w-[95%] h-[60vh] md:h-full"
            src="https://framerusercontent.com/assets/t3oWwHTiHPdqvISgXglF9dJecA.mp4"
          ></video>
        </div>
      </div>

      {/* Portfolio Section */}
      <div
        id="projects"
        className="portfolio-parent w-full lg:h-[100vh] relative bg-white z-9"
      >
        <div className="portfolio w-full flex flex-col items-centersticky top-[0px] left-0 overflow-hidden">
          <div className="about-portfolio flex flex-col md:flex-row justify-between item-center w-full p-[40px]">
            <div className="about-portfolio-content relative text-left">
              <h2 className="text-[35px] lg:text-[62px] font-bold">
                A LIFE OF EASY,
                <br /> A HOME OF JOY
              </h2>
            </div>
            <div className="max-w-3xl text-[18px] pl-[40px] flex item-center">
              <p>
                With a strong legacy of excellence, Town Bell is one of the most
                reputed and reliable builders in the Tricity region. Backed by
                years of experience and a proven track record, we have
                successfully delivered a series of high-quality residential
                projects that combine smart design, robust construction, and
                lifestyle-driven amenities.
              </p>
            </div>
          </div>

          <section className="bg-white w-full overflow-hidden pb-[20px]">
            {/* Auto Scrolling Image Strip */}
            <div className="relative w-full overflow-hidden py-2">
              <div className="scrolling-container overflow-hidden">
                <div className="scrolling-content flex">
                  {images.map((src, idx) => (
                    <div
                      key={idx}
                      className="scrolling-item mx-4 flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt={`Gallery ${idx}`}
                        className="w-[430px] lg:w-[370px] h-[430px] md:h-[370px] object-cover rounded-[2px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* about */}
      <section className="club w-full relative z-10 mt-[40px] ">
        {/* Top Section with Content and Background */}
        <div
          className="bg-cover bg-center text-white py-[40px] px-8 pb-0 md:px-20"
          style={{
            backgroundImage: `url(${gardenView})`,
          }}
        >
          <div className="about-section rounded-xl w-full">
            <div className="about-content relative text-left">
              <h2 className="text-[35px] lg:text-[40px] font-bold ">
                TRILLIUM
                <br />
                CLUBHOUSE
              </h2>
            </div>
            <p className="p-tag">
              Whether you're a first-time homebuyer or an investor, choosing
              Town Bell means choosing:
            </p>
          </div>
        </div>

        <div className="about-image-container h-[100vh] overflow-hidden">
          <img
            src={townBuilding}
            alt="Town Bell Garden"
            className="about-section-image w-full h-full object-cover transform scale-[1.2] origin-center"
          />
        </div>
      </section>

      {/* Grand Vision Section */}
      <section className="bg-white w-full overflow-hidden py-16 pb-[20px]">
        {/* Auto Scrolling Image Strip */}
        <div className="portfolio-cards w-[95%] md:w-full flex items-center justify-center lg:justify-[unset] flex-col lg:flex-row gap-[15px] lg:gap-[50px] lg:translate-x-[60vw]">
          {portfolioItems.map((item, index) => (
            <a href="#" key={index}>
              <div className="card w-[450px] lg:w-[650px] h-[270px] md:h-[370px] rounded-[2px] relative overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* build trust */}
      {/* <section className="trust p-[40px] flex justify-center item-center">
        <div className="trust-content relative text-left text-white flex flec-col">
          <h2 className="text-[35px] lg:text-[62px] font-bold">
            Built On Trust,Backed
            <br /> By Experience
          </h2>
          <p>
            Whether You're a first-time homebuyer or
            <br /> or an investor, choosing Town Bell means choosing:
          </p>
        </div>

        <div>sgdfg</div>
      </section> */}


          {/* Top Info Section */}
      <section className="py-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Text Left */}
          <div className="flex-1 space-y-4" ref={textRef}>
            <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight">
              Built on Trust. <br /> Backed by Experience.
            </h2>
            <p className="text-gray-300">
              Whether you're a first-time homebuyer or an investor, choosing Town Bell means choosing:
            </p>
          </div>

          {/* 4 Feature Boxes */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6" ref={boxesRef}>
            {boxes.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-600 p-4 rounded-md hover:border-white transition duration-300"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior Image Section */}
      <section className="bg-white text-black py-20 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Text */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold">Exterior <br /> Amayra Trillium</h2>
            <p className="text-gray-700">
              Welcome to our world of creativity, where every project starts with a dream and ends with a space that feels like home.
            </p>
          </div>

          {/* Image slider - infinite scroll */}
          <div className="flex-1 overflow-hidden">
            <div className="flex w-[200%] gap-4" ref={imageScrollRef}>
              {[img1, img2, img3, img1, img2, img3].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`exterior-${idx}`}
                  className="w-1/3 object-cover rounded-md shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
