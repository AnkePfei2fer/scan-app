import React, { FormEvent, useState } from 'react';

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter file name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <button>Save file</button>
    </form>
  );
}
