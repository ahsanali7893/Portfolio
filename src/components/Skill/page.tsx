"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  const skills = [
    {
      name: "React JS",
      imgSrc: "./react.png",
      bgColor: "bg-gradient-to-br from-sky-500 to-sky-400",
    },
    {
      name: "NEXT JS",
      imgSrc: "./next.png",
      bgColor: "bg-gradient-to-br from-gray-400 to-gray-300",
    },
    {
      name: "TypeScript",
      imgSrc: "./ts.png",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-300",
    },
    {
      name: "JavaScript",
      imgSrc: "./js.png",
      bgColor: "bg-gradient-to-br from-yellow-600 to-red-300",
    },
    {
      name: "HTML",
      imgSrc: "./html.png",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-400",
    },
    {
      name: "CSS",
      imgSrc: "./css.png",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-500",
    },
    {
      name: "Tailwind",
      imgSrc: "./tailwind.png",
      bgColor: "bg-gradient-to-br from-blue-700 to-blue-400",
    },
    {
      name: "Bootstrap",
      imgSrc: "./bs.png",
      bgColor: "bg-gradient-to-br from-purple-500 to-sky-400",
    },
    {
      name: "GitHub",
      imgSrc: "./github.png",
      bgColor: "bg-gradient-to-br from-gray-400 to-gray-300",
    },
    {
      name: "Mantine",
      imgSrc: "./Mantine.png",
      bgColor: "bg-gradient-to-br from-sky-500 to-sky-400",
    },
    {
      name: "Git",
      imgSrc: "./git.png",
      bgColor: "bg-gradient-to-br from-red-400 to-orange-300",
    },
    {
      name: "Strapi",
      imgSrc: "./strapi.png",
      bgColor: "bg-gradient-to-br from-blue-400 to-red-300",
    },
  ];

  return (
    <section id="skill" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl px-3 mx-auto">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-cyan-600 text-primary sm:text-5xl lg:text-6xl">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-10 sm:grid-cols-2 md:gap-10 md:mt-12 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`group overflow-hidden rounded-xl shadow-lg ${skill.bgColor} px-8 py-10 text-center`}
            >
              <div className="mx-auto h-24 w-24 xl:h-20 xl:w-20 ">
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className={`cursor-pointer hover:filter  transition duration-300`}
                />
                {skill.name && (
                  <p className={`font-bold mt-2 text-black`}>{skill.name}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
