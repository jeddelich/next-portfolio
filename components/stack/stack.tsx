
"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import techStack from "@/data/techStack";
import styles from "./stack.module.css";

const filterOptions = ["All", "Frameworks", "Languages", "Styling", "Backend", "Tools"] as const;
type FilterOption = (typeof filterOptions)[number];

function Stack() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [visibleCount, setVisibleCount] = useState(16);

  const filteredTechStack =
    activeFilter === "All"
      ? techStack
      : techStack.filter((item) => item.group === activeFilter);

  const visibleTechStack = filteredTechStack.slice(0, visibleCount);

  const handleLoadMoreToggle = () => {
    if (visibleCount >= filteredTechStack.length) {
      setVisibleCount(16);
    } else {
      setVisibleCount((prev) => prev + 16);
    }
  };

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
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(16);
                }}
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
      {filteredTechStack.length > 16 && (
      <button
        type="button"
        className={styles.loadMoreButton}
        onClick={handleLoadMoreToggle}
      >
        {visibleCount < filteredTechStack.length ? "Load More" : "Show Less"}
      </button>
      )}
    </section>
  );
}

export default Stack;
