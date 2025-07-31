import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import siteLogo from "../Assets/TownLogo/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";
import Slider from "react-slick";
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
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import blog1 from "../Assets/exterior/TRILLIUM_10.png";
import blog2 from "../Assets/exterior/TRILLIUM_2.png";
import blog3 from "../Assets/exterior/TRILLIUM_12.png";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const blogSectionRef = useRef(null);
  const blogCardsRef = useRef([]);
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

  const images = [blog1, blog1, blog1, blog1, blog1, blog1, blog1, blog1];
  const slideImages = [
    "./Assets/exterior/TRILLIUM_10.png",
    "./Assets/exterior/TRILLIUM_2.png",
    "./Assets/exterior/TRILLIUM_12.png",
    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   if (window.matchMedia("(min-width: 1024px)").matches) {
  //     // Pin the hero section while showreel scrolls over it
  //     gsap.to(".hero", {
  //       scrollTrigger: {
  //         trigger: ".hero",
  //         start: "top top",
  //         end: "+=800",
  //         scrub: true,
  //         pin: true,
  //         anticipatePin: 1,
  //         pinSpacing: false,
  //       },
  //     });

  //     // Showreel animation (scrolls over hero)
  //     gsap.to(".showreel", {
  //       y: () => -window.innerHeight * 0.8, // Adjust this value to control how much shows beneath
  //       scrollTrigger: {
  //         trigger: ".hero",
  //         start: "top top",
  //         end: "+=600",
  //         scrub: true,
  //       },
  //     });

  //     // Content animation (fades in showreel content)
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: ".parent",
  //           start: "top top",
  //           end: "bottom bottom",
  //           scrub: 2,
  //         },
  //       })
  //       .to(".showreel h1", { autoAlpha: 0 }, 0)
  //       .to(
  //         ".showreel video",
  //         {
  //           scale: 1,
  //           width: "100%",
  //           height: "100%",
  //         },
  //         0
  //       );
  //   }
  // }, []);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      // Pin the hero section while animations occur
      gsap.to(".hero", {
        scrollTrigger: {
          trigger: ".hero",
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
      gsap.to(".portfolio-parent .portfolio-cards", {
        x: "-40%",
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          end: "+=2000",
          scrub: 2,
          trigger: ".portfolio-parent",
        },
      });

      // Horizontal scroll animation
      gsap.to(".portfolio-cards", {
        x: () => {
          // Calculate total width to scroll
          const cards = document.querySelector(".portfolio-cards");
          return -(cards.scrollWidth - window.innerWidth);
        },
        scrollTrigger: {
          trigger: ".portfolio-parent",
          start: "top top",
          end: "+=2000",
          scrub: true,
        },
      });

      // About section overlay animation
      gsap.to(".about-section", {
        y: "-30%",
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

  // Inside your HomePage component, add these settings for the slider
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  };

  // Add this useEffect hook for the blog animation

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const blogSection = document.querySelector(".blog-section");
      const blogCards = gsap.utils.toArray(".blog-card");

      // Create a timeline for sequential animation
      const blogTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".blog-section",
          start: "top top", // Start when top of section hits top of viewport
          end: "+=2000", // Longer duration to allow sequential reveal
          scrub: 1,
          pin: true,
          markers: false,
          anticipatePin: 1,
        },
      });

      // Position cards initially
      gsap.set(blogCards, {
        opacity: 0,
        y: 100,
        scale: 0.9,
      });

      // Add card animations to timeline with sequential delays
      blogCards.forEach((card, index) => {
        blogTimeline.to(
          card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          index * 0.5 // 1 second delay between each card
        );
      });

      // After all cards are visible, unpin and allow normal scrolling
      blogTimeline.to(
        {},
        {
          duration: 0.1,
          onComplete: () => {
            ScrollTrigger.getById("blog-pin")?.kill(); // Remove the pin
          },
        }
      );
    } else {
      // Mobile animation (unchanged)
      const blogCards = gsap.utils.toArray(".blog-card");
      gsap.fromTo(
        blogCards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".blog-section",
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);
  // Add cards to ref array
  const addToRefs = (el) => {
    if (el && !blogCardsRef.current.includes(el)) {
      blogCardsRef.current.push(el);
    }
  };

  // grand vision-------------------------------------------------------
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

  // Add this blogData array
  // Blog data
  const blogData = [
    {
      title: "The Future of Sustainable Architecture",
      description:
        "Exploring how green building practices are shaping the future of urban development.",
      image: blog1,
      date: "June 15, 2023",
    },
    {
      title: "Maximizing Small Spaces",
      description:
        "Innovative design solutions for compact urban living without compromising on style.",
      image: blog2,
      date: "July 2, 2023",
    },
    {
      title: "Luxury Living Redefined",
      description:
        "How modern amenities are transforming the concept of luxury in residential projects.",
      image: blog3,
      date: "August 10, 2023",
    },
  ];

  // Create this testimonial data array
  const testimonials = [
    {
      text: "Finally, a well designed product for learning chess. Nothing out there is as simple and painless.",
      name: "Abhishek Gupta",
      title: "Lead UX Designer at Lumosity.",
      image: blog1, // Replace with actual image paths
    },
    {
      text: "A really slick new start-up for anyone who has wanted to either learn chess or brush up on their chess strategy.",
      name: "Ilya Pinchuk",
      title: "Web Developer and SDA for U of I.",
      image: blog1,
    },
    {
      text: "Ever wanted to learn chess? A beautiful, very guided tool: Chesscademy.",
      name: "Patrick McConlogue",
      title: "Journeyman.",
      image: blog1,
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <div
        id="top"
        className="hero w-full h-screen flex flex-col items-center justify-center perspective-midrange"
      >
        <h1 className="archivo  text-[30px] lg:text-[50px] md:text-[40px] font-bold leading-[1em] text-white">
          Welcome to the Townbell
        </h1>
      </div>

      {/* Showreel Section */}
      <div className="parent w-full h-[fit-content] lg:h-[250vh] bg-[#0D0D0D] relative">
        <div className="showreel w-full h-[90vh] md:h-screen lg:sticky top-0 flex flex-col items-center justify-center">
          <div className="top-blur absolute w-full h-[134px] pointer-events-none top-[-133px] left-p"></div>

          <h1 className="archivo  text-[47px] lg:text-[150px] md:text-[100px] font-bold leading-[1em] text-transparent mb-[15px] lg:mb-[0] md:mb-[10px] lg:absolute top-0 pt-[40px]">
            TOWNBELL
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
        className="portfolio-parent w-full lg:h-[350vh] relative bg-white z-9"
      >
        <div className="portfolio w-full flex flex-col items-center gap-[20px] md:gap-[40px] sticky top-[100px] left-0 overflow-hidden">
          <div className="head w-[95%] lg:w-[1340px] flex flex-col md:flex-row items-center justify-center gap-[20px] lg:gap-10">
            <h2 className="archivo  text-[35px] lg:text-[60px] font-semibold text-black leading-[1em] text-center md:text-start">
              WELCOME TO OUR CLUBHOUSE
            </h2>
          </div>
          <div className="portfolio-cards w-[95%] md:w-full flex items-center justify-center lg:justify-[unset] flex-col lg:flex-row gap-[25px] lg:gap-[50px] lg:translate-x-[60vw]">
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
        </div>
      </div>

      {/* about */}
      <section className="w-full relative z-10 -mt-[100vh]">
        {/* Top Section with Content and Background */}
        <div
          className="bg-cover bg-center text-white py-[40px] px-8 pb-0 md:px-20"
          style={{
            backgroundImage: `url(${gardenView})`,
          }}
        >
          <div className="about-section rounded-xl w-full pt-[20px]">
            <div className="about-content text-left">
              <h2 className="text-[35px] lg:text-[60px] font-bold mb-4 ">
                About Townbell
              </h2>
            </div>
            <p className="p-tag">
              Backed by years of experience and a proven track record, we have
              successfully delivered a range of high-quality residential
              projects that combine strategic location, architectural finesse,
              and modern amenities. At Town Bell, we don’t just build homes — we
              build communities, relationships, and long-term value for our
              buyers.
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
        {/* Top Text Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start text-left justify-between mb-[30px]">
          <div className="max-w-xl items-start text-left">
            <h1 className="text-5xl md:text-6xl font-[700] mb-4">
              A Grand Vision
            </h1>
            <p className="text-[16px] font-[500] text-[#1e1e1e] leading-[1.2em] mb-2">
              At Townbell, we are not just constructing buildings; we are
              crafting dreams into reality. A Building, specifically designed
              for those who seek elegance and comfort, where every detail is
              meticulously planned to ensure that residents enjoy a lifestyle of
              unparalleled sophistication.
            </p>
            <p className="text-[16px] font-[500] text-[#1e1e1e] leading-[1.2em]">
              Investing in Townbell means you are choosing a future filled with
              luxury and quality-an assurance backed by our extensive experience
              and dedication to excellence.
            </p>
          </div>
        </div>

        {/* Auto Scrolling Image Strip */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="scrolling-container overflow-hidden">
            <div className="scrolling-content flex">
              {images.map((src, idx) => (
                <div key={idx} className="scrolling-item mx-4 flex-shrink-0">
                  <img
                    src={src}
                    alt={`Gallery ${idx}`}
                    className="w-[500px] h-[300px] object-cover rounded-[2px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="bg-white text-black py-20 px-[20px] md:px-12">
        <h2 className="text-[35px] lg:text-[60px] font-semibold text-center mb-4">
          What people are saying
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Chesscademy has inspired tens of thousands of people around the world
          to learn chess.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-gray-100 p-6 rounded-xl max-w-sm mx-auto shadow-md"
            >
              <p className="text-base text-center">{t.text}</p>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-gray-100" />
              <div className="mt-12 flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover mb-2"
                />
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-sm text-gray-500 text-black">{t.title}</p>
              </div>
              <p className="font-semibold text-black">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* blogs */}

      <div id="blogs" className="blog-section w-full py-[40px] bg-white">
        <div className="w-[95%] lg:w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-[50px]">
            <h2 className="archivo  text-[35px] lg:text-[60px] font-semibold text-black leading-[1em]">
              Insights & Inspiration
            </h2>
            <button className="archivo  hover-btn text-[14px] lg:text-[16px] font-bold leading-[1em] text-white rounded-[50px] py-[18px] px-[30px] lg:py-[17px] lg:px-[33px] cursor-pointer flex items-center gap-[8px] relative mt-4 md:mt-0">
              <div className="red-circle w-[12px] h-[12px] bg-[#FF000D] rounded-[4px]"></div>
              <span>View All Articles</span>
            </button>
          </div>

          <div className="relative min-h-[100vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map((blog, index) => (
                <div
                  key={index}
                  className="blog-card"
                  style={{
                    transform: "translateY(100px) scale(0.9)",
                    opacity: 0,
                  }}
                >
                  <div className="relative overflow-hidden rounded-[2px] mb-5 h-[500px]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                      <span className="inter text-white text-sm">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                  <h3 className="archivo  text-[20px] font-semibold mb-3 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="inter text-gray-600 mb-4">{blog.description}</p>
                  <a
                    href="#"
                    className="inter text-[14px] font-medium text-black flex items-center gap-2 group"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
