import heroBg from '../../assets/images/hero-bg.webp';
import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!';
const FINAL_TEXT = "Hi! I'm Aswin !";

export default function Hero() {
  const [displayText, setDisplayText] = useState(FINAL_TEXT.split('').map(() => ' '));

  useEffect(() => {
    const letters = FINAL_TEXT.split('');
    let iterations = 0;
    const totalIterations = letters.length * 5;

    const interval = setInterval(() => {
      setDisplayText(prev =>
        letters.map((char, i) => {
          if (char === ' ') return '\u00A0';
          if (i < Math.floor(iterations / 5)) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
      );
      iterations++;
      if (iterations >= totalIterations) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" id="hero">

      {/* Dynamic Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Centering Wrapper for Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="hero-text text-[12vw] font-bold tracking-[0.05em] capitalize select-none animate-floatText whitespace-nowrap">
          {displayText.map((char, i) => (
            <span key={i} style={{ display: 'inline-block', minWidth: char === '\u00A0' ? '0.35em' : undefined }}>
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Buttons — Centered for better alignment */}
      <div className="absolute z-20 flex gap-[20px] left-1/2 -translate-x-1/2" style={{ top: '80%' }}>
        <a href="#contact" className="no-underline px-[30px] py-[12px] rounded-[8px] text-[16px] font-semibold text-white border-2 border-white/30 bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-[#777777] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]">Contact</a>
        <a href="https://github.com/aswinbino/Aswin_portfolio" target="_blank" rel="noopener noreferrer" className="no-underline px-[30px] py-[12px] rounded-[8px] text-[16px] font-semibold text-white border-2 border-white/30 bg-black/40 backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-[#777777] hover:text-white hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)]">GitHub</a>
      </div>

    </div>
  );
}