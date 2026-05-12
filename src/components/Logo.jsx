import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Logo() {
  const [isArabic, setIsArabic] = useState(true);

  const toggleLanguage = () => setIsArabic(!isArabic);

  return (
    <div 
      onClick={toggleLanguage}
      className="flex items-center gap-3 group cursor-pointer select-none"
    >
      <div className="relative h-10 w-14 flex items-center justify-center">
        {/* Neon Glow Background */}
        <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all duration-500" />
        
        <svg viewBox="0 0 140 100" className="h-9 w-12 relative z-10">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          <AnimatePresence mode="wait">
            {isArabic ? (
              <motion.g
                key="arabic-m"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  d="M110 40 C125 40, 125 60, 110 60 C95 60, 95 40, 110 40 L80 40" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="7" 
                  fill="none" 
                  strokeLinecap="round"
                />
                <path 
                  d="M60 40 C75 40, 75 60, 60 60 C45 60, 45 40, 60 40 L35 40 L35 80" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="7" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </motion.g>
            ) : (
              <motion.g
                key="english-m"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  d="M30 70V30L50 50L70 30V70" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M75 70V30L95 50L115 30V70" 
                  stroke="url(#logoGrad)" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </motion.g>
            )}
          </AnimatePresence>

          <circle cx="60" cy="50" r="3.5" fill="#fff" className="animate-pulse" />
        </svg>
      </div>

      {/* Name Section with Animated Text */}
      <div className="flex items-center overflow-hidden h-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={isArabic ? 'ar' : 'en'}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            /* 
               Added flex-row-reverse for Arabic 
               This flips the order so the dot is on the left in Arabic 
            */
            className={`flex items-center ${isArabic ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <span className={`text-[18px] font-bold text-zinc-900 dark:text-zinc-100 ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {isArabic ? 'محمد' : 'Muhammad'}
            </span>
            {/* 
               Added conditional margin: 
               mr-0.5 (margin right) when Arabic to separate from the left of the name
               ml-0.5 (margin left) when English to separate from the right of the name
            */}
            <span className={`text-emerald-500 text-[18px] font-bold ${isArabic ? 'mr-0.5' : 'ml-0.5'}`}>.</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}