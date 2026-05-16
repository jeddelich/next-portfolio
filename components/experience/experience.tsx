"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ExperiencePane from "@/components/experience/ExperiencePane";
import panes from "@/data/experience";
import usePane from "@/hooks/usePane";
import styles from "./experience.module.css";

function Experience() {
  const { activePane, onPaneChange } = usePane(0);

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
              {panes.map((pane, index) => (
                <button
                  key={pane.company}
                  role="tab"
                  aria-selected={activePane === index}
                  className={`${styles.expTab} ${activePane === index ? styles.expTabActive : ""}`}
                  onClick={() => onPaneChange(index)}
                >
                 0{pane.number}. {pane.company}
                </button>
              ))}
            </div>
            <ExperiencePane
              role={panes[activePane].role}
              company={panes[activePane].company}
              period={panes[activePane].period}
              bullets={panes[activePane].bullets}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
