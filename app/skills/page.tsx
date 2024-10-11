"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TagCloud } from "react-tagcloud";
import Nav from "@/components/nav";

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState("React");
  const [flipCards, setFlipCards] = useState({
    communication: false,
    teamwork: false,
    problemSolving: false,
  });

  const technicalSkills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 80 },
    { name: "AWS", level: 70 },
    { name: "TypeScript", level: 85 },
  ];

  const progressBarSkills = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "Git", percentage: 85 },
    { name: "Docker", percentage: 75 },
  ];

  const softSkills = [
    {
      name: "Communication",
      description: "Excellent verbal and written communication skills",
    },
    {
      name: "Teamwork",
      description:
        "Strong ability to collaborate and work in cross-functional teams",
    },
    {
      name: "Problem Solving",
      description: "Analytical thinker with creative problem-solving abilities",
    },
  ];

  const tagCloudData = [
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "Node.js", count: 28 },
    { value: "Express", count: 25 },
    { value: "MongoDB", count: 22 },
    { value: "Python", count: 20 },
    { value: "Django", count: 18 },
    { value: "PostgreSQL", count: 15 },
    { value: "GraphQL", count: 12 },
    { value: "Docker", count: 10 },
  ];

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills Hexagon Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="relative w-full h-80">
              {technicalSkills.map((skill, index) => {
                const angle = (Math.PI * 2 * index) / technicalSkills.length;
                const x = Math.cos(angle) * 40 + 50;
                const y = Math.sin(angle) * 40 + 50;
                return (
                  <div
                    key={skill.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="relative">
                      <svg height="80" width="80">
                        <polygon
                          points="40,0 74,20 74,60 40,80 6,60 6,20"
                          fill="rgba(59, 130, 246, 0.1)"
                          stroke="rgba(59, 130, 246, 0.5)"
                          strokeWidth="2"
                        />
                        <polygon
                          points="40,0 74,20 74,60 40,80 6,60 6,20"
                          fill="rgba(59, 130, 246, 0.6)"
                          stroke="rgba(59, 130, 246, 0.8)"
                          strokeWidth="2"
                          strokeDasharray="240"
                          strokeDashoffset={240 - (skill.level / 100) * 240}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-xs font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-xs">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Bars */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Proficiency</h3>
            {progressBarSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-blue-700">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Flip Cards for Soft Skills */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flip-card cursor-pointer ${
                    flipCards[
                      skill.name.toLowerCase() as keyof typeof flipCards
                    ]
                      ? "flipped"
                      : ""
                  }`}
                  onClick={() =>
                    setFlipCards({
                      ...flipCards,
                      [skill.name.toLowerCase() as keyof typeof flipCards]:
                        !flipCards[
                          skill.name.toLowerCase() as keyof typeof flipCards
                        ],
                    })
                  }
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">
                      <h4 className="text-xl font-semibold">{skill.name}</h4>
                    </div>
                    <div className="flip-card-back bg-blue-100 p-4 rounded-lg">
                      <p className="text-blue-800">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Selector */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Skill Spotlight</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {technicalSkills.map((skill) => (
                <button
                  key={skill.name}
                  className={`px-4 py-2 rounded-full ${
                    selectedSkill === skill.name
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } hover:bg-blue-600 hover:text-white transition-colors`}
                  onClick={() => setSelectedSkill(skill.name)}
                >
                  {skill.name}
                </button>
              ))}
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-800">
                {selectedSkill === "React" &&
                  "Proficient in building modern, responsive user interfaces with React."}
                {selectedSkill === "Node.js" &&
                  "Experienced in server-side JavaScript and building RESTful APIs."}
                {selectedSkill === "Python" &&
                  "Skilled in data analysis, scripting, and backend development with Python."}
                {selectedSkill === "SQL" &&
                  "Proficient in database design, complex queries, and data manipulation."}
                {selectedSkill === "AWS" &&
                  "Experienced in cloud architecture and deploying scalable applications on AWS."}
                {selectedSkill === "TypeScript" &&
                  "Proficient in writing type-safe JavaScript code and building robust applications."}
              </p>
            </div>
          </div>

          {/* Tag Cloud */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Skill Cloud</h3>
            <TagCloud
              minSize={12}
              maxSize={35}
              tags={tagCloudData}
              onClick={(tag) => alert(`'${tag.value}' was selected!`)}
            />
          </div>

          {/* Learning Speed Visualizer */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Learning Speed</h3>
            <div className="relative w-48 h-48 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 stroke-current"
                  strokeWidth="10"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                />
                <circle
                  className="text-blue-500  progress-ring__circle stroke-current"
                  strokeWidth="10"
                  strokeLinecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeDasharray="251.2"
                  strokeDashoffset="0"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-500">Fast</span>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Quickly adapts to new technologies and concepts
            </p>
          </div>
        </div>

        <style jsx>{`
          .flip-card {
            perspective: 1000px;
            height: 100px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          .flip-card.flipped .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
          .progress-ring__circle {
            transition: 0.35s stroke-dashoffset;
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
          }
        `}</style>
      </div>
    </>
  );
}
