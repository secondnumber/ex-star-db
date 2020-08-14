import React from 'react';
import './ErrorIndicator.css';
import ErrorImage from './death-star.svg';

const ErrorIndicator = () => (
  <div>
    <ErrorImage />
    <p>BOOM!</p>
    <p>Something has gone terribly wrong</p>
    <p>(but we already sent droids to fix it)</p>
  </div>
);

export default ErrorIndicator;
