import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./about.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="row">
          <SectionHeader eyebrow="01 — About" title="A little about me." />
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
