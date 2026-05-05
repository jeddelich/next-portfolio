import Hero from "@/components/ui/Hero";
import LandingClientShell from "@/components/ui/LandingClientShell";
import ModalBackgroundShell from "@/components/ui/ModalBackgroundShell";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/about";
import techStack from "@/data/techStack";

export default function Home() {
  return (
    <ModalBackgroundShell>
      <LandingClientShell techStack={techStack}>
        <Hero />
      </LandingClientShell>

      <About />
      <Projects />
    </ModalBackgroundShell>
  );
}
