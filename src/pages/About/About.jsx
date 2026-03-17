import { useState } from "react";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="my-[70px] mx-auto max-w-[1200px] p-[40px]" id="about">

      <div className="mb-[70px] text-[42px] text-[#777777] text-center relative after:content-[''] after:w-[120px] after:h-[3px] after:bg-[#777777] after:block after:mt-[15px] after:mx-auto after:rounded-[2px]">
        <h2>About Me</h2>
      </div>

      <div className="flex items-center justify-center gap-[80px]">

        <div
          className="w-[320px] h-[420px] [perspective:1000px] cursor-pointer group"
          onClick={() => setFlip(!flip)}
        >

          <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${flip ? "[transform:rotateY(180deg)]" : ""}`}>

            {/* FRONT IMAGE */}

            <div className="absolute w-full h-full [backface-visibility:hidden]">
              <img src="img3.png" alt="" className="w-full h-full rounded-[12px] object-cover grayscale-[20%] transition-transform duration-400 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:scale-105" />
            </div>

            {/* BACK IMAGE */}

            <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <img src="img4.png" alt="" className="w-full h-full rounded-[12px] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-400" />
            </div>

          </div>

        </div>

        <div className="max-w-[520px]">
          <p className="text-[18px] leading-[1.9] text-[#333333] text-left">
            Hi, I'm Aswin, a passionate Frontend Developer and Computer Science student.
            I enjoy building modern, responsive, and interactive web interfaces that provide
            a great user experience. I focus on clean design, smooth animations, and writing
            efficient code using modern web technologies. I'm always learning new tools and
            improving my skills to create better digital products. My goal is to combine
            creativity with technology to build websites that are both beautiful and functional.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;