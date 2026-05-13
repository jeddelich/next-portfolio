import styles from "./experience.module.css";

type ExperiencePaneProps = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

function ExperiencePane({ role, company, period, bullets }: ExperiencePaneProps) {
  return (
    <div className={styles.expPane}>
      <h3 className={styles.expRole}>
        {role}
        <span className={styles.at}> @ {company}</span>
      </h3>
      <div className={styles.expMeta}>{period}</div>
      <ul className={styles.expBullets}>
        {bullets.map((bullet, index) => (
          <li key={`${bullet}-${index}`}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperiencePane;
