import React from 'react';
import styles from './DocPreview.module.css';

export default function DocPreview(): JSX.Element {
  return (
    <div className={styles.fileList}>
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
    </div>
  );
}
