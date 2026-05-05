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
          <SectionHeader eyebrow="01 — About" title="Get to know me." />
          <div className={styles.aboutGrid}>
            <div className={styles.aboutProse}>
              <p>
                I am a frontend engineer with a deep passion for building
                websites that are both visually engaging like this one and
                genuinely user-friendly.
              </p>
              <p>
                My path into the dev world was not traditional — I came from counseling bringing my passion for both people and
                problem-solving. Reigniting what started as tinkering with HTML and CSS in
                high school, I am now building production-grade
                applications with <strong>React</strong>,{" "}
                <strong>Next.js</strong>, and <strong>TypeScript</strong>. Along
                the way I have shipped everything from{" "}
                <a className={styles.accentLink} href="#projects">
                  streaming clones
                </a>{" "}
                with real authentication and payments, to subscription products
                with dynamic audio players and search bars.
              </p>
              <p>
                I care about the parts of the job that do not always show up in
                screenshots: typed APIs that catch bugs at compile time, loading
                states that never feel jarring, components that compose cleanly
                instead of becoming a tangle. I think great frontend work
                happens at the intersection of design and engineering — and I
                live in the middle.
              </p>
              <p>
                When I am not coding, you will find me exploring Facebook marketplace,
                camping with my local troop of Trail Life boys, or experimenting
                with side projects that probably do not need to exist.
              </p>
            </div>
            <aside className={styles.aboutCard}>
              <div className={styles.aboutCardImg}>
                   <span
                  className={styles.aboutCardImgTape}
                  aria-hidden="true"
                  style={{ zIndex: 100 }}
                ></span>
                <Image
                  src="/about-me-selfie.png"
                  alt="Jed Delich"
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", filter: "grayscale(25%)" }}
                  sizes="(max-width: 900px) 100vw, 380px"
                  priority
                />
              </div>
              <div className={styles.aboutCardStats}>
                <div>
                  <div className={styles.statNum}>14+</div>
                  <div className={styles.statLabel}>Technical Proficiencies</div>
                </div>
                <div>
                  <div className={styles.statNum}>12+</div>
                  <div className={styles.statLabel}>Shipped projects</div>
                </div>
                <div>
                  <div className={styles.statNum}>10+</div>
                  <div className={styles.statLabel}>Production apps</div>
                </div>
                <div>
                  <div className={styles.statNum}>∞</div>
                  <div className={styles.statLabel}>Cups of coffee</div>
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
