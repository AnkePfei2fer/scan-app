import React, { ChangeEvent, useState } from 'react';
import styles from './imageInput.module.css';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageUrl = URL.createObjectURL(file);
    setImageUrl(newImageUrl);
    onUpload(newImageUrl);
  };

  return (
    <div className={styles.uploadContainer}>
      {imageUrl ? (
        <img className={styles.uploadedImage} src={imageUrl}></img>
      ) : (
        <label className={styles.inputBox}>
          <input
            className={styles.input}
            type="file"
            accept="image/*"
            onChange={handleChange}
          ></input>
          <h1 className={styles.inputText}>Import a document</h1>
          <img
            className={styles.inputImage}
            src="../src/assets/empty-folder-farbig.png"
          ></img>
        </label>
      )}
    </div>
  );
}

export default ImageInput;
