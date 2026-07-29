const educationData = [
    {
        year: "2022 - 2025",
        title: "Bachelor of Computer Applications (BCA)",
        institute: "Glocal University, Saharanpur",
        description:
            "Completed BCA with focus on programming, web development, databases and software engineering.",
    },
    {
        year: "2024",
        title: "Full Stack Web Development",
        institute: "Aptech, Noida",
        description:
            "Learned HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB and modern web development practices.",
    },
];

function Education() {
    return (
        <section
            id="education"
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="w-full max-w-5xl mx-auto">

                <h2 className="text-center text-5xl lg:text-6xl font-bold">
                    My <span className="text-cyan-400">Education</span>
                </h2>

                <div className="h-6"></div>

                {/* Increased gap between cards */}
                <div className="flex flex-col gap-8">

                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="
                            bg-[#09122c]
                            p-8
                            rounded-2xl
                            border border-cyan-500/20
                            hover:border-cyan-400
                            hover:shadow-[0_0_25px_#00e5ff]
                            hover:-translate-y-1
                            transition-all duration-300
                            "
                        >
                            <span className="text-cyan-400 font-semibold text-lg">
                                {item.year}
                            </span>

                            <h3 className="text-2xl lg:text-3xl font-bold mt-3 mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 text-lg mb-4">
                                {item.institute}
                            </p>

                            <p className="text-gray-400 leading-8">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Education;