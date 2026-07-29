
"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import techStack from "@/data/techStack";
import styles from "./stack.module.css";

const filterOptions = ["All", "Frameworks", "Languages", "Styling", "Backend", "Tools"] as const;
type FilterOption = (typeof filterOptions)[number];

function Stack() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const visibleTechStack =
    activeFilter === "All"
      ? techStack
      : techStack.filter((item) => item.group === activeFilter);

  return (
    <section
      className={`section fade-in visible ${styles.stackSection}`}
      id="tech"
    >
      <div className="container">
        <div className="row">
          <SectionHeader eyebrow="02 — Tech Used" title="Tools I'm Experienced In." />
          <div className={styles.stackCats}>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`${styles.stackChip} ${activeFilter === filter ? styles.stackChipActive : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className={styles.stackGrid}>
            {visibleTechStack.map((item) => (
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
