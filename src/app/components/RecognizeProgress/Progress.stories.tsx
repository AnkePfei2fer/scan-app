import React from 'react';
import Progress from './Progress';

export default {
  component: Progress,
  title: 'Components/Progress',
};

export const Initilazing = () => (
  <Progress status={'initializing'} progress={0} />
);

export const Recognition = () => (
  <Progress status={'recognize text'} progress={0.5} />
);
