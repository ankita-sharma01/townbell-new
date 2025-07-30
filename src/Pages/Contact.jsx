import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6fc] p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
        
        {/* Left - Form */}
        <div className="p-8 md:p-10 bg-[#f4f9ff]">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in touch</h2>
          <p className="text-gray-600 text-sm mb-8">
            Whether you're ready to kick off a new project, have questions about our services, we’d love to hear from you!
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Contact"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" // Replace with actual image path
            alt="Contact Us"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
