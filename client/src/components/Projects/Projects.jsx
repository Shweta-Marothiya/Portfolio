const projects = [
    {
        title: "ApnaVideoCall",
        description:
            "A real-time video calling application built using React.js, Node.js, Socket.IO, WebRTC and MongoDB.",
        tech: [
            "React.js",
            "Node.js",
            "MongoDB",
            "Socket.IO",
            "WebRTC",
        ],
        live: "https://apnavideocallfrontend-xt4c.onrender.com",
        github: "#",
    },
    {
        title: "Zerodha Clone",
        description:
            "Responsive frontend clone of Zerodha trading platform with modern UI and reusable React components.",
        tech: [
            "React.js",
            "Bootstrap",
            "JavaScript",
            "Responsive Design",
        ],
        live: "#",
        github: "#",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="w-full max-w-4xl mx-auto px-8">

                <h2 className="text-center text-5xl lg:text-6xl font-bold mb-16">
                    My <span className="text-cyan-400">Projects</span>
                </h2>
                <div className="h-6"></div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                            bg-[#09122c]
                            p-6
                            rounded-2xl
                            border border-cyan-500/20
                            hover:border-cyan-400
                            hover:-translate-y-2
                            hover:shadow-[0_0_25px_#00e5ff]
                            transition-all duration-300
                            min-h-[200px]
                            flex flex-col
                            "
                        >
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 leading-7 h-20 mb-5">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-5">
                                {project.tech.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="
                                        px-3 py-1
                                        rounded-full
                                        bg-cyan-400/10
                                        border border-cyan-400/20
                                        text-cyan-300
                                        text-sm
                                        "
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div className="h-4"></div>

                            <div className="flex gap-4 mt-5">

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    px-5 py-2
                                    rounded-full
                                    bg-cyan-400
                                    text-black
                                    font-semibold
                                    hover:scale-105
                                    transition-all duration-300
                                    "
                                >
                                    Live Demo
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    px-5 py-2
                                    rounded-full
                                    border-2 border-cyan-400
                                    text-cyan-400
                                    hover:bg-cyan-400
                                    hover:text-black
                                    transition-all duration-300
                                    "
                                >
                                    GitHub
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;