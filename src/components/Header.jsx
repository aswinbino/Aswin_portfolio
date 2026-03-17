import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-[20px] left-1/2 -translate-x-1/2 z-[1000] w-[85%] px-[30px] py-[14px] flex justify-between items-center rounded-[30px] border border-white/10 transition-all duration-[400ms] ${scrolled ? "bg-[#0f0f0f]/75 backdrop-blur-lg" : "bg-black/40 backdrop-blur-md"}`}>
            <div className="logo">
                <h1 className="text-[#ddd] tracking-[2px] text-[24px] font-semibold"><span className="text-[#777777]">A</span>swin</h1>
            </div>

            <ul className="flex list-none gap-[30px]">
                <li><a href="#hero" className="text-[#ccc] text-[17px] font-medium transition-all duration-300 hover:text-[#777777] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.7)]">Home</a></li>
                <li><a href="#about" className="text-[#ccc] text-[17px] font-medium transition-all duration-300 hover:text-[#777777] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.7)]">About</a></li>
                <li><a href="#project" className="text-[#ccc] text-[17px] font-medium transition-all duration-300 hover:text-[#777777] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.7)]">Project</a></li>
                <li><a href="#serv" className="text-[#ccc] text-[17px] font-medium transition-all duration-300 hover:text-[#777777] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.7)]">Services</a></li>
                <li><a href="#contact" className="text-[#ccc] text-[17px] font-medium transition-all duration-300 hover:text-[#777777] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.7)]">Contact</a></li>
            </ul>

            <ul className="flex list-none gap-[18px]">
                <li className="text-[22px] transition-all duration-300 hover:text-[#777777] hover:scale-[1.15] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.8)]"><a href="https://github.com/aswinbino/Aswin_portfolio_" target="_blank" rel="noopener noreferrer" className="text-[#ccc] inherit-color"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li className="text-[22px] transition-all duration-300 hover:text-[#777777] hover:scale-[1.15] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.8)]"><a href="#" className="text-[#ccc] inherit-color"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className="text-[22px] transition-all duration-300 hover:text-[#777777] hover:scale-[1.15] hover:[text-shadow:0_0_8px_rgba(119,119,119,0.8)]"><a href="#" className="text-[#ccc] inherit-color"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </header>
    )
}

export default Header
