import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';

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
            Scan
          </button>

          {recognizeProgress && (
            <>
              <aside>{recognizeProgress.status}</aside>
              <progress
                className={styles.progressBar}
                value={recognizeProgress.progress * 100}
                max={100}
              ></progress>
            </>
          )}
          {recognizedText && (
            <>
              <p className={styles.outputText}>{recognizedText}</p>
              <AddDocumentForm text={recognizedText} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ReadAndSave;
