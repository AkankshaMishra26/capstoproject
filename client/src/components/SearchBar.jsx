import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Type any job title" className={styles.searchInput} />
      <div className={styles.filters}>
        <div className={styles.filterTags}>
          <span className={styles.tag}>Frontend <span className={styles.removeTag}>×</span></span>
          <span className={styles.tag}>CSS <span className={styles.removeTag}>×</span></span>
          <span className={styles.tag}>JavaScript <span className={styles.removeTag}>×</span></span>
        </div>
        <div className={styles.filterButtons}>
          <button className={styles.applyButton}>Apply Filter</button>
          <button className={styles.clearButton}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
