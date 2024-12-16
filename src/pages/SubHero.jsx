import React, { useEffect, useState } from 'react';

const SubHero = () => {
  const [typedText, setTypedText] = useState("Web Developer");
  const words = ["  Designer", " Developer", " Freelancer", " Photographer"];
  let wordIndex = 0;
  let charIndex = 0;
  const typingDelay = 100;  // Speed of typing
  const erasingDelay = 50;  // Speed of erasing
  const newWordDelay = 200;  // Delay before starting to type a new word

  useEffect(() => {
    const type = () => {
      if (charIndex < words[wordIndex].length) {
        setTypedText(prev => prev + words[wordIndex].charAt(charIndex));
        charIndex++;
        // setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newWordDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        setTypedText(prev => prev.slice(0, charIndex - 1));
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        wordIndex = (wordIndex + 1) % words.length;  // Move to next word
        setTimeout(type, typingDelay + 500);
      }
    };

    // Start typing after the component mounts
    const typingTimeout = setTimeout(type, newWordDelay);

    // Cleanup timeout on unmount
    return () => clearTimeout(typingTimeout);
  }, [typedText, words]);

  return (
    <section id="hero" className="relative bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="src/assets/img/hero-bg.mp4"
        autoPlay
        muted
        loop
        type="video/mp4"
      />
      
      {/* Overlay to darken video background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-10"></div>

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-20" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-white text-4xl font-bold mb-4">I am Hammed Wahab</h2>
        <p className="text-gray-300 text-lg">
          <span id="typed-text">{typedText}</span>
          <span id="typed-cursor" className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
        </p>
      </div>
    </section>
  );
};

export default SubHero;
