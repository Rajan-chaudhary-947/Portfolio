import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { course } from "../constants";

const CARD_WIDTH = 320;
const GAP = 48; // px, matches gap-8
const TOTAL_WIDTH = course.length * CARD_WIDTH + (course.length - 1) * GAP;
const VIEWPORT_WIDTH = 0.75;

const Course = () => {
  const targetRef = useRef(null);
  const scrollSectionHeight = Math.max(
    100,
    ((TOTAL_WIDTH / (window.innerWidth * VIEWPORT_WIDTH)) * 100)
  );

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${Math.min(70, (course.length - 1) * 20)}%`]
  );

  return (
    <section
      id="courses"
      ref={targetRef}
      style={{ height: "180vh", position: "relative" }}
    >
      {/* Section Title */}
      <div className="text-center mb-8 sticky top-0 z-20 pt-12 bg-[#050414] bg-opacity-90">
        <h2 className="text-4xl font-bold text-white">COURSES</h2>
        <div className="w-32 h-1 bg-sky-400 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my completed courses and certifications.
        </p>
      </div>
      {/* Sticky horizontal scroll area with gradient background */}
      <div className="sticky top-[12rem] md:top-[10rem] h-[85vh] flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-12 px-[5vw] md:px-[10vw] touch-pan-x"
        >
          {course.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-80 mt-6 sm:max-w-md p-4 sm:p-8 mt-4 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(56,189,248,0.3)] transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col mb-4">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <h4 className="text-md text-sky-400">{item.org}</h4>
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              </div>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Course;
