import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Marquee from "@/components/ui/Marquee";
import styles from "./about.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <Marquee />
      <div className="container">
        <div className="row">
          <SectionHeader eyebrow="01 — About Me" title="Who You'll Work With." />
          <div className={styles.aboutGrid}>
            <div className={styles.aboutProse}>
              <p>
                Hey! My name is Jed. My path into the tech world wasn&apos;t like everyone else—it started with my background in counseling. It was there I first developed my passion for people and their problems. I believe specific needs require specific solutions, which are achieved through effective listening and communication.
              </p>
              <p>
                Now I utilize those skills in the online world to create superior website experiences for businesses and their users. What I do is truly custom for every client. For those who want more control, I&apos;ll leave them with a content management system. For those who want more of a hands-off approach and unlimited potential, I&apos;ll create something completely from scratch and maintain it for them.
              </p>
              <p>
                Let me help you bring your vision to life. All it takes is a conversation. Also, feel free to scroll down and check out some of my past work.
              </p>
            </div>
            <aside className={styles.aboutCard}>
              <div className={styles.aboutCardImg}>
                <Image
                  src="/about-me-no-background-landscape.png"
                  alt="Jed Delich"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "bottom",
                    zIndex: 1,
                  }}
                  sizes="(max-width: 900px) 100vw, 380px"
                  priority
                />
              </div>
              <div className={styles.aboutCardStats}>
                <div>
                  <div className={styles.statNum}>15+</div>
                  <div className={styles.statLabel}>Tech Proficiencies</div>
                </div>
                <div>
                  <div className={styles.statNum}>10+</div>
                  <div className={styles.statLabel}>Built Websites</div>
                </div>
                <div>
                  <div className={styles.statNum}>1,024</div>
                  <div className={styles.statLabel}>Git Contributions</div>
                </div>
                <div>
                  <div className={styles.statNum}>2</div>
                  <div className={styles.statLabel}>Current clients</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
