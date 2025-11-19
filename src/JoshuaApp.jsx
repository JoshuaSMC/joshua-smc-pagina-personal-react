import About from "./components/About";
import Certifications from "./components/Certification";
import {Footer} from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import QuoteSection from "./components/QuoteSection";



export default function JoshuaApp() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Certifications />
      <Projects />
      <QuoteSection />
      <Services />
      <Footer />

    </>
  );
}




