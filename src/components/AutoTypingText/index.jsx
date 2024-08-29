import React, { useState, useEffect } from 'react';

const AutoTypingText = ({ texts, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); // Current text index
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [isTyping, setIsTyping] = useState(true); // Typing or deleting

  useEffect(() => {
    if (isTyping) {
      if (charIndex < texts[index].length) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText + texts[index][charIndex]);
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Move to the deleting phase
        setTimeout(() => {

          setIsTyping(false);
          const timer = setTimeout(() => {
            setCharIndex(charIndex - 1);
          }, speed);
          return () => clearTimeout(timer);
        }, 1500)
      }
    } else {
      if (charIndex >= 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Move to the next text
        setIsTyping(true);
        setIndex((index + 1) % texts.length);
        setCharIndex(0);
      }
    }
  }, [charIndex, displayedText, isTyping, index, speed, texts]);

  return <h1 className={`text-[20px]  ${index === 1 ? 'text-[green]' : 'text-[#42A5F5]'}`}>{displayedText}<span className='Typer'>|</span></h1>;
};

export default AutoTypingText;