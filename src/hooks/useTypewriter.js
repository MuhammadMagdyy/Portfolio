import { useEffect, useRef, useState } from 'react';

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words
 * @param {number}   typeSpeed   ms per character while typing
 * @param {number}   pauseMs     ms to pause after fully typed
 * @param {number}   eraseSpeed  ms per character while erasing
 */
export function useTypewriter(words = [], typeSpeed = 72, pauseMs = 1800, eraseSpeed = 36) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx,   setWordIdx]   = useState(0);
  const [isTyping,  setIsTyping]  = useState(true);
  const [cursor,    setCursor]    = useState(true);
  const timerRef = useRef(null);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(id);
  }, []);

  // Typing / erasing engine
  useEffect(() => {
    if (!words.length) return;
    const word = words[wordIdx % words.length];

    const run = () => {
      if (isTyping) {
        setDisplayed(prev => {
          const next = word.slice(0, prev.length + 1);
          if (next === word) {
            timerRef.current = setTimeout(() => setIsTyping(false), pauseMs);
          } else {
            timerRef.current = setTimeout(run, typeSpeed);
          }
          return next;
        });
      } else {
        setDisplayed(prev => {
          const next = prev.slice(0, -1);
          if (next === '') {
            setWordIdx(i => i + 1);
            setIsTyping(true);
          } else {
            timerRef.current = setTimeout(run, eraseSpeed);
          }
          return next;
        });
      }
    };

    timerRef.current = setTimeout(run, isTyping ? typeSpeed : eraseSpeed);
    return () => clearTimeout(timerRef.current);
  }, [wordIdx, isTyping, words, typeSpeed, pauseMs, eraseSpeed]);

  return { displayed, cursor };
}
