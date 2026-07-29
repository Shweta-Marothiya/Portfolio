import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="py-8 border-t border-cyan-500/20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="text-gray-400 text-center">
                    © 2026 Shweta | Built with React.js
                </p>

                <div className="flex gap-5 text-2xl">

                    <a
                        href="https://github.com/Shweta-Marothiya"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:scale-110 transition-all"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/shweta-marothiya"
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:scale-110 transition-all"
                    >
                        <FaLinkedin />
                    </a>

                </div>

            </div>
        </footer>
    );
}

export default Footer;