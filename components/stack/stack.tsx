
import SectionHeader from "@/components/ui/SectionHeader";
import styles from "./stack.module.css";

function Stack() {
  return (
    <section
      className={`section fade-in visible ${styles.stackSection}`}
      id="stack"
    >
      <div className="container">
        <div className="row">
          <SectionHeader eyebrow="02 — Stack" title="Tools I reach for daily." />
          <div className={styles.stackCats}>
            <button className={`${styles.stackChip} ${styles.stackChipActive}`}>All</button>
            <button className={styles.stackChip}>Frameworks</button>
            <button className={styles.stackChip}>Languages</button>
            <button className={styles.stackChip}>Styling</button>
            <button className={styles.stackChip}>Backend</button>
            <button className={styles.stackChip}>Tools</button>
          </div>
          <div className={styles.stackGrid}>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>R</div>
              <div>
                <div className={styles.stackName}>React</div>
                <div className={styles.stackCat}>UI library</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>N</div>
              <div>
                <div className={styles.stackName}>Next.js</div>
                <div className={styles.stackCat}>Full-stack React</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>TS</div>
              <div>
                <div className={styles.stackName}>TypeScript</div>
                <div className={styles.stackCat}>Typed JavaScript</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>JS</div>
              <div>
                <div className={styles.stackName}>JavaScript</div>
                <div className={styles.stackCat}>ES2024+</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>tw</div>
              <div>
                <div className={styles.stackName}>Tailwind CSS</div>
                <div className={styles.stackCat}>Utility-first</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>#</div>
              <div>
                <div className={styles.stackName}>CSS</div>
                <div className={styles.stackCat}>Modern CSS</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>M</div>
              <div>
                <div className={styles.stackName}>Material UI</div>
                <div className={styles.stackCat}>Component library</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>F</div>
              <div>
                <div className={styles.stackName}>Firebase</div>
                <div className={styles.stackCat}>Auth &amp; data</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>$</div>
              <div>
                <div className={styles.stackName}>Stripe</div>
                <div className={styles.stackCat}>Payments</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>Z</div>
              <div>
                <div className={styles.stackName}>Zustand</div>
                <div className={styles.stackCat}>State management</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>J</div>
              <div>
                <div className={styles.stackName}>Jest</div>
                <div className={styles.stackCat}>Testing</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>V</div>
              <div>
                <div className={styles.stackName}>Vercel</div>
                <div className={styles.stackCat}>Hosting</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>Fi</div>
              <div>
                <div className={styles.stackName}>Figma</div>
                <div className={styles.stackCat}>Design handoff</div>
              </div>
            </div>
            <div className={styles.stackCell}>
              <div className={styles.stackIcon}>g</div>
              <div>
                <div className={styles.stackName}>Git</div>
                <div className={styles.stackCat}>Version control</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
