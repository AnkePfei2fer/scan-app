import React, { FormEvent, useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `https://json-server.machens.dev/docs/?title=${searchQuery}`
    );
    const searchResults = await response.json();
    console.log(searchResults);
    return searchResults;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchField}
        onChange={(event) => setSearchQuery(event.target.value)}
      ></input>
      <button className={styles.searchButton}>Search library</button>
    </form>
  );
}
