import Hero from "@/components/ui/Hero";
import LandingClientShell from "@/components/ui/LandingClientShell";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/about";
import Stack from "@/components/stack/stack";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";

export default function Home() {
  return (
    <>
      <LandingClientShell>
        <Hero />
      </LandingClientShell>
      <About />
      <Stack />
      <Projects />
      <Experience /> 
      <Contact />
    </>
  );
}
