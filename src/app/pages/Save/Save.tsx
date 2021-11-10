import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';

function ReadAndSave() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className={styles.saveContainer}>
      <ImageInput onUpload={setImageUrl} />
      <button className={styles.button} disabled={imageUrl === null}>
        Read and Save
      </button>
    </div>
  );
}

export default ReadAndSave;
