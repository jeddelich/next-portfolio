import Image from "next/image";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div id="top" className={styles.hero}>
      <div className={styles.heroGridBg} aria-hidden="true"></div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerIntro}>
            {/* <div className={styles.heroTitles}>
              <div className={styles.heroTitle}>Jed Delich,</div>
              <div
                className={`orange ${styles.heroTitle}`}
                style={{ fontStyle: "italic" }}
              >
                Software
              </div>
              <div className={styles.heroTitle}>Developer</div>
            </div> */}
            <Image
               src="/branding/JD_WORDMARKW-TAG_NAVY.svg"
                alt="Jed Delich — [your catchphrase]"
                 width={400}
                 height={150}
                 priority
            />
            <div className={styles.headerMeta}>
              <p className={styles.headerPara}>
                I build modern, intuitive websites for businesses wanting to increase their online presence by providing their staff and clients with an experience.
              </p>
            </div>
          </div>
        </div>
        <aside className={styles.featuredProject} aria-label="Current project">
          <div className={styles.featuredProjectDescription}>
            <p className={styles.featuredProjectEyebrow}>
              latest client highlight: <br /><strong style={{ fontSize: "1.5rem" }}>Beacon Growth Partners</strong>
              {/* <MdComputer
                className={styles.featuredProjectEyebrowIcon}
                aria-hidden="true"
              /> */}
            </p>
            <div className={styles.featuredProjectMedia}>
              <a className={styles.featuredProjectHoverText} href="https://beacongrowth.ai" target="_blank" rel="noopener noreferrer">View Website</a>
              <Image
                src="/website_heros/beacon_growth_partners.png"
                alt="Beacon Growth Partners project preview"
                width={1893}
                height={1076}
                priority
                className={styles.featuredProjectImage}
              />
            </div>
            <ul
              className={styles.featuredProjectStack}
              aria-label="Beacon Growth Partners tech stack"
            >
              <li className={styles.featuredProjectStackItem}>WordPress (CMS)</li>
              <li className={styles.featuredProjectStackItem}>SiteGround</li>
              <li className={styles.featuredProjectStackItem}>Cloudflare</li>
              <li className={styles.featuredProjectStackItem}>Custom CSS</li>
            </ul>
              
          </div>
        </aside>
      </header>
    </div>
  );
}

export default Hero;
