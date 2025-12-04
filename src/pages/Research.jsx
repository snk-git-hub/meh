import React from 'react';
import '../Styles/Research.css';

export default function Research() {
  return (
    <>
      <header className="research-header">
        <h1>Research</h1>
      </header>
      <section className="research-section">
        <h2 className="research-subheader">Research Areas</h2>
        <ul className="research-list">
          <li className="research-item">Machine Learning & AI</li>
          <li className="research-item">Data Science</li>
          <li className="research-item">Signature Verification & Biometrics</li>
        </ul>

        <h2 className="research-subheader">Publications</h2>
        <div className="publication">
          <strong className="publication-title">1. SE-CapsNet: A Hybrid Squeeze-and-Excitation Capsule Network for Signature Verification</strong>
          <p className="publication-status">(Currently under review for publication)</p>
          <p className="publication-description">
            A novel deep learning model combining SE blocks with Capsule Networks that significantly improves offline signature verification accuracy, especially with limited training data.
          </p>
          <p className="publication-collaborators">
            Collaborators: Shivanandu.k, Garima Pandey, and Shashidhar G. Koolagudi.
          </p>
          <p className="publication-details">
            <strong>Conference:</strong> E2ACON 2025 – International Conference on Electrical, Electronics & Automation (8-9 March 2025).
          </p>
        </div>
      </section>
    </>
  );
}