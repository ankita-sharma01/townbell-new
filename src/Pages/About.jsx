// src/pages/About.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);
  
  // Initialize animations
  useEffect(() => {
    // Hero section animations
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom"
        }
      }
    );
    
    // Floating element animation
    gsap.to('.floating-element', {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Section content fade-up animations
    gsap.utils.toArray('.fade-up').forEach(section => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        }
      );
    });
    
    // Counter animations
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
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
            }
          });
        }
      });
    });
    
    // Team member animations
    gsap.utils.toArray('.team-member').forEach((member, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      
      gsap.fromTo(member, 
        { opacity: 0, x: direction },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: member,
            start: "top 85%"
          }
        }
      );
    });
    
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Team data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Chief Architect",
      bio: "With over 15 years of experience, Alex leads our design team with innovative approaches to sustainable architecture.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria Rodriguez",
      role: "Project Director",
      bio: "Maria oversees all major projects, ensuring they meet our high standards for quality and client satisfaction.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Chen",
      role: "Engineering Lead",
      bio: "David's expertise in structural engineering has been crucial in bringing our most ambitious designs to life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Sustainability Officer",
      bio: "Sarah ensures all our projects meet the highest environmental standards and incorporate green technologies.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        ref={heroRef}
      >
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Us</h1>
          
          {/* Floating Element */}
          <div className="floating-element mx-auto bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-md border border-white border-opacity-30">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
            <p className="text-white text-lg">Building the future since 2010</p>
          </div>
        </div>
      </section>

      {/* Section 1: Shaping Tomorrow */}
      <section 
        className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
        ref={contentRef}
      >
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Shaping Tomorrow: A Global Titan in Construction
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 text-center">
            <p>We are not just building structures—we are scripting skylines.</p>
            <p>A colossus in concrete, we blend vision with virtuosity.</p>
            <p>In every brick lies a blueprint of the future, bold and timeless.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Empowering Brands */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Empowering brands through excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey is driven by a commitment to deliver beyond expectations. 
              Backed by a team of visionaries and builders, we merge cutting-edge 
              techniques with sustainable practices to create spaces that endure and inspire.
            </p>
          </div>
          
          <div 
            className="grid grid-cols-2 gap-6 fade-up"
            ref={statsRef}
          >
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 counter" data-target="10">0</div>
              <div className="mt-2 text-gray-600">Years of Activity</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 counter" data-target="24">0</div>
              <div className="mt-2 text-gray-600">Awards</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 counter" data-target="240">0</div>
              <div className="mt-2 text-gray-600">Employees</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 counter" data-target="400">0</div>
              <div className="mt-2 text-gray-600">Happy Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Meet the Team */}
      <section 
        className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50"
        ref={teamRef}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600">The Minds Behind the Mission</p>
          </div>
          
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`team-member grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                  />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;