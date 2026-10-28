import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Marquee from "@/components/ui/Marquee";
import styles from "./about.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <Marquee />
      <div className="container">
        <div className="row">
          <SectionHeader eyebrow="01 — About Me" title="Who You'll Work With." />
          <div className={styles.aboutGrid}>
            <div className={styles.aboutProse}>
              <p>
                Hey! My name is Jed. My path into the tech world was a little unorthodox as I started my journey in the field of counseling. It was there I developed my passion for both people and their problems.
              </p>
              <p>
                Now I utilize those skills in the online world to create websites for businesses. What I do is custom for each client. For those who want simplicity and control, I&apos;ll setup a content management system. For those who want more complex features and distance from admin work, I&apos;ll mess with integrations and handle all future maintenance!
              </p>
              <p>
                Let me help you bring your vision to life. All it takes is a conversation. Schedule your free 30-minute consultation with me below to see!
              </p>
            </div>
            <div className={styles.aboutCardWrapper}>
            <aside className={styles.aboutCard}>
              <div className={styles.aboutCardImg}>
                <Image
                  src="/about-me-no-background-landscape.png"
                  alt="Jed Delich"
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "bottom",
                    zIndex: 1,
                  }}
                  sizes="(max-width: 900px) 100vw, 380px"
                  priority
                />
              </div>
            </aside>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
