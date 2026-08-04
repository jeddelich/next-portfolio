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
                Hey! My name is Jed. My path into the tech world wasn&apos;t traditional—it started with my education and experience in counseling. You see, it was there I developed my passion for people and their problems. I learned how to truly listen and communicate effectively, so I could provide specific solutions for their specific needs.
              </p>
              <p>
                Along
                the way I have shipped everything from{" "}
                  streaming clones
                with real authentication and payments, to subscription products
                with dynamic audio players and search bars. I also have experience developing for <a className={styles.accentLink} href="#projects">a real-time AI skincare analysis platform</a>.
              </p>
              <p>
                Having traveled to 35+ countries, to me learning is not just a thing you do; it's a lifestyle. I am not afraid to ask questions, or to approach things from a different point of view. <strong>It is only when we understand people and problems properly that we can write good code</strong>.
              </p>
              <p>
                When I am not coding, you will find me exploring Facebook marketplace,
                camping with my local troop of Trail Life boys, or experimenting
                with side projects that probably do not need to exist.
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
                  <div className={styles.statNum}>3</div>
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
