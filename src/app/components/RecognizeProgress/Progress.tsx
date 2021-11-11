import React from 'react';
import { RecognizeProgress } from '../../utils/ocr';

function Progress({ status, progress }: RecognizeProgress): JSX.Element {
  return (
    <aside>
      {status}
      <progress value={progress * 100} max={100} />
    </aside>
  );
}

export default Progress;
