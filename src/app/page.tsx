import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
