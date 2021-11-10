import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';

function ReadAndSave(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

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
                recognizeText(imageUrl, setRecognizeProgress).then(
                  setRecognizedText
                );
              }
            }}
          >
            Read and Save
          </button>
          {recognizeProgress && (
            <>
              <aside>{recognizeProgress.status}</aside>
              <progress className={styles.progressBar}
                value={recognizeProgress.progress * 100}
                max={100}
              ></progress>
            </>
          )}
          {recognizedText && (
            <p className={styles.outputText}>{recognizedText}</p>
          )}
        </>
      )}
    </div>
  );
}

export default ReadAndSave;
