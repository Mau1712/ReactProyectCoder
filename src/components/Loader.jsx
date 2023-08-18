import React from 'react';
import { Waveform } from '@uiball/loaders';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <Waveform size={40} lineWeight={3.5} speed={1} color="#ff4800da" />
    </div>
  );
}

export default Loader;
