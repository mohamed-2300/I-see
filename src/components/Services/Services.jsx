import React from "react";
import { BiMicrophone } from "react-icons/bi";
import { GiCook } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

import { FaUniversalAccess } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Object Recognition",
    link: "#",
    icon: <FaEye />,
    desc: "Explain how YOLO detects objects in real-time",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Recipe Suggestions",
    link: "#",
    icon: <GiCook />,
    desc: "Highlight Tesseract OCR and Spoonacular integration for food-related suggestions",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Voice Interaction",
    link: "#",
    icon: <BiMicrophone />,
    desc: "Present Google Text-to-Speech and Dialogflow capabilities",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Accessibility",
    link: "#",
    icon: <FaUniversalAccess />,
    desc: "Mention your app's user-friendly and inclusive design",
    delay: 0.5,
  },
  {
    id: 5,
    title: "User-Friendly Design",
    link: "#",
    icon: <FiSmartphone />,
    desc: "An intuitive, easy-to-navigate interface",
    delay: 0.6,
  },
  {
    id: 6,
    title: "Real-Time AI Assistance",
    link: "#",
    icon: <MdDevices />,
    desc: "Instant AI-driven suggestions and feedback",
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
        Our Features
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service, idx) => (
            <motion.div
              key={idx}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
              <p className="text-sm text-center px-3">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
