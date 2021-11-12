import React from 'react';
import styles from './DocPreview.module.css';

export default function DocPreview(title: string): JSX.Element {
  return (
    <>
      <article className={styles.filePreview}>
        <img className={styles.fileIcon} src="../src/assets/page.png" />
        <a className={styles.linkToFile} href={'#'}>
          file 1
        </a>
      </article>
      <article className={styles.filePreview}>
        <img className={styles.fileIcon} src="../src/assets/page.png" />
        <a className={styles.linkToFile} href={'#'}>
          file 2
        </a>
      </article>
      <article className={styles.filePreview}>
        <img className={styles.fileIcon} src="../src/assets/page.png" />
        <a className={styles.linkToFile} href={'#'}>
          file 3
        </a>
      </article>
    </>
  );
}
