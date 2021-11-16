import React from 'react';
import styles from './DocPreview.module.css';

export default function DocPreview() {
  return (
    <div className={styles.fileList}>
      <article className={styles.filePreview}>
        <img className={styles.fileIcon} src="../src/assets/page.png" />
        <a className={styles.linkToFile} href={'#'}>
          filename
        </a>
      </article>
    </div>
  );
}
