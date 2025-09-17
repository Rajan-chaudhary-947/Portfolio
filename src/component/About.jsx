import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from "../assets/Rajan chaudhary.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-16 lg:mt-24 "
    >
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center">
        {/* Right Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I'm
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-sky-400 mb-4 leading-tight">
            Rajan chaudhary
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-cyan-400 leading-tight">
            <span className="text-white">a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Software Developer',
                'Coder',
                'Software Engineer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-cyan-400">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer with a passion for creating and
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions. Also playing with DSA using Java.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1XeOwD7Ee3KIOeahgrLf3bvhLYL7PcaJ8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #2563eb, #1e40af)',
              boxShadow: '0 0 2px #2563eb, 0 0 2px #2563eb, 0 0 40px #2563eb',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Left Side  */}
        <div className="md:w-1/2 flex justify-center md:justify-start md:mr-5">
          <Tilt
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-[28rem] md:h-[28rem] border-4 border-sky-300 rounded-full"
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rajan chaudhary"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(56,189,248,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
