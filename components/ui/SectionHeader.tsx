import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
};

function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.sectionEyebrow}>{eyebrow}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <span className={styles.sectionRule} aria-hidden="true"></span>
    </div>
  );
}

export default SectionHeader;