
import styles from "./contact.module.css";

function contact() {
  return (
    <section className={styles.contact} id="connect">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.contactTitle}>
          Let&apos;s build something <em>worth shipping</em>.
        </h2>
        <p className={styles.contactSub}>
          I&apos;m currently taking on new freelance and full-time opportunities. If
          you have a project in mind - or just want to connect - my inbox is always open!
        </p>
        <a href="mailto:dev@jeddelich.com" className={styles.contactEmail}>
          dev@jeddelich.com
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7"></path>
            <path d="M7 7h10v10"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default contact;
