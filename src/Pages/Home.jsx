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
import { Navigation } from "swiper/modules";
import port1 from "../Assets/exterior/TRILLIUM_10.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import blog1 from "../Assets/exterior/TRILLIUM_10.png";
import blog2 from "../Assets/exterior/TRILLIUM_2.png";
import blog3 from "../Assets/exterior/TRILLIUM_12.png";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [portfolioItems, setPortfolioItems] = useState([
    {
      title: "GreenWaves",
      subtitle: "Eco-Warriors",
      image: port1,
    },
    {
      title: "Mystic Horizons",
      subtitle: "ModeElite",
      image: port1,
    },
    {
      title: "Pixel Fusion",
      subtitle: "Techno",
      image: port1,
    },
    {
      title: "EcoExplorer",
      subtitle: "GreenEarth",
      image: port1,
    },
    {
      title: "Urban Uplift",
      subtitle: "MetroScape",
      image: port1,
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

const images = [
  blog1,
   blog1,
    blog1,
  blog1,
 blog1,
  blog1,
 blog1,
   blog1,
];
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
  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      gsap.to(".portfolio-parent .portfolio-cards", {
        x: "-40%",
        scrollTrigger: {
          trigger: ".parent",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          trigger: ".portfolio-parent",
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

  // Concept cards animation
  useEffect(() => {
    const cards = document.querySelectorAll(".concept-cards .concept-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          "--gradient-x": "50%",
          duration: 0.7,
          ease: "power3.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          "--gradient-x": "0%",
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  // Concept card details toggle
  useEffect(() => {
    const cards = document.querySelectorAll(".concept-card");

    cards.forEach((card) => {
      const details = card.querySelector(".concept-card-details");

      card.addEventListener("click", () => {
        if (card.classList.contains("open")) {
          details.style.height = details.scrollHeight + "px";
          setTimeout(() => (details.style.height = "0px"), 10);
          card.classList.remove("open");
          card.querySelector(
            "button"
          ).innerHTML = `Learn More <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8)); color: var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8)); flex-shrink: 0;"><g color="var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8))" weight="thin"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-86.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"></path></g></svg>`;
        } else {
          details.style.height = details.scrollHeight + "px";
          card.classList.add("open");
          card.querySelector(
            "button"
          ).innerHTML = `Hide Detais <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8))" style="user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8)); color: var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8)); flex-shrink: 0;"><g color="var(--token-d9d01f21-7a47-443c-a8bc-56cdb453de6f, rgba(255, 255, 255, 0.8))" weight="thin"><path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-86.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"></path></g></svg>`;
          setTimeout(() => (details.style.height = "auto"), 400);
        }
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", () => {});
      });
    };
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
          start: "top bottom", // Start when top of section hits bottom of viewport
          end: "bottom top", // End when bottom of section hits top of viewport
          scrub: 1,
          markers: false,
        },
      });

      // Add each card to the timeline with sequential positioning
      blogCards.forEach((card, index) => {
        // Position each card to start below the viewport
        gsap.set(card, { y: window.innerHeight * (index + 1) });

        // Add to timeline with sequential delays
        blogTimeline.to(
          card,
          {
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          index * 0.3
        );
      });

      // After all cards are visible, move to bottom position
      blogTimeline.to(
        blogSection,
        {
          y: -window.innerHeight * 0.5,
          duration: 1,
        },
        ">"
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


  // grand vision-------------------------------------------------------
   



  // Add this blogData array
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
  const testimonialData = [
    {
      quote:
        "Working with Townbell was an absolute pleasure. Their attention to detail and creative vision brought our project to life in ways we couldn't have imagined.",
      name: "Sarah Johnson",
      role: "CEO, TechSolutions",
      image: "./Assets/Media/client1.jpg",
    },
    {
      quote:
        "The team's professionalism and expertise were evident throughout our collaboration. They delivered exceptional results on time and within budget.",
      name: "Michael Chen",
      role: "Marketing Director, GlobalCorp",
      image: "./Assets/Media/client2.jpg",
    },
    {
      quote:
        "From concept to final delivery, Townbell exceeded our expectations. Their innovative approach set our brand apart in a crowded market.",
      name: "Emma Rodriguez",
      role: "Creative Director, StyleHub",
      image: "./Assets/Media/client3.jpg",
    },
    {
      quote:
        "The quality of work and level of service we received was outstanding. Townbell truly understands how to tell a compelling visual story.",
      name: "David Wilson",
      role: "Founder, GreenEarth",
      image: "./Assets/Media/client4.jpg",
    },
  ];
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <div
        id="top"
        className="hero w-full h-screen flex flex-col items-center justify-center perspective-midrange"
      >
        <h1 className="syne text-[30px] lg:text-[50px] md:text-[40px] font-bold leading-[1em] text-white">
          Welcome to the Townbell
        </h1>
      </div>

      {/* Showreel Section */}
      <div className="parent w-full h-[fit-content] lg:h-[250vh] bg-[#0D0D0D] relative">
        <div className="showreel w-full h-[90vh] md:h-screen lg:sticky top-0 flex flex-col items-center justify-center">
          <div className="top-blur absolute w-full h-[134px] pointer-events-none top-[-133px] left-p"></div>

          <h1 className="syne text-[47px] lg:text-[150px] md:text-[100px] font-bold leading-[1em] text-transparent mb-[15px] lg:mb-[0] md:mb-[10px] lg:absolute top-0 pt-[40px]">
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
        className="portfolio-parent w-full lg:h-[350vh] relative"
      >
        <div className="portfolio w-full flex flex-col items-center gap-[40px] md:gap-[70px] sticky top-[30px] left-0 overflow-hidden">
          <div className="head w-[95%] lg:w-[1240px] flex flex-col md:flex-row items-center justify-between gap-[10px] lg:gap-0">
            <h2 className="syne text-[25px] lg:text-[30px] font-semibold text-black leading-[1em] text-center md:text-start">
              We Craft Master Piece
            </h2>
            <button className="syne hover-btn text-[14px] lg:text-[16px] font-bold leading-[1em] text-white rounded-[50px] py-[18px] px-[30px] lg:py-[17px] lg:px-[33px] cursor-pointer flex items-center gap-[8px] relative">
              <div className="red-circle w-[12px] h-[12px] bg-[#FF000D] rounded-[4px]"></div>
              <span>See All Projects</span>
            </button>
          </div>
          <div className="portfolio-cards w-[95%] md:w-full flex items-center justify-center lg:justify-[unset] flex-col lg:flex-row gap-[25px] lg:gap-[10px] lg:translate-x-[60vw]">
            {portfolioItems.map((item, index) => (
              <a href="#" key={index}>
                <div className="card w-[100%] lg:w-[425px] h-[375px] md:h-[425px] rounded-[2px] relative overflow-hidden">
                  <div className="syne card-cursor w-[115px] h-[115px] opacity-0 border-[1px] text-[13px] font-semibold leading-[1.2em] uppercase text-center flex items-center justify-center text-white border-solid border-[#8b8b8b] rounded-full absolute top-0 left-0 z-[1]">
                    Watch <br />
                    Full Property
                  </div>
                  <img
                    className="w-full h-full object-cover object-center"
                    src={item.image}
                    alt={item.title}
                  />
                  {/* <div className="text-overlay w-full h-full absolute top-0 left-0 flex flex-col justify-end p-[36px]">
                    <h3 className="syne text-[23px] text-white font-semibold leading-[1em]">
                      {item.title}
                    </h3>
                    <p className="inter text-[12px] text-white leading-[1.8em]">
                      {item.subtitle}
                    </p>
                  </div> */}
                </div>
              </a>
            ))}
          </div>

          {/* <div className="portfolio-cards w-[95%] md:w-full flex items-center justify-center lg:justify-[unset] flex-col lg:flex-row gap-[25px] lg:gap-[10px] lg:translate-x-[60vw]">
            <a href="#">
              <div className="card w-[100%] lg:w-[425px] h-[375px] md:h-[425px] rounded-[51px] relative overflow-hidden">
                <div className="syne card-cursor w-[115px] h-[115px] opacity-0 border-[1px] text-[13px] font-semibold leading-[1.2em] uppercase text-center flex items-center justify-center text-white border-solid border-[#8b8b8b] rounded-full absolute top-0 left-0 z-[1]">
                  Watch <br />
                  Full Property
                </div>
                <img
                  className="w-full h-full object-cover object-center"
                  src="./Assets/exterior/TRILLIUM_12.png"
                  alt=""
                />
                <div className="text-overlay w-full h-full absolute top-0 left-0 flex flex-col justify-end p-[36px]">
                  <h3 className="syne text-[23px] text-white font-semibold leading-[1em]">
                    GreenWaves
                  </h3>
                  <p className="inter text-[12px] text-white leading-[1.8em]">
                    Eco-Warriors
                  </p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="card active w-[100%] lg:w-[425px] h-[375px] md:h-[425px] rounded-[51px] relative overflow-hidden">
                <div className="syne card-cursor w-[115px] h-[115px] opacity-0 border-[1px] text-[13px] font-semibold leading-[1.2em] uppercase text-center flex items-center justify-center text-white border-solid border-[#8b8b8b] rounded-full absolute top-0 left-0 z-[1]">
                  Watch <br />
                  Full Property
                </div>
                <img
                  className="w-full h-full object-cover object-center"
                  src="./Assets/FLAT_INTIER/kitchen 2.jpg"
                  alt=""
                />
                <div className="text-overlay w-full h-full absolute top-0 left-0 flex flex-col justify-end p-[36px]">
                  <h3 className="syne text-[23px] text-white font-semibold leading-[1em]">
                    Mystic Horizons
                  </h3>
                  <p className="inter text-[12px] text-white leading-[1.8em]">
                    ModeElite
                  </p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="card w-[100%] lg:w-[425px] h-[375px] md:h-[425px] rounded-[51px] relative overflow-hidden">
                <div className="syne card-cursor w-[115px] h-[115px] opacity-0 border-[1px] text-[13px] font-semibold leading-[1.2em] uppercase text-center flex items-center justify-center text-white border-solid border-[#8b8b8b] rounded-full absolute top-0 left-0 z-[1]">
                  Watch <br />
                  Full Property
                </div>
                <img
                  className="w-full h-full object-cover object-center"
                  src="./Assets/FLAT_INTIER/bathroom 2.jpg"
                  alt=""
                />
                <div className="text-overlay w-full h-full absolute top-0 left-0 flex flex-col justify-end p-[36px]">
                  <h3 className="syne text-[23px] text-white font-semibold leading-[1em]">
                    Pixel Fusion
                  </h3>
                  <p className="inter text-[12px] text-white leading-[1.8em]">
                    Techno
                  </p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="card w-[100%] lg:w-[425px] h-[375px] md:h-[425px] rounded-[51px] relative overflow-hidden">
                <div className="syne card-cursor w-[115px] h-[115px] opacity-0 border-[1px] text-[13px] font-semibold leading-[1.2em] uppercase text-center flex items-center justify-center text-white border-solid border-[#8b8b8b] rounded-full absolute top-0 left-0 z-[1]">
                  Watch <br />
                  Full Property
                </div>
                <img
                  className="w-full h-full object-cover object-center"
                  src="./Assets/CLUB_INTERIOR/GYM.png"
                  alt=""
                />
                <div className="text-overlay w-full h-full absolute top-0 left-0 flex flex-col justify-end p-[36px]">
                  <h3 className="syne text-[23px] text-white font-semibold leading-[1em]">
                    EcoExplorer
                  </h3>
                  <p className="inter text-[12px] text-white leading-[1.8em]">
                    GreenEarth
                  </p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="card w-[100%] lg:w-[425px] h-[375px] md:h-[425px] rounded-[51px] relative overflow-hidden">
                <div className="syne card-cursor w-[115px] h-[115px] opacity-0 border-[1px] text-[13px] font-semibold leading-[1.2em] uppercase text-center flex items-center justify-center text-white border-solid border-[#8b8b8b] rounded-full absolute top-0 left-0 z-[1]">
                  Watch <br />
                  Full Property
                </div>
                <img
                  className="w-full h-full object-cover object-center"
                  src="./Assets/FLAT_INTIER/bedroom 2 front.jpg"
                  alt=""
                />
                <div className="text-overlay w-full h-full absolute top-0 left-0 flex flex-col justify-end p-[36px]">
                  <h3 className="syne text-[23px] text-white font-semibold leading-[1em]">
                    Urban Uplift
                  </h3>
                  <p className="inter text-[12px] text-white leading-[1.8em]">
                    MetroScape
                  </p>
                </div>
              </div>
            </a>
          </div> */}
        </div>
      </div>

      {/* about */}
      <section className="w-full">
        {/* Top Section with Content and Background */}
        <div
          className="bg-cover bg-center text-white py-[40px] px-8 pb-0 md:px-20"
          style={{
            backgroundImage: `url(${gardenView})`,
          }}
        >
          <div className="about-section rounded-xl w-full">
            <div className="about-content">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
                About Town Bell
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                With a strong legacy of excellence, Town Bell is one of the most
                reputed and reliable builders in the Trichy region.
              </p>
            </div>
            <p className="p-tag text-m text-gray-300">
              Backed by years of experience and a proven track record, we have
              successfully delivered a range of high-quality residential
              projects that combine strategic location, architectural finesse,
              and modern amenities. At Town Bell, we don’t just build homes — we
              build communities, relationships, and long-term value for our
              buyers.
            </p>
          </div>
        </div>

        {/* Bottom Image Section */}
        {/* <div>
          <img
            src={townBuilding}
            alt="Town Bell Garden"
            className="w-full h-[100vh]"
          />
        </div> */}
        <div className="about-image-container h-[100vh] overflow-hidden">
          <img
            src={townBuilding}
            alt="Town Bell Garden"
            className="about-section-image w-full h-full object-cover transform scale-[1.2] origin-center"
          />
        </div>
      </section>

      {/* Concept Section */}
      <div
        id="albums"
        className="concept-parent w-full flex justify-center relative mt-[60px] bg-black pt-[40px]"
      >
        <img
          className="w-full h-full object-cover object-center absolute top-0 left-0"
          src="./Assets/Media/Concept-completion-bg-lines.svg"
          alt=""
        />

        <div className="concept w-[var(--box-width)] flex flex-col lg:flex-row items-center lg:items-[unset] gap-[25px] md:gap-0 z-50 pb-[60px]">
          <div className="concept-heading h-full w-[95%] lg:w-[33%] flex flex-col lg:flex-col md:flex-row justify-between items-center md:items-start relative">
            <h2 className="syne text-[25px] lg:text-[30px] font-semibold text-white leading-[1.2em] lg:sticky top-[50px] mb-7 lg:mb-[100px] text-center md:text-start">
              Embrace Your JOURNEY, <br />
              Define Your LEGACY.
            </h2>

            <button className="syne hover-btn text-[14px] lg:text-[16px] font-bold leading-[1em] text-white rounded-[50px] py-[18px] px-[30px] lg:py-[17px] lg:px-[33px] cursor-pointer flex items-center gap-[8px] relative">
              <div className="red-circle w-[12px] h-[12px] bg-[#FF000D] rounded-full"></div>
              <span>Explore Services</span>
            </button>
          </div>

          <div className="concept-cards w-[95%] lg:w-[67%] flex flex-col gap-[30px]">
            <div className="concept-card w-full p-[40px] rounded-[30px] flex flex-col items-start gap-[21px] cursor-pointer relative">
              <img
                className="w-[220px] h-[260px] absolute top-[-180px] right-[30px] rounded-[20px]"
                src="./Assets/exterior/AERIAL 1 .png"
                alt=""
              />

              <h3 className="syne text-[26px] text-transparent font-semibold leading-[1em]">
                A Home of Comfort:
              </h3>
              <p className="inter text-[19px] font-normal leading-[1.5em]">
                Welcome to a space where comfort isn't just built in, it's
                thoughtfully woven into every corner of your home. From airy
                living rooms and serene bedrooms to high-quality finishes and
                intelligent layouts — every inch reflects timeless luxury and
                personal comfort.
              </p>
              <div className="concept-card-details w-full flex flex-col md:flex-row gap-[0px] md:gap-[175px]">
                <p className="inter text-[12px] font-normal leading-[2em] text-white uppercase">
                  • Contact: <br />
                  • info@townbell.in <br />
                  • www.rera.punjab.gov.in
                  <br />
                  • www.townbell.in
                  <br />
                </p>
              </div>
              <button className="inter text-[12px] text-white leading-[1em] uppercase py-[5px] pl-[20px] pr-[3px] rounded-[27px] flex items-center gap-[5px]">
                Learn More
                <IoArrowForwardCircleOutline />
              </button>
            </div>

            <div className="concept-card w-full p-[40px] rounded-[30px] flex flex-col items-start gap-[21px] cursor-pointer relative">
              <img
                className="w-[220px] h-[260px] absolute top-[-180px] right-[30px] rounded-[20px]"
                src="./Assets/exterior/TRI_11 NIGHT.png"
                alt=""
              />

              <h3 className="syne text-[26px] text-transparent font-semibold leading-[1em]">
                A Life of Celebration:
              </h3>
              <p className="inter text-[19px] font-normal leading-[1.5em]">
                Spacious rooms that invite warmth to peaceful surroundings that
                inspire joy — this is where your family finds ease in the
                everyday and excitement in every occasion.
              </p>
              <div className="concept-card-details w-full flex flex-col md:flex-row gap-[0px] md:gap-[175px]">
                <p className="inter text-[12px] font-normal leading-[2em] text-white uppercase">
                  • Contact: <br />
                  • info@townbell.in <br />
                  • www.rera.punjab.gov.in
                  <br />
                  • www.townbell.in
                  <br />
                </p>
              </div>
              <button className="inter text-[12px] text-white leading-[1em] uppercase py-[5px] pl-[20px] pr-[3px] rounded-[27px] flex items-center gap-[5px]">
                Learn More
                <IoArrowForwardCircleOutline />
              </button>
            </div>

            <div className="concept-card w-full p-[40px] rounded-[30px] flex flex-col items-start gap-[21px] cursor-pointer relative">
              <img
                className="w-[220px] h-[260px] absolute top-[-180px] right-[30px] rounded-[20px]"
                src="./Assets/exterior/TRILLIUM_2.png"
                alt=""
              />

              <h3 className="syne text-[26px] text-transparent font-semibold leading-[1em]">
                RERA Number: PBRERA-SAS80-PR1207
              </h3>
              <p className="inter text-[19px] font-normal leading-[1.5em]">
                Location: Kharar–Kurali Highway, Punjab
              </p>
              <div className="concept-card-details w-full flex flex-col md:flex-row gap-[0px] md:gap-[175px]">
                <p className="inter text-[12px] font-normal leading-[2em] text-white uppercase">
                  • Contact: <br />
                  • info@townbell.in <br />
                  • www.rera.punjab.gov.in
                  <br />
                  • www.townbell.in
                  <br />
                </p>
              </div>
              <button className="inter text-[12px] text-white leading-[1em] uppercase py-[5px] pl-[20px] pr-[3px] rounded-[27px] flex items-center gap-[5px]">
                Learn More
                <IoArrowForwardCircleOutline />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* grand vision */}
  <section className="bg-white w-full overflow-hidden">
      {/* Top Text Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start text-left justify-between">
        <div className="max-w-xl items-start text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">A Grand Vision</h1>
          <p className="text-lg leading-relaxed mb-2">
            At Townbell, we are not just constructing buildings; we are crafting dreams into reality...we are not just constructing buildings; we are crafting dreams into reality...
          </p>
          <p className="text-lg leading-relaxed">
            Investing in Townbell means you are choosing a future filled with luxury...Investing in Townbell means you are choosing a future filled with luxury...
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img src={siteLogo} alt="Logo" className="w-40 mx-auto" />
        </div>
      </div>

      {/* Auto Scrolling Image Strip */}
      <div className="relative w-full overflow-hidden whitespace-nowrap border-t border-gray-100">
        <div className="animate-marquee inline-block">
          {images.concat(images).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx}`}
              className="inline-block w-[500px] h-[300px] object-cover mx-2 rounded-[2px]"
            />
          ))}
        </div>
      </div>
      
    </section>
      

      {/* Testimonials Section */}

      <div className="testimonials w-full flex flex-col items-center gap-[40px] md:gap-[40px] py-[60px] bg-gray-50">
        <h2 className="syne text-[25px] lg:text-[30px] font-semibold text-black leading-[1em] text-center">
          What Our Clients Say
        </h2>

        <div className="testimonial-slider w-[95%] lg:w-[700px]">
          <Slider {...testimonialSettings}>
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="p-4">
                <div className="testimonial-card w-full h-[300px] md:h-[350px] p-[30px] rounded-[2px] bg-white shadow-lg flex flex-col justify-between">
                  <p className="inter text-[15px] md:text-[17px] font-normal leading-[1.7em] italic text-gray-700">
                    "{testimonial.quote}"
                  </p>
                  <div className="client-info flex items-center gap-[15px] mt-6">
                    <div className="client-avatar w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#FF000D]">
                      <img
                        className="w-full h-full object-cover"
                        src={testimonial.image}
                        alt="Client"
                      />
                    </div>
                    <div>
                      <h4 className="syne text-[18px] font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="inter text-[13px] text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* blogs */}
      <div id="blogs" className="blog-section w-full py-[40px] bg-white">
        <div className="w-[95%] lg:w-[1240px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-[50px]">
            <h2 className="syne text-[25px] lg:text-[30px] font-semibold text-black leading-[1em]">
              Insights & Inspiration
            </h2>
            <button className="syne hover-btn text-[14px] lg:text-[16px] font-bold leading-[1em] text-white rounded-[50px] py-[18px] px-[30px] lg:py-[17px] lg:px-[33px] cursor-pointer flex items-center gap-[8px] relative mt-4 md:mt-0">
              <div className="red-circle w-[12px] h-[12px] bg-[#FF000D] rounded-[4px]"></div>
              <span>View All Articles</span>
            </button>
          </div>

          <div className="relative min-h-[100vh]">
            {" "}
            {/* Add this wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map((blog, index) => (
                <div key={index} className="blog-card">
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
                  <h3 className="syne text-[20px] font-semibold mb-3 leading-tight">
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
