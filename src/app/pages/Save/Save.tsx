import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import Progress from '../../components/RecognizeProgress/Progress';

function Scan(): JSX.Element {
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
            <Progress
              progress={recognizeProgress.progress * 100}
              status={recognizeProgress.status}
            />
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

export default Scan;
