import React from "react";
import { AnimatePresence, motion } from "motion/react";
const FrontAnimation = () => {
  return (
      <AnimatePresence>
    <motion.div
     initial={{ opacity: 0, scale: 0 }}
     animate={{ opacity: 1, scale: 1 }}
     exit={{ opacity: 0, scale: 5 }}
      className="w-screen h-screen">
      <svg
     
       className="h-full w-full"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9" clipPath="url(#clip0_4_76)">
          <motion.path
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1 }}
           transition={{ duration: 1, ease: "linear" }}
            d="M17 31.1667C24.824 31.1667 31.1667 24.824 31.1667 17C31.1667 9.17597 24.824 2.83334 17 2.83334C9.17596 2.83334 2.83333 9.17597 2.83333 17C2.83333 24.824 9.17596 31.1667 17 31.1667Z"
            stroke="#ffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
           initial={{ pathLength: 0 }}
           animate={{ pathLength: 1 }}
           transition={{ duration: 1, ease: "linear" }}
            d="M23.0067 10.9933L20.0033 20.0033L10.9933 23.0067L13.9967 13.9967L23.0067 10.9933Z"
           stroke="#ffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_76">
            <motion.rect
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 1, ease: "easeInOut" }}
            width="34" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
      </AnimatePresence>
  );
};

export default FrontAnimation;
