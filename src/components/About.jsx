import React from "react";
import "./css/About.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import { style } from "@mui/system";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
    after: {},
  },
};

export default function About() {
  const p = document.getElementById("logo");
  console.log(p);
  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <motion.svg
            width="668"
            height="110"
            viewBox="0 0 668 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="logo"
          >
            <motion.path
              d="M26.1904 0.909088L52.5575 83.7926H53.5696L79.9901 0.909088H105.558L67.9517 110H38.2287L0.568909 0.909088H26.1904Z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="black"
              stroke-width="5"
            />
            <motion.path
              d="M122.99 110H98.274L135.934 0.909088H165.657L203.263 110H178.547L151.221 25.8381H150.369L122.99 110Z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="black"
              stroke-width="5"
            />
            <motion.path
              d="M239.458 0.909088V110H216.394V0.909088H239.458Z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="black"
              stroke-width="5"
            />
            <motion.path
              d="M258.435 110V0.909088H302.114C310.139 0.909088 316.833 2.09872 322.195 4.47798C327.558 6.85724 331.588 10.1598 334.287 14.3857C336.986 18.576 338.335 23.4055 338.335 28.8743C338.335 33.1357 337.483 36.8821 335.778 40.1136C334.074 43.3097 331.73 45.9375 328.747 47.9972C325.8 50.0213 322.426 51.4595 318.626 52.3118V53.3771C322.781 53.5547 326.67 54.7266 330.292 56.8928C333.95 59.0589 336.915 62.0952 339.188 66.0014C341.46 69.8722 342.597 74.4886 342.597 79.8509C342.597 85.6392 341.158 90.8061 338.282 95.3516C335.441 99.8615 331.233 103.43 325.658 106.058C320.082 108.686 313.211 110 305.043 110H258.435ZM281.499 91.1435H300.303C306.73 91.1435 311.418 89.9183 314.365 87.468C317.313 84.9822 318.786 81.6797 318.786 77.5604C318.786 74.5419 318.058 71.8786 316.602 69.5703C315.146 67.2621 313.069 65.451 310.37 64.1371C307.707 62.8231 304.528 62.1662 300.835 62.1662H281.499V91.1435ZM281.499 46.5589H298.598C301.759 46.5589 304.564 46.0085 307.014 44.9077C309.5 43.7713 311.453 42.1733 312.874 40.1136C314.33 38.054 315.058 35.5859 315.058 32.7095C315.058 28.7678 313.655 25.5895 310.849 23.1747C308.08 20.7599 304.138 19.5526 299.024 19.5526H281.499V46.5589Z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="black"
              stroke-width="5"
            />
            <motion.path
              d="M357.605 110V0.909088H380.669V45.9197H427.491V0.909088H450.502V110H427.491V64.9361H380.669V110H357.605Z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="black"
              stroke-width="5"
            />
            <motion.path
              d="M488.322 110H463.606L501.266 0.909088H530.989L568.595 110H543.879L516.553 25.8381H515.701L488.322 110Z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="black"
              stroke-width="5"
            />
            <motion.path
              d="M587.811 0.909088L614.179 83.7926H615.191L641.611 0.909088H667.179L629.573 110H599.85L562.19 0.909088H587.811Z"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              stroke="black"
              stroke-width="5"
            />
          </motion.svg>

          <motion.div
            initial={{ x: "-200vh" }}
            animate={{ x: 0, transition: { duration: 2 } }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
              className="next-btn"
            >
              Next
            </motion.button>
          </motion.div>
        </div>
      </section>
      <section className="skills">Hey</section>
      <section className="links"></section>
    </div>
  );
}
