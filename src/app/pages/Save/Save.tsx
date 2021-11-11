import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import Progress from '../../components/RecognizeProgress/Progress';
import useRecognizeText from '../../utils/useRecognizeText';

function Scan(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  return (
    <div className={styles.saveContainer}>
      <ImageInput onUpload={setImageUrl} />

      {imageUrl && (
        <>
          <button
            className={styles.button}
            onClick={() => {
              if (imageUrl) {
                recognize(imageUrl);
              }
            }}
          >
            Scan
          </button>

          {progress && (
            <Progress
              progress={progress.progress * 100}
              status={progress.status}
            />
          )}

          {text && (
            <>
              <p className={styles.outputText}>{text}</p>
              <AddDocumentForm text={text} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Scan;
