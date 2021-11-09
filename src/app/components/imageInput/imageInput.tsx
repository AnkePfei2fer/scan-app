import React, { ChangeEvent, useState } from 'react';
import styles from './imageInput.module.css';

function ImageInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageUrl = URL.createObjectURL(file);
    setImageUrl(newImageUrl);
  };

  return (
    <div className={styles.uploadContainer}>
      <label>
        <input
          className={styles.input}
          type="file"
          onChange={handleChange}
        ></input>
        <img
          className={styles.inputImage}
          src="../src/assets/verschluss-farbig.png"
        ></img>
      </label>
      {imageUrl && <img className={styles.uploadedImage} src={imageUrl}></img>}
    </div>
  );
}

export default ImageInput;
