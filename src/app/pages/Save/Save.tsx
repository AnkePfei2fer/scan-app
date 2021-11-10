import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';
import Tesseract from 'tesseract.js';

function ReadAndSave() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

  return (
    <div className={styles.saveContainer}>
      <ImageInput onUpload={setImageUrl} />
      {imageUrl ? (
        <>
          <input type="text" placeholder="Enter file name"></input>
          <button
            className={styles.button}
            onClick={() => {
              Tesseract.recognize(imageUrl, 'eng', {
                logger: (message) => console.log(message.progress),
              }).then((result) => {
                const text = result.data.text;
                setRecognizedText(text);
              });
            }}
          >
            Read and Save
          </button>
          <p className={styles.outputText}>{recognizedText}</p>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default ReadAndSave;
