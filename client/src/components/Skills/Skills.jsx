const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React.js", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Express.js", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "Git & GitHub", level: "85%" },
];

function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="w-full max-w-4xl mx-auto px-8">

                <h2 className="text-5xl lg:text-6xl font-bold text-center mb-14">
                    My <span className="text-cyan-400">Skills</span>
                </h2>
                <div className="h-5"></div>

                <div className="grid md:grid-cols-2 gap-6">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="
                                bg-[#09122c]
                                p-5
                                rounded-2xl
                                border border-cyan-500/20
                                hover:border-cyan-400
                                hover:-translate-y-1
                                hover:shadow-[0_0_20px_#00e5ff]
                                transition-all duration-300
                            "
                        >
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>

                                <span className="text-cyan-400 font-semibold">
                                    {skill.level}
                                </span>
                            </div>

                            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-cyan-400 rounded-full transition-all duration-1000"
                                    style={{ width: skill.level }}
                                />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;