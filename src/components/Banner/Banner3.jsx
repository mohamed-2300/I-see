import React from "react";
import { motion } from "framer-motion";

const Banner3 = () => {
  return (
    <section id="about" className="container">
        <h1 className="text-4xl font-bold !leading-snug">About Us</h1>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0"
      >
          

        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
          <h1 className="text-4xl font-bold !leading-snug">Who We Are</h1>
          <p className="text-dark2">
            We are a <span className="text-secondary">passionate team</span>{" "}
            dedicated to making life easier for visually impaired individuals.
            Through cutting-edge <span className="text-secondary">AI</span> and
            seamless <span className="text-secondary">technology</span>, we
            bridge the gap between{" "}
            <span className="text-secondary"> challenges</span> and{" "}
            <span className="text-secondary"> solutions</span>, empowering our
            users with <span className="text-secondary">independence</span> and{" "}
            <span className="text-secondary"> confidence</span>.
          </p>
        </div>
        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
          <h1 className="text-4xl font-bold !leading-snug">What We Do</h1>
          <div className="text-dark2">
            Our app is designed to:{" "}
            <ul>
              <li>
                {"- "}Provide{" "}
                <span className="text-secondary">
                  real-time object recognition
                </span>{" "}
                and <span className="text-secondary">voice feedback</span>.
              </li>
              <li>
                {"- "}Assist users with personalized{" "}
                <span className="text-secondary">recipe suggestions</span> and{" "}
                <span className="text-secondary">environment guidance</span>.
              </li>
              <li>
                {"- "}Create a user-friendly experience powered by{" "}
                <span className="text-secondary">advanced AI</span>.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
          <h1 className="text-4xl font-bold !leading-snug">Why Choose Us</h1>
          <p className="text-dark2">
            Join over <span className="text-secondary">100,000</span> satisfied
            users who trust our app for{" "}
            <span className="text-secondary">reliable assistance</span> in their
            daily lives. With our focus on{" "}
            <span className="text-secondary">accessibility</span>,{" "}
            <span className="text-secondary">innovation</span>, and{" "}
            <span className="text-secondary">user satisfaction</span>, we are
            here to make your journey{" "}
            <span className="text-secondary">seamless</span> and{" "}
            <span className="text-secondary">empowering</span>.
          </p>
        </div>
        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
          <h1 className="text-4xl font-bold !leading-snug">Our Mission</h1>
          <p className="text-dark2">
            Our mission is to make the world more {" "}
            <span className="text-secondary">accessible</span> and {" "}
            <span className="text-secondary">inclusive</span> for
            everyone. By harnessing the power of {" "}
            <span className="text-secondary">AI</span>, we aim to {" "}
            <span className="text-secondary">eliminate
            barriers</span>, provide {" "}
            <span className="text-secondary">real-time assistance</span>, and ensure that our users
            feel {" "}
            <span className="text-secondary">supported</span> and {" "}
            <span className="text-secondary">independent</span> in any environment.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner3;
