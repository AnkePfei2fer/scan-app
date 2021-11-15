import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <form>
      <input type="text" className={styles.searchField}></input>
      <button className={styles.searchButton}>Search library</button>
    </form>
  );
}
