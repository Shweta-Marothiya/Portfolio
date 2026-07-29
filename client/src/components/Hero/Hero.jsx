import heroImg from "../../assets/images/profile.png";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-10"
        >
            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-cyan-400 text-xl mb-3">
                        Hi, I'm 👋
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                        Shweta
                    </h1>

                    <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">
                        Full Stack Web Developer
                    </h2>

                    <p className="text-gray-400 leading-8 max-w-lg">
                        I build responsive, modern and user-friendly web
                        applications using React.js, Node.js, Express.js,
                        MongoDB and other modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">

                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center min-w-[180px] px-8 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-300"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center min-w-[180px] px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="relative">

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full blur-3xl bg-cyan-500 opacity-30"></div>

                        {/* Image Container */}
                        <div className="
    relative
    w-[220px] h-[220px]
    md:w-[280px] md:h-[280px]
    lg:w-[350px] lg:h-[350px]
    rounded-full
    border-4 border-cyan-400
    shadow-[0_0_40px_#00e5ff]
    overflow-hidden
">

                            <img
                                src={heroImg}
                                alt="Shweta"
                                className="float-img w-full h-full object-cover object-top"
                            />

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;