import {
    FaHome,
    FaUser,
    FaCode,
    FaProjectDiagram,
    FaGithub,
} from "react-icons/fa";

import { MdEmail, MdSchool } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

const nodes = [
    {
        name: "Home",
        link: "#home",
        icon: <FaHome />,
        className: "top-8 left-8",
    },
    {
        name: "About",
        link: "#about",
        icon: <FaUser />,
        className: "top-8 left-1/2 -translate-x-1/2",
    },
    {
        name: "Education",
        link: "#education",
        icon: <MdSchool />,
        className: "top-8 right-8",
    },
    {
        name: "Skills",
        link: "#skills",
        icon: <FaCode />,
        className: "top-1/2 left-8 -translate-y-1/2",
    },
    {
        name: "Projects",
        link: "#projects",
        icon: <FaProjectDiagram />,
        className: "top-1/2 right-8 -translate-y-1/2",
    },
    {
        name: "GitHub",
        link: "https://github.com/Shweta-Marothiya",
        icon: <FaGithub />,
        className: "bottom-8 left-8",
    },
    {
        name: "Resume",
        link: "/resume.pdf",
        icon: <IoDocumentText />,
        className: "bottom-8 left-1/2 -translate-x-1/2",
    },
    {
        name: "Contact",
        link: "#contact",
        icon: <MdEmail />,
        className: "bottom-8 right-8",
    },
];

function NavigationNodes() {
    return (
        <>
            {nodes.map((node) => (
                <a
                    key={node.name}
                    href={node.link}
                    target={node.name === "GitHub" ? "_blank" : "_self"}
                    rel={node.name === "GitHub" ? "noreferrer" : ""}
                    className={`fixed ${node.className}
                    hidden md:flex
                    w-24 h-24
                    rounded-full
                    flex flex-col
                    items-center
                    justify-center
                    bg-[#10172b]
                    border border-cyan-400
                    text-white
                    shadow-[0_0_20px_#00e5ff]
                    hover:scale-110
                    hover:shadow-[0_0_30px_#00e5ff]
                    transition-all duration-300
                    z-50`}
                >
                    <div className="text-2xl">
                        {node.icon}
                    </div>

                    <p className="text-xs mt-2">
                        {node.name}
                    </p>
                </a>
            ))}
        </>
    );
}

export default NavigationNodes;