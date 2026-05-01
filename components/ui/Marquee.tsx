import styles from "./Marquee.module.css";

const marqueeItems = [
  "Pixel-perfect interfaces",
  "Accessibility first",
  "Performance budgets",
  "Design system thinking",
  "Type-safe everything",
  "Animation with intent",
];

function Marquee() {
  const loopedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {loopedItems.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.marqueeItem}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
