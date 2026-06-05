
import SectionHeader from "@/components/ui/SectionHeader";
import techStack from "@/data/techStack";
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
            {techStack.map((item) => (
              <div key={item.name} className={styles.stackCell}>
                <div className={styles.stackIcon}>{item.icon}</div>
                <div>
                  <div className={styles.stackName}>{item.name}</div>
                  <div className={styles.stackCat}>{item.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
