import React from "react";
import fr from "../../assets/1.png";
import f1 from "../../assets/2.png";
import f2 from "../../assets/3.png";
import f3 from "../../assets/4.png";
import f4 from "../../assets/5.png";
import f5 from "../../assets/6.png";

import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    icon: fr,
    delay: 0.2,
  },
  {
    id: 2,
    icon: f1,
    delay: 0.3,
  },
  {
    id: 3,
    icon: f2,
    delay: 0.4,
  },
  {
    id: 4,
    icon: f3,
    delay: 0.5,
  },
  {
    id: 5,
    icon: f4,
    delay: 0.6,
  },
  {
    id: 6,
    icon: f5,
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
const Partner = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Our Partners
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id} // Added a key for each item
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              {/* Correctly rendering the image */}
              <img src={service.icon} alt={`Partner ${service.id}`} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;

