import { FaCode, FaPalette, FaLaptopCode } from "react-icons/fa";

function Services(){
  return(
    <div className="my-[70px] mx-auto max-w-[1200px] p-[40px]" id="serv">
      <div className="mb-[70px] text-[42px] text-[#625f5f] text-center relative after:content-[''] after:w-[120px] after:h-[3px] after:bg-[#3e3e3e] after:block after:mt-[15px] after:mx-auto after:rounded-[2px]">
        <h2>Services</h2>
      </div>

      <div className="flex justify-center gap-[40px]">
        <div className="p-[40px] rounded-[12px] w-[300px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <FaCode className="text-[45px] text-[#555] mb-[20px] mx-auto"/>
          <h3 className="mb-[15px] text-[#3f3e3e]">Frontend Development</h3>
          <p className="text-[#343232] leading-[1.6]">I build modern and interactive websites using React, HTML, CSS, JavaScript, Node.Js, Php, MySql and Next.js.</p>
        </div>

        <div className="p-[40px] rounded-[12px] w-[300px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <FaPalette className="text-[45px] text-[#555] mb-[20px] mx-auto"/>
          <h3 className="mb-[15px] text-[#3f3e3e]">UI Design</h3>
          <p className="text-[#343232] leading-[1.6]">Creating clean and modern user interfaces with focus on design and usability.</p>
        </div>

        <div className="p-[40px] rounded-[12px] w-[300px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <FaLaptopCode className="text-[45px] text-[#555] mb-[20px] mx-auto"/>
          <h3 className="mb-[15px] text-[#3f3e3e]">Web Applications</h3>
          <p className="text-[#343232] leading-[1.6]">Building modern web applications with dynamic features and smooth performance.</p>
        </div>
      </div>
    </div>
  )
}

export default Services;