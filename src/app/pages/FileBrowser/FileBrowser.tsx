import React, { useEffect, useState } from 'react';
import fetchDocuments from '../../utils/getFiles';
import styles from './FileBrowser.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';

type dataProps = {
  id: number;
  title: string;
  text: string;
};

export default function FileBrowser() {
  function FileBrowser() {
    const [data, setData] = useState<dataProps[] | null>(null);

    useEffect(() => {
      const fetch = async () => {
        await fetchDocuments().then(setData);
      };
      fetch();
    }, []);

    // Sort by title in alphabetical order
    data?.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    return (
      <>
        <SearchBar />
        <div className={styles.fileList}>
          {!data && <span>is loading</span>}
          {data?.map((fileName) => (
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

  return <FileBrowser />;
}
