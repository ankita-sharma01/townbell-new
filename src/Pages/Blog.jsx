// blog.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import blog1 from "../Assets/exterior/TRILLIUM_10.png";
import blog2 from "../Assets/exterior/TRILLIUM_2.png";
import blog3 from "../Assets/exterior/TRILLIUM_12.png";


const blogPosts = [
  {
    id: 1,
    title: 'Why the SkyTouch Towers Might Be Your Dream Home',
    date: '15 Jul 2025',
    image: blog1
  },
  {
    id: 2,
    title: 'When 3273 Sq. Ft. Feels Like a Palace: SkyTouch’s 5BHK Masterpiece',
    date: '17 Jul 2025',
    image: blog2
  },
  {
    id: 3,
    title: 'The Art of Living in a High-Rise Tower',
    date: '25 Jun 2025',
    image: blog3
  }
];

const Blog = () => {
  useEffect(() => {
    gsap.from(".blog-post", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold text-center mb-10">Blog</h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        {blogPosts.map(post => (
          <Link to={`/blog/${post.id}`} key={post.id} className="flex gap-4 items-center blog-post">
            <img src={post.image} alt={post.title} className="w-[120px] h-[80px] object-cover rounded-lg" />
            <div>
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
