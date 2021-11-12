import React, { useEffect, useState } from 'react';
import styles from './DocPreview.module.css';
import fetchDocuments from '../../utils/getFiles';

type dataProps = {
  id: number;
  title: string;
  text: string;
};

export default function DocPreview() {
  const [data, setData] = useState<dataProps[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      await fetchDocuments().then(setData);
    };
    fetch();
  }, []);

  return (
    <div className={styles.fileList}>
      {data &&
        data.map((fileName) => (
          <article className={styles.filePreview} key={fileName.id}>
            <img className={styles.fileIcon} src="../src/assets/page.png" />
            <a className={styles.linkToFile} href={'#'}>
              {fileName.title}
            </a>
          </article>
        ))}
    </div>
  );
}
