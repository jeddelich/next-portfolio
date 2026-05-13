import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./experience.module.css";

function Experience() {
  return (
    <section
      className={`section fade-in visible ${styles.experienceSection}`}
      id="experience"
    >
      <div className="container">
        <div className="row">
          <SectionHeader eyebrow="04 — Experience" title="Where I've worked." />
          <div className={styles.expList}>
            <div className={styles.expTabs} role="tablist">
              <button
                role="tab"
                aria-selected="true"
                className={`${styles.expTab} ${styles.expTabActive}`}
              >
                Freelance
              </button>
              <button role="tab" aria-selected="false" className={styles.expTab}>
                Loom Studio
              </button>
              <button role="tab" aria-selected="false" className={styles.expTab}>
                Cipher Labs
              </button>
              <button role="tab" aria-selected="false" className={styles.expTab}>
                Self-taught
              </button>
            </div>
            <div className={styles.expPane}>
              <h3 className={styles.expRole}>
                Frontend Engineer<span className={styles.at}> @ Freelance</span>
              </h3>
              <div className={styles.expMeta}>Jan 2024 — Present</div>
              <ul className={styles.expBullets}>
                <li>
                  Building production web applications for early-stage startups
                  using Next.js, React, and TypeScript.
                </li>
                <li>
                  Architected and shipped a subscription audio platform with
                  Firebase auth and Stripe billing — Summarist.
                </li>
                <li>
                  Translate Figma designs into pixel-perfect, accessible
                  interfaces with a focus on Core Web Vitals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
