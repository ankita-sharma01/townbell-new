import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style.css";
import townBuilding from "../Assets/TownLogo/about-img (1).png";
import gardenView from "../Assets/TownLogo/about-top-img.png";
import "../output.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import port1 from "../Assets/exterior/TRILLIUM_10.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

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
        <div>
          <img
            src={townBuilding}
            alt="Town Bell Garden"
            className="w-full h-[100vh]"
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

      {/* Testimonials Section */}
      <div className="testimonials w-full flex flex-col items-center gap-[40px] md:gap-[70px] py-[60px]">
        <h2 className="syne text-[25px] lg:text-[30px] font-semibold text-black leading-[1em] text-center">
          What Our Clients Say
        </h2>

        <div className="testimonial-slider w-[95%] lg:w-[1240px]">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="testimonial-card w-full h-[300px] md:h-[350px] p-[30px] rounded-[30px] flex flex-col justify-between">
                <p className="inter text-[15px] font-normal leading-[1.5em]">
                  "Working with Townbell was an absolute pleasure. Their
                  attention to detail and creative vision brought our project to
                  life in ways we couldn't have imagined."
                </p>
                <div className="client-info flex items-center gap-[15px]">
                  <div className="client-avatar w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="./Assets/Media/client1.jpg"
                      alt="Client"
                    />
                  </div>
                  <div>
                    <h4 className="syne text-[16px] font-semibold">
                      Sarah Johnson
                    </h4>
                    <p className="inter text-[12px]">CEO, TechSolutions</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card w-full h-[300px] md:h-[350px] p-[30px] rounded-[30px] flex flex-col justify-between">
                <p className="inter text-[15px] font-normal leading-[1.5em]">
                  "The team's professionalism and expertise were evident
                  throughout our collaboration. They delivered exceptional
                  results on time and within budget."
                </p>
                <div className="client-info flex items-center gap-[15px]">
                  <div className="client-avatar w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="./Assets/Media/client2.jpg"
                      alt="Client"
                    />
                  </div>
                  <div>
                    <h4 className="syne text-[16px] font-semibold">
                      Michael Chen
                    </h4>
                    <p className="inter text-[12px]">
                      Marketing Director, GlobalCorp
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card w-full h-[300px] md:h-[350px] p-[30px] rounded-[30px] flex flex-col justify-between">
                <p className="inter text-[15px] font-normal leading-[1.5em]">
                  "From concept to final delivery, Townbell exceeded our
                  expectations. Their innovative approach set our brand apart in
                  a crowded market."
                </p>
                <div className="client-info flex items-center gap-[15px]">
                  <div className="client-avatar w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="./Assets/Media/client3.jpg"
                      alt="Client"
                    />
                  </div>
                  <div>
                    <h4 className="syne text-[16px] font-semibold">
                      Emma Rodriguez
                    </h4>
                    <p className="inter text-[12px]">
                      Creative Director, StyleHub
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-card w-full h-[300px] md:h-[350px] p-[30px] rounded-[30px] flex flex-col justify-between">
                <p className="inter text-[15px] font-normal leading-[1.5em]">
                  "The quality of work and level of service we received was
                  outstanding. Townbell truly understands how to tell a
                  compelling visual story."
                </p>
                <div className="client-info flex items-center gap-[15px]">
                  <div className="client-avatar w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="./Assets/Media/client4.jpg"
                      alt="Client"
                    />
                  </div>
                  <div>
                    <h4 className="syne text-[16px] font-semibold">
                      David Wilson
                    </h4>
                    <p className="inter text-[12px]">Founder, GreenEarth</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* blogs */}
      <div>blogs</div>
    </div>
  );
};

export default HomePage;
  