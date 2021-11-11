import { useState } from 'react';
import { RecognizeProgress, recognizeText } from './ocr';

export default function useRecognizeText() {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeProgress | null>(null);

  const recognize = (imageUrl: string) => {
    if (imageUrl) {
      recognizeText(imageUrl, setProgress).then(setText);
    }
  };
  return { text, progress, recognize };
}
