import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';
import usePostDocument from '../../utils/usePostDocument';

type AddDocumentFormProps = { text: string };

export default function AddDocumentForm({
  text,
}: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const document = { title, text };
    await postDocument(document);
    setTitle('');
  };

  return (
    <form className={styles.saveContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.filenameInput}
        placeholder="Enter file name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className={styles.saveButton} disabled={!title || isLoading}>
        Save file
      </button>
    </form>
  );
}
