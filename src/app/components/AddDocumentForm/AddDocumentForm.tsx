import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = { text: string };

export default function AddDocumentForm({
  text,
}: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const document = { title, text };
    fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(document),
    });
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
      ></input>
      <button className={styles.saveButton}>Save file</button>
    </form>
  );
}
