import NavigationNodes from "../components/Layout/NavigationNodes";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
            <NavigationNodes />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;