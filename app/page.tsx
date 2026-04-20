import LandingClientShell from "@/components/ui/LandingClientShell";
import ModalBackgroundShell from "@/components/ui/ModalBackgroundShell";
import Projects from "@/components/projects/Projects";
import techStack from "@/data/techStack";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ModalBackgroundShell>
      <LandingClientShell techStack={techStack}>
        <header className={styles.header}>
          <div className="header__content">
            <h1 className="title">Hey</h1>
            <h1 className="title orange">I&apos;m Jed.</h1>
            <p className={styles.headerPara}>
              I&apos;m a <b className="orange">Frontend Software Engineer</b> with
              a strong passion for building websites that are both visually
              engaging and user-friendly.
            </p>
          </div>
          <div className={styles.socialList}>
            <a
              href="https://www.linkedin.com/in/jed-delich/"
              target="_blank"
              className={`${styles.socialLink} click`}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175A1.162 1.162 0 0 1 0 14.854zM4.943 13.5V6.169H2.542V13.5zM3.742 5.171c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.248-1.342-1.248S2.4 3.213 2.4 3.923c0 .694.52 1.248 1.327 1.248zm9.758 8.329v-4.025c0-2.155-1.149-3.158-2.681-3.158-1.235 0-1.79.68-2.099 1.157h-.03v-.994H6.29c.03.658 0 7.02 0 7.02h2.4V9.58c0-.21.015-.42.077-.57.168-.42.55-.856 1.19-.856.84 0 1.176.646 1.176 1.593V13.5z" />
              </svg>
            </a>
            <a
              href="https://github.com/jeddelich"
              target="_blank"
              className={`${styles.socialLink} click`}
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.63 7.63 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a
              className={`${styles.socialLink} click`}
              href="https://docs.google.com/document/d/1ERrjHAJd3pF_YNKKpFaNXXVOQ65JDc1v/edit?usp=sharing&ouid=114423874225935714907&rtpof=true&sd=true"
              target="_blank"
            >
              <svg aria-hidden="true" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
                <path d="M5.523 6.667h.72c.805 0 1.486.356 1.486 1.21 0 .855-.681 1.222-1.486 1.222h-.419V10H5.522z" />
                <path d="M5.824 7.037v1.69h.378c.56 0 .869-.242.869-.85 0-.61-.31-.84-.869-.84z" />
                <path d="M8.795 6.667h.99c1.06 0 1.812.59 1.812 1.666C11.597 9.41 10.844 10 9.785 10h-.99z" />
                <path d="M9.095 7.037v2.593h.63c.735 0 1.25-.38 1.25-1.297 0-.914-.515-1.296-1.25-1.296z" />
                <path d="M12.668 6.667h1.908v.37h-1.607v1.02h1.449v.369h-1.449V10h-.3z" />
                <path d="M14 4.5V14H2V2h8.5zm-7.5 2a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-.5h2.5a.75.75 0 0 0 .75-.75v-.25h.5v2.5A1.5 1.5 0 0 1 13 12.5H3A1.5 1.5 0 0 1 1.5 11V3A1.5 1.5 0 0 1 3 1.5h6.5V4A.5.5 0 0 0 10 4.5z" />
              </svg>
            </a>
          </div>
        </header>
      </LandingClientShell>

      <Projects />
    </ModalBackgroundShell>
  );
}
