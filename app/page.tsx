import Hero from "@/components/ui/Hero";
import LandingClientShell from "@/components/ui/LandingClientShell";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/about";
import techStack from "@/data/techStack";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <LandingClientShell techStack={techStack}>
        <Hero />
      </LandingClientShell>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
