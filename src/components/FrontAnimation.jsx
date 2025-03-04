import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const FrontAnimation = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-screen h-screen flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2
          }}
          className="relative w-64 h-64 mb-8"
        >
          {/* Main circle */}
          <motion.div className="absolute inset-0">
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full"
            >
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* Portfolio elements */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full"
            >
              {/* Code bracket left */}
              <motion.path
                d="M70 60 L50 100 L70 140"
                stroke="#F43F5E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              />
              
              {/* Code bracket right */}
              <motion.path
                d="M130 60 L150 100 L130 140"
                stroke="#F43F5E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              />
              
              {/* Design element - pencil */}
              <motion.path
                d="M100 70 L100 130"
                stroke="#3B82F6"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
              />
              
              {/* Creative dots */}
              <motion.circle
                cx="85"
                cy="100"
                r="5"
                fill="#10B981"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, duration: 0.3 }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="5"
                fill="#F59E0B"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.4, duration: 0.3 }}
              />
              <motion.circle
                cx="115"
                cy="100"
                r="5"
                fill="#8B5CF6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.6, duration: 0.3 }}
              />
            </svg>
          </motion.div>

          {/* Rotating outer ring */}
          <motion.div 
            className="absolute inset-0"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              ease: "linear", 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <svg 
              viewBox="0 0 200 200" 
              className="w-full h-full"
            >
              <motion.path
                d="M100 20 A80 80 0 0 1 100 180 A80 80 0 0 1 100 20"
                stroke="#6366F1"
                strokeWidth="2"
                strokeDasharray="5,10"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2.8, duration: 0.8 }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Portfolio text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="relative"
        >
          <svg 
            width="280" 
            height="60" 
            viewBox="0 0 280 60" 
            className="w-full h-full"
          >
            <motion.path
              d="M30 15 L30 40 M25 15 L40 15 M30 25 L38 25"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2.4 }}
            />
            <motion.path
              d="M50 15 C50 15, 45 15, 45 25 C45 35, 50 35, 55 35 C60 35, 65 35, 65 25 C65 15, 60 15, 55 15"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2.6 }}
            />
            <motion.path
              d="M75 15 L75 40 M75 15 L85 25 L95 15 M95 15 L95 40"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2.8 }}
            />
            <motion.path
              d="M105 15 L105 40 M105 15 L120 15 M105 27 L115 27"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 3.0 }}
            />
            <motion.path
              d="M130 15 C130 15, 125 15, 125 25 C125 35, 130 35, 135 35 C140 35, 145 35, 145 25 C145 15, 140 15, 135 15"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 3.2 }}
            />
            <motion.path
              d="M155 15 L155 40 M155 15 L170 15"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 3.4 }}
            />
            <motion.path
              d="M180 15 C180 15, 175 15, 175 25 C175 35, 180 35, 185 35 C190 35, 195 35, 195 25 C195 15, 190 15, 185 15"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 3.6 }}
            />
            <motion.path
              d="M205 15 L205 40 M205 15 L220 15"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 3.8 }}
            />
            <motion.path
              d="M230 15 C230 15, 225 15, 225 25 C225 35, 230 35, 235 35 C240 35, 245 35, 245 25 C245 15, 240 15, 235 15"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 4.0 }}
            />
          </svg>
        </motion.div>

        {/* Skills tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mt-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          <motion.span 
            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4.6, type: "spring", stiffness: 200 }}
          >
            Developer
          </motion.span>
          <motion.span 
            className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4.7, type: "spring", stiffness: 200 }}
          >
            Designer
          </motion.span>
          <motion.span 
            className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4.8, type: "spring", stiffness: 200 }}
          >
            Creator
          </motion.span>
          <motion.span 
            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 4.9, type: "spring", stiffness: 200 }}
          >
            Problem Solver
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FrontAnimation;