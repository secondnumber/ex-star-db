import React from 'react';
import './ErrorIndicator.css';
import ErrorImage from './explosion.jpeg';

const ErrorIndicator = () => (
  <div>
    <img src={ErrorImage} alt="Explosion" />
    <span>BOOM!</span>
    <span>Something has gone terribly wrong</span>
    <span>(but we already sent droids to fix it)</span>
  </div>
);

export default ErrorIndicator;
