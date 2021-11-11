import React, { useState } from 'react';
import styles from './Save.module.css';
import ImageInput from '../../components/imageInput/imageInput';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import Progress from '../../components/RecognizeProgress/Progress';
import useRecognizeText from '../../utils/useRecognizeText';

function Scan(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  let content;

  if (imageUrl) {
    content = (
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
    );
  }
  if (progress) {
    content = (
      <Progress progress={progress.progress * 100} status={progress.status} />
    );
  }
  if (text) {
    content = (
      <>
        <p className={styles.outputText}>{text}</p>
        <AddDocumentForm text={text} />
      </>
    );
  }

  return (
    <div className={styles.saveContainer}>
      <ImageInput onUpload={setImageUrl} />
      {content}
    </div>
  );
}

export default Scan;
