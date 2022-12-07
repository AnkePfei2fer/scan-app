import React from 'react';
import ImageInput from './imageInput';

export default { component: ImageInput, title: 'Components/ImageInput' };
export const Default = () => (
  <ImageInput
    onUpload={function (): void {
      throw new Error('Function not implemented.');
    }}
  />
);
