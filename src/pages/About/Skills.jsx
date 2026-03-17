import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaGitAlt,
FaGithub,
FaFigma,
FaNodeJs,
FaJava
} from "react-icons/fa";

import {
SiUnity,
SiTailwindcss,
SiFirebase,
SiMongodb,
SiExpress,
SiMysql,
SiPhp
} from "react-icons/si";

function Skills(){

return(

<div className="mt-[120px] text-center">
<div className="w-full overflow-hidden">
<div className="flex items-center gap-[70px] text-[55px] text-[#444] w-max animate-scrollSkills [&>svg]:transition-all [&>svg]:duration-300 [&>svg:hover]:scale-[1.2] [&>svg:hover]:text-[#000]">

<FaHtml5/>
<FaCss3Alt/>
<FaJs/>
<FaReact/>

<FaJava/>
<SiMysql/>
<SiPhp/>

<FaNodeJs/>
<SiExpress/>
<SiMongodb/>

<FaGitAlt/>
<FaGithub/>
<FaFigma/>

<SiUnity/>
<SiTailwindcss/>
<SiFirebase/>

</div>

</div>

</div>

)

}

export default Skills;