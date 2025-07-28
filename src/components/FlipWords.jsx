"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({ words, duration = 2000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 50,
          rotate: -10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.6,
          y: -60,
          rotate: 20,
          filter: "blur(8px)",
          position: "absolute",
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={twMerge("z-10 inline-block relative text-left", className)}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.2,
                  rotate: -45,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.06,
                  duration: 0.5,
                  ease: [0.17, 0.67, 0.83, 0.67], // spring-style curve
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
