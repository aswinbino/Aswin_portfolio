import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){
  return(
    <footer className="mt-[80px] py-[20px] bg-[#111] text-[#aaa]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <p>© 2026 Aswin</p>
        <div className="flex gap-[20px]">
          <a href="#" className="text-[22px] text-[#aaa] transition-all duration-300 hover:-translate-y-[4px] hover:scale-[1.2] hover:text-white"><FaGithub/></a>
          <a href="#" className="text-[22px] text-[#aaa] transition-all duration-300 hover:-translate-y-[4px] hover:scale-[1.2] hover:text-white"><FaLinkedin/></a>
          <a href="#" className="text-[22px] text-[#aaa] transition-all duration-300 hover:-translate-y-[4px] hover:scale-[1.2] hover:text-white"><FaInstagram/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;