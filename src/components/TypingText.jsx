import React, { useEffect, useState } from 'react';

const texts = ["Specialized Front-end web developer !", "Trustable Back-end web developer", "In short, a full stack web developer", "Python Programmer "];

const TypingEffect = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setCurrentText(prev => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 50 : 50);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="text-container text-5xl">
      <span className="animated-text">{currentText}</span>
    </div>
  );
};

export default TypingEffect;
