import "./css/Skills.css";
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
} from "react";
import { motion } from "framer-motion";

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
  },
};

const Skills = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      Open: () => {
        console.log("Open Called");
        setOpen(true);
      },
      Close: () => setOpen(false),
    };
  });

  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="skills"
        >
          <motion.div>
            <motion.div className="title">
              <motion.svg
                width="235"
                height="53"
                viewBox="0 0 235 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                id="skills"
              >
                <motion.path
                  d="M30.0419 15.7322C29.843 13.727 28.9896 12.1693 27.4815 11.0589C25.9735 9.94862 23.9268 9.39346 21.3416 9.39346C19.585 9.39346 18.1018 9.64204 16.892 10.1392C15.6823 10.6198 14.7543 11.291 14.108 12.1527C13.4782 13.0144 13.1634 13.9922 13.1634 15.0859C13.1302 15.9974 13.3208 16.7928 13.7351 17.4723C14.166 18.1518 14.7543 18.7401 15.5 19.2372C16.2457 19.7178 17.1075 20.1404 18.0852 20.505C19.063 20.853 20.107 21.1513 21.2173 21.3999L25.7912 22.4936C28.0118 22.9908 30.0502 23.6536 31.9062 24.4822C33.7623 25.3108 35.3698 26.33 36.7287 27.5398C38.0876 28.7495 39.1399 30.1747 39.8857 31.8153C40.648 33.456 41.0374 35.3369 41.054 37.4581C41.0374 40.5736 40.2419 43.2749 38.6676 45.5618C37.1098 47.8322 34.8561 49.5971 31.9062 50.8565C28.973 52.0994 25.4349 52.7209 21.2919 52.7209C17.1821 52.7209 13.6025 52.0911 10.5533 50.8317C7.52059 49.5722 5.1508 47.7079 3.44389 45.2386C1.75355 42.7528 0.866948 39.6787 0.784088 36.0163H11.1996C11.3156 37.7232 11.8044 39.1484 12.6662 40.2919C13.5445 41.4188 14.7128 42.2723 16.1712 42.8523C17.6461 43.4157 19.3116 43.6974 21.1676 43.6974C22.9905 43.6974 24.5732 43.4323 25.9155 42.902C27.2744 42.3717 28.3267 41.6342 29.0724 40.6896C29.8182 39.745 30.191 38.6596 30.191 37.4332C30.191 36.2898 29.8513 35.3286 29.1719 34.5497C28.509 33.7708 27.5312 33.1079 26.2386 32.5611C24.9626 32.0142 23.3965 31.517 21.5405 31.0696L15.9972 29.6776C11.705 28.6335 8.31605 27.0012 5.83025 24.7805C3.34446 22.5599 2.10985 19.5687 2.12642 15.8068C2.10985 12.7244 2.93016 10.0315 4.58736 7.72798C6.26112 5.42448 8.55634 3.62642 11.473 2.3338C14.3897 1.04119 17.7041 0.394882 21.4162 0.394882C25.1946 0.394882 28.4924 1.04119 31.3097 2.3338C34.1435 3.62642 36.3475 5.42448 37.9219 7.72798C39.4962 10.0315 40.3082 12.6996 40.3579 15.7322H30.0419Z"
                  stroke="white"
                  stroke-width="5"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M48.2939 52V1.09091H59.0573V23.5376H59.7285L78.0488 1.09091H90.9501L72.0581 23.8857L91.1738 52H78.2974L64.3521 31.0696L59.0573 37.5327V52H48.2939Z"
                  stroke="white"
                  stroke-width="5"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M107.319 1.09091V52H96.5556V1.09091H107.319Z"
                  stroke="white"
                  stroke-width="5"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M116.175 52V1.09091H126.938V43.1257H148.764V52H116.175Z"
                  stroke="white"
                  stroke-width="5"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M155.892 52V1.09091H166.655V43.1257H188.48V52H155.892Z"
                  stroke="white"
                  stroke-width="5"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M223.225 15.7322C223.027 13.727 222.173 12.1693 220.665 11.0589C219.157 9.94862 217.11 9.39346 214.525 9.39346C212.769 9.39346 211.285 9.64204 210.076 10.1392C208.866 10.6198 207.938 11.291 207.292 12.1527C206.662 13.0144 206.347 13.9922 206.347 15.0859C206.314 15.9974 206.504 16.7928 206.919 17.4723C207.35 18.1518 207.938 18.7401 208.684 19.2372C209.429 19.7178 210.291 20.1404 211.269 20.505C212.247 20.853 213.291 21.1513 214.401 21.3999L218.975 22.4936C221.195 22.9908 223.234 23.6536 225.09 24.4822C226.946 25.3108 228.553 26.33 229.912 27.5398C231.271 28.7495 232.324 30.1747 233.069 31.8153C233.832 33.456 234.221 35.3369 234.238 37.4581C234.221 40.5736 233.426 43.2749 231.851 45.5618C230.293 47.8322 228.04 49.5971 225.09 50.8565C222.157 52.0994 218.618 52.7209 214.475 52.7209C210.366 52.7209 206.786 52.0911 203.737 50.8317C200.704 49.5722 198.334 47.7079 196.627 45.2386C194.937 42.7528 194.051 39.6787 193.968 36.0163H204.383C204.499 37.7232 204.988 39.1484 205.85 40.2919C206.728 41.4188 207.896 42.2723 209.355 42.8523C210.83 43.4157 212.495 43.6974 214.351 43.6974C216.174 43.6974 217.757 43.4323 219.099 42.902C220.458 42.3717 221.51 41.6342 222.256 40.6896C223.002 39.745 223.375 38.6596 223.375 37.4332C223.375 36.2898 223.035 35.3286 222.355 34.5497C221.693 33.7708 220.715 33.1079 219.422 32.5611C218.146 32.0142 216.58 31.517 214.724 31.0696L209.181 29.6776C204.889 28.6335 201.5 27.0012 199.014 24.7805C196.528 22.5599 195.293 19.5687 195.31 15.8068C195.293 12.7244 196.114 10.0315 197.771 7.72798C199.445 5.42448 201.74 3.62642 204.657 2.3338C207.573 1.04119 210.888 0.394882 214.6 0.394882C218.378 0.394882 221.676 1.04119 224.493 2.3338C227.327 3.62642 229.531 5.42448 231.105 7.72798C232.68 10.0315 233.492 12.6996 233.542 15.7322H223.225Z"
                  stroke="white"
                  stroke-width="5"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </motion.svg>
            </motion.div>
            <motion.div>
              <motion.svg
                width="1000"
                height="1"
                viewBox="0 0 821 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                id="bar"
              >
                <motion.path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M965 1H0V0H965V1Z"
                  fill="black"
                />
              </motion.svg>
            </motion.div>

            <motion.div className="content">
              <motion.div
                className="frontend"
                initial={{ x: "-100vw" }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 2,
                  },
                }}
              >
                <motion.div className="content">
                  <motion.h2>FrontEnd</motion.h2>
                  <motion.ul>
                    <motion.li>React</motion.li>
                    <motion.li>HTML</motion.li>
                    <motion.li>CSS</motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
              <motion.div
                className="backends"
                initial={{ x: "200vw" }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 2,
                  },
                }}
              >
                <motion.div className="content-2">
                  <motion.h2>Backend</motion.h2>
                  <motion.ul>
                    <motion.li>Firebase</motion.li>
                    <motion.li>MySQL/PostgreSQL</motion.li>
                    <motion.li>Python</motion.li>
                    <motion.li>C++</motion.li>
                    <motion.li>JavaSCript</motion.li>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: "-200vh" }}
              animate={{ x: 0, transition: { duration: 2 } }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.0 }}
                onClick={() => {
                  console.log("Clicked");
                }}
                className="link-btn"
              >
                Next
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
});

export default Skills;
