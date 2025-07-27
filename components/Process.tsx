"use client";
import React, { useState } from "react";
import { FaBoxOpen, FaTruck, FaHeart } from "react-icons/fa";
import { GiScissors } from "react-icons/gi";

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      icon: (
        <FaBoxOpen
          size={40}
          className="text-gray-700 transition-all duration-300"
        />
      ),
      title: "Easy Online Ordering",
      description: "Pick what you love and order online. It's that simple.",
      detail:
        "Our fashion design experts personally review every custom order to ensure perfect fit and style recommendations for your unique requirements.",
    },
    {
      icon: (
        <GiScissors
          size={40}
          className="text-gray-700 transition-all duration-300"
        />
      ),
      title: "Professional Tailoring & Alterations",
      description: "We make it just for you with care and attention to detail.",
      detail:
        "Each custom piece is handcrafted by experienced tailors with 15+ years in fashion design, featuring 12 quality control checkpoints for perfect results.",
    },
    {
      icon: (
        <FaTruck
          size={40}
          className="text-gray-700 transition-all duration-300"
        />
      ),
      title: "Fast & Secure Delivery",
      description: "Your beautiful new piece arrives safely at your door.",
      detail:
        "Every order includes premium gift packaging, detailed care instructions, and our signature customer service guarantee.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-400 to-gray-20 py-20 px-6 md:px-20 text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gray-300 rounded-full opacity-50 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-300 rounded-full opacity-30 translate-x-20 translate-y-20"></div>

      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 relative z-10">
        How Our Custom Fashion Design Process Works
      </h2>

      <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        Simple steps to get your perfect custom piece
      </p>

      {/* Process timeline connector */}
      <div className="hidden md:block h-1 bg-gray-400 absolute left-1/4 right-1/4 top-1/2 z-0 transform -translate-y-20"></div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-md transition-all duration-300 ${
              activeStep === index
                ? "transform -translate-y-2 shadow-xl ring-2 ring-white/40"
                : "hover:shadow-xl hover:-translate-y-1"
            }`}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center bg-gray-200 mb-6 transition-all duration-300 ${
                activeStep === index ? "bg-gray-300 scale-110" : ""
              }`}
            >
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>

            <p className="text-gray-600 mb-4">{step.description}</p>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeStep === index
                  ? "max-h-32 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 text-sm italic mt-2 px-2">
                {step.detail}
              </p>
            </div>

            <div className="mt-4 flex items-center">
              <span className="text-gray-700 font-semibold mr-2">
                Step {index + 1}
              </span>
              <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center items-center">
        <FaHeart className="text-gray-600 mr-2" />
        <p className="text-gray-700 italic">
          Quality custom fashion with professional service guaranteed
        </p>
      </div>
    </div>
  );
};

export default OurProcess;
