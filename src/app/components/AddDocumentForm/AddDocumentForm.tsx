import React from 'react';

type AddDocumentFormProps = { text: string };

export default function AddDocumentForm({ text }: AddDocumentFormProps) {
  // const [title, setTitle] = useState('');

  return (
    <form>
      <input type="text" placeholder="Enter file name"></input>
    </form>
  );
}
