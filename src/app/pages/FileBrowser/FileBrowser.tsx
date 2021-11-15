import React, { useEffect, useState } from 'react';
import fetchDocuments from '../../utils/getFiles';
import styles from './FileBrowser.module.css';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function FileBrowser() {
  type dataProps = {
    id: number;
    title: string;
    text: string;
  };

  function FileBrowser() {
    const [data, setData] = useState<dataProps[] | null>(null);

    useEffect(() => {
      const fetch = async () => {
        await fetchDocuments().then(setData);
      };
      fetch();
    }, []);

    return (
      <>
        <SearchBar />
        <div className={styles.fileList}>
          {/* {data && */}
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
