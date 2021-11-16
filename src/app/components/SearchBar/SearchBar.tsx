import React, { FormEvent, useState } from 'react';
import styles from './SearchBar.module.css';

type dataProps = {
  id: number;
  title: string;
  text: string;
};

export default function SearchBar(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<dataProps[] | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch(
      `https://json-server.machens.dev/docs/?title=${searchQuery}`
    );
    const results = await response.json();
    setSearchResults(results);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchField}
          onChange={(event) => setSearchQuery(event.target.value)}
        ></input>
        <button className={styles.searchButton}>Search library</button>
      </form>
      <div className={styles.fileList}>
        {/* {!searchResults && <span>is loading</span>} */}
        {searchResults?.map((fileName) => (
          <article className={styles.filePreview} key={fileName.id}>
            <img className={styles.fileIcon} src="../src/assets/page.png" />
            <a className={styles.linkToFile} href={'#'}>
              {fileName.title}
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
