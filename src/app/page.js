import About from "./sections/About";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import ServicesSection from "./sections/Services";

export default function HomePage() {
    return (
        <main>
            <Hero />
            <About/>
            <Experience/>
            <ServicesSection/>
        </main>
    );
}