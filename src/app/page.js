import About from "./sections/About";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import ServicesSection from "./sections/Services";
import Process from "./sections/Process";
import Work from "./sections/Work";
export default function HomePage() {
    return (
        <main>
            <Hero />
            <About/>
            <Work />
            <Experience/>
            <ServicesSection/>
            <Process/>
        </main>
    );
}