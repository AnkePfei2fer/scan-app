import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';
// import Tesseract from 'tesseract.js';
import { recognizeText } from '../../utils/ocr';

function ReadAndSave() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  // const [progress, setProgress] = useState<number>(0);

  return (
    <div className={styles.saveContainer}>
      <ImageInput onUpload={setImageUrl} />
      {imageUrl && (
        <>
          <input type="text" placeholder="Enter file name"></input>
          <button
            className={styles.button}
            onClick={() => {
              if (imageUrl) {
                recognizeText(imageUrl, ({ progress, status }) => {
                  console.log(progress, status);
                }).then(setRecognizedText);
              }
            }}
          >
            Read and Save
          </button>
          {/* <progress value={progress * 100} max={100}></progress> */}
          {recognizedText && (
            <p className={styles.outputText}>{recognizedText}</p>
          )}
        </>
      )}
    </div>
  );
}

export default ReadAndSave;
