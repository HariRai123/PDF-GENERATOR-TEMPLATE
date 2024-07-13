import React from 'react';
import './Features.css';
import merge from '../images/merge.png'
import compress from '../images/compress.png'
import split from '../images/split.png'
import convert from '../images/convert.jpeg'
function Features() {
  return (
    <section className="features">
      <h2>Discover Our PDF Tools</h2>
      <div className="feature-grid">
        <div className="feature-item">
          <img src={compress} alt="PDF Compress" />
          <h3>PDF Compress</h3>
          <p>Reduce file size without compromising quality.</p>
          <a href="/tools/compress" className="btn-secondary">Try it</a>
        </div>
        <div className="feature-item">
          <img src={merge} alt="PDF Merge" />
          <h3>PDF Merge</h3>
          <p>Combine multiple PDF files into one.</p>
          <a href="/tools/merge" className="btn-secondary">Try it</a>
        </div>
        <div className="feature-item">
          <img src={split} alt="PDF Split" />
          <h3>PDF Split</h3>
          <p>Split a PDF file into multiple documents.</p>
          <a href="/tools/split" className="btn-secondary">Try it</a>
        </div>
        <div className="feature-item">
          <img src={convert} alt="PDF Convert" />
          <h3>PDF Convert</h3>
          <p>Convert PDF to various file formats.</p>
          <a href="/tools/convert" className="btn-secondary">Try it</a>
        </div>
      </div>
    </section>
  );
}

export default Features;
