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
import img1 from "../Assets/fla-6/exterio-1.jpg";
import img2 from "../Assets/fla-6/exterio-2.jpg";
import img3 from "../Assets/fla-6/exterio-3.jpg";
import img4 from "../Assets/fla-6/exterio-4.jpg";
import img5 from "../Assets/fla-6/exterio-5.jpg";
import video from "../Assets/Media/videoplayback.mp4";
import icon1 from "../Assets/fla-6/icon-1.png";
import icon2 from "../Assets/fla-6/icon-2.png";
import icon3 from "../Assets/fla-6/icon-3.png";
import icon4 from "../Assets/fla-6/icon-4.png";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const blogCardsRef = useRef([]);
  const headingRef = useRef(null);
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
  const boxes = [
    { title: "Confidence in quality", icon: icon1 },
    { title: "Clarity in communication", icon: icon2 },
    { title: "Commitment to timelines", icon: icon3 },
    { title: "Comfort in living", icon: icon4 },
  ];

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
      // gsap.to(".horizontal-cards", {
      //   x: () => {
      //     // Calculate total width to scroll
      //     const cards = document.querySelector(".horizontal-cards");
      //     return -(cards.scrollWidth - window.innerWidth);
      //   },
      //   scrollTrigger: {
      //     trigger: ".about-image-container",
      //     start: "top top",
      //     end: "+=4000",
      //     scrub: true,
      //   },
      // });
      // ScrollTrigger.create({
      //   trigger: ".about-horizontal",
      //   start: "top top",
      //   end: "bottom bottom",
      //   pin: true,
      //   onEnter: () => {
      //     // Start horizontal scroll animation
      //     gsap.to(".horizontal-cards", {
      //       x: () => -(document.querySelector(".horizontal-cards").scrollWidth - window.innerWidth),
      //       duration: 5,
      //       ease: "none"
      //     });
      //   }
      // });

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

  useEffect(() => {
    const cards = document.querySelector(".horizontal-cards");

    gsap.to(".horizontal-cards", {
      x: () => -(cards.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".about-horizontal",
        start: "top top",
        end: () => `+=${cards.scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  // Add this useEffect hook for the about section image zoom
  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      gsap.to(".about-section-image", {
        scale: 1.1,
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
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
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
          className="hero w-full md:h-[120vh] h-[100vh] flex flex-col items-center justify-start relative"
        >
          <h1 className="archivo text-[35px] lg:text-[65px] md:text-[50px] font-bold leading-[1em] text-white md:ml-[40px] ml-[20px] mt-[150px] md:mt-[137px] lg:mt-[170px]">
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
            <div className="max-w-3xl text-[18px]  md:border-l border-0  border-[#494949] md:pl-[40px] pl-0">
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
          <h1 className="archivo  text-[40px] lg:text-[140px] md:text-[90px] font-bold leading-[1em] text-transparent mb-[15px] lg:mb-[0] md:mb-[10px] lg:absolute top-0 pt-[40px]">
            AMAYRA TRILLIUM
          </h1>
          <video
            autoPlay
            muted
            loop
            className="w-[95%] h-[60vh] md:h-full"
            // src="https://framerusercontent.com/assets/t3oWwHTiHPdqvISgXglF9dJecA.mp4"
            src={video}
          ></video>
        </div>
      </div>

      {/* Portfolio Section */}
      <div
        id="projects"
        className="portfolio-parent w-full lg:h-[100vh] relative bg-white z-9"
      >
        <div className="portfolio w-full flex flex-col items-centersticky top-[0px] left-0 overflow-hidden">
          <div className="about-portfolio flex flex-col md:flex-row justify-between item-center w-full pt-[40px] px-[40px] pb-[20px]">
            <div className="about-portfolio-content relative text-left">
              <h2 className="text-[35px] lg:text-[62px] font-bold">
                A LIFE OF EASY,
                <br /> A HOME OF JOY
              </h2>
            </div>
            <div className="max-w-3xl text-[18px] md:pl-[40px] pl-[0px] items-center flex">
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

          <section className="bg-white w-full overflow-hidden">
            {/* Auto Scrolling Image Strip */}
            <div className="relative w-full overflow-hidden py-4">
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
                        className="w-[370px] lg:w-[431px] h-[370px] md:h-[430px] object-cover rounded-[2px]"
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
              <h2 className="text-[35px] lg:text-[62px] font-bold ">
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

        <div className="about-image-container lg:h-[100vh] h-[50vh] overflow-hidden">
          <img
            src={townBuilding}
            alt="Town Bell Garden"
            className="about-section-image w-full h-full object-cover transform scale-[1.2] origin-center"
          />
        </div>
      </section>

      {/* Grand Vision Section */}
      <div className="about-horizontal">
        <div className="bg-white">
          <div className="flex flex-col md:flex-row justify-between item-center w-full p-[40px]">
            <div className="about-horizontal-content relative text-left">
              <h2 className="text-[35px] lg:text-[62px] font-bold">
                A LIFE OF EASY,
                <br /> A HOME OF JOY
              </h2>
            </div>
            <div className="max-w-3xl text-[18px] md:pl-[40px] pl-[0px] items-center flex">
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
        </div>
        <section className="bg-white w-full overflow-hidden pb-[40px]">
          {/* Horizontal Scrolling Image Strip */}
          <div className="horizontal-cards w-[95%] md:w-full flex items-center justify-center lg:justify-[unset] flex-col lg:flex-row gap-[15px] lg:gap-[50px] lg:translate-x-[60vw]">
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
      </div>

      {/* build trust */}
      <section className="bannerb py-[60px] px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Text Left */}
          <span className="space-y-4 mt-3">
            <h3
              ref={headingRef}
              className="flex text-[22px] capitalize md:text-[32px] text-white font-bold leading-tight"
            >
              Built on Trust. Backed <br /> by Experience.
            </h3>
            <p className="text-gray-300 text-[16px]">
              Whether you're a first-time homebuyer or <br /> an investor,
              choosing Town Bell means choosing:
            </p>
          </span>

          {/* 4 Feature Boxes */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {boxes.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-center gap-2 border border-gray-600 py-6 p-2 text-white transition duration-300"
              >
                <div className="svg-div">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="flex flex-col p-1">
                  <h4 className="text-white-300">{item.title}</h4>
                  {/* DASH LINE */}
                  <div className="w-10 h-[2px] bg-white my-3"></div>
                  <p className="text-[14px] text-white-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior Image Section */}
      <section className="bg-white text-black py-[40px] px-[20px] md:px-[40px]">
        <div className="w-full flex flex-col md:flex-row gap-10">
          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-[42px] md:text-[62px] font-bold">
              Exterior <br /> Amayra Trillium
            </h2>
            <p className="text-gray-700">
              Welcome to our world of creativity, where every project starts
              with a dream and ends with a space that feels like home.
            </p>
          </div>

          {/* Image slider - infinite scroll */}
          <div className="flex-2 overflow-hidden">
            <div className="flex w-[200%] gap-4" ref={imageScrollRef}>
              {[img1, img2, img3, img4, img5].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`exterior-${idx}`}
                  className="w-1/3 object-cover shadow-lg"
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
