import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="my-[100px] mx-auto max-w-[1200px] p-[40px]" id="contact">
      <div className="text-center text-[40px] text-[#393838] mb-[60px] relative after:content-[''] after:w-[100px] after:h-[3px] after:bg-[#777777] after:block after:mx-auto after:mt-[15px]">
        <h2>Contact Me</h2>
      </div>

      <div className="flex justify-between gap-[80px]">
        {/* LEFT INFO */}
        <div className="max-w-[400px]">
          <h3 className="text-[28px] mb-[20px] text-[#202020]">Get In Touch</h3>
          <p className="text-[#242424] mb-[30px]">
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="flex items-center gap-[15px] mb-[20px] text-[16px] text-[#232222] group/item">
            <FaEnvelope className="text-[22px] text-[#777777] animate-iconFloat transition-all duration-300 group-hover/item:scale-[1.3] group-hover/item:text-[#000]"/>
            <span>aswin.dev@email.com</span>
          </div>

          <div className="flex items-center gap-[15px] mb-[20px] text-[16px] text-[#232222] group/item">
            <FaPhone className="text-[22px] text-[#777777] animate-iconFloat transition-all duration-300 group-hover/item:scale-[1.3] group-hover/item:text-[#000]"/>
            <span>+91 XX XX XX XX XX</span>
          </div>

          <div className="flex items-center gap-[15px] mb-[20px] text-[16px] text-[#232222] group/item">
            <FaMapMarkerAlt className="text-[22px] text-[#777777] animate-iconFloat transition-all duration-300 group-hover/item:scale-[1.3] group-hover/item:text-[#000]"/>
            <span>Chennai, India</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="w-full max-w-[500px] flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-[14px] rounded-[8px] border border-[#837d7d] bg-[#202020] text-white text-[16px] outline-none placeholder:text-[#aaa]"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-[14px] rounded-[8px] border border-[#837d7d] bg-[#202020] text-white text-[16px] outline-none placeholder:text-[#aaa]"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
            className="p-[14px] rounded-[8px] border border-[#837d7d] bg-[#202020] text-white text-[16px] outline-none placeholder:text-[#aaa]"
          ></textarea>

          <button type="submit" className="p-[14px] border-none rounded-[8px] bg-[#777777] text-white text-[16px] cursor-pointer transition-all duration-300 hover:bg-[#444] hover:-translate-y-[3px]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;