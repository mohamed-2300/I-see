import React from "react";
import BannerPng from "../../assets/lern.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">The I See tool</h1>
            <p className="text-dark2">
              <span className="text-secondary">I See</span> technology is based
              on innovative artificial intelligence algorithms integrated into a
              simple and user-friendly interface, requiring no additional
              equipment other than the smartphone's camera to assist visually
              impaired and blind individuals.
            </p>
            <p className="text-dark2">
              This Tecnhology was developed entirely by our technical team, we
              work daily to improve the algorithms and provide the most
              efficient and high-quality assistance possible.
            </p>
            <a href="" className="primary-btn !mt-8">
              Learn more
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
