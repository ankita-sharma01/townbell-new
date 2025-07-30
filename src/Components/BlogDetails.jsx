// BlogDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import blog1 from "../Assets/exterior/TRILLIUM_10.png";
import blog2 from "../Assets/exterior/TRILLIUM_2.png";
import blog3 from "../Assets/exterior/TRILLIUM_12.png";

const blogPosts = [
  {
    id: 1,
    title: 'Why the SkyTouch Towers Might Be Your Dream Home',
    date: '15 Jul 2025',
    image: blog1,
    content: 'This is the full content for SkyTouch Towers...'
  },
  {
    id: 2,
    title: 'When 3273 Sq. Ft. Feels Like a Palace: SkyTouch’s 5BHK Masterpiece',
    date: '17 Jul 2025',
    image: blog2,
    content: 'This is the full content for the 5BHK palace...'
  },
  {
    id: 3,
    title: 'The Art of Living in a High-Rise Tower',
    date: '25 Jun 2025',
    image: blog3,
    content: 'This is the full content for living in a tower...'
  }
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) return <p>Blog not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={post.image} alt={post.title} className="w-full h-[300px] object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <p className="text-lg leading-7">{post.content}</p>
    </div>
  );
};

export default BlogDetails;
