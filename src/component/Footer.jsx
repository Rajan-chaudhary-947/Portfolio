import React from "react";
import { FaXTwitter, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa6";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Rajan Chaudhary</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-sky-400 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaCode />, link: "https://www.naukri.com/code360/profile/RajanS947" },
            { icon: <FaXTwitter />, link: "https://x.com/Rajanch947" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rajanchaudhary947" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/chaudhary_rajan_947" },
            { icon: <FaCode />, link: "https://leetcode.com/u/chaudharyrajan947" },

          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-sky-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rajan Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;