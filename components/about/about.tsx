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
          <div className={styles.aboutContent}>
            <p>
              I design and build web experiences with a focus on performance,
              thoughtful interactions, and clean implementation.
            </p>
            <p>
              My approach blends product thinking with front-end engineering so
              every detail supports a clear, usable result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
