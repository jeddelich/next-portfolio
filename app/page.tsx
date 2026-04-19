import LandingClientShell from "@/components/ui/LandingClientShell";
import ModalBackgroundShell from "@/components/ui/ModalBackgroundShell";
import Projects from "@/components/projects/Projects";
import techStack from "@/data/techStack";

export default function Home() {
  return (
    <ModalBackgroundShell>
      <LandingClientShell techStack={techStack}>
        <header className="header">
          <div className="header__content">
            <h1 className="title">Hey</h1>
            <h1 className="title orange">I&apos;m Jed.</h1>
            <p className="header__para">
              I&apos;m a <b className="orange">Frontend Software Engineer</b> with
              a strong passion for building websites that are both visually
              engaging and user-friendly.
            </p>
          </div>
          <div className="social__list">
            <a
              href="https://www.linkedin.com/in/jed-delich/"
              target="_blank"
              className="social__link click"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/jeddelich"
              target="_blank"
              className="social__link click"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="social__link click"
              href="https://docs.google.com/document/d/1ERrjHAJd3pF_YNKKpFaNXXVOQ65JDc1v/edit?usp=sharing&ouid=114423874225935714907&rtpof=true&sd=true"
              target="_blank"
            >
              <i className="fa-solid fa-file-pdf"></i>
            </a>
          </div>
        </header>
      </LandingClientShell>

      <Projects />
    </ModalBackgroundShell>
  );
}
