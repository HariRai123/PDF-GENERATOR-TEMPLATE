import React from 'react';
import './Testimonials.css';
import user1 from '../images/user1.jpeg'
import user2 from '../images/user2.jpeg'
import user3 from '../images/user3.jpeg'
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <img src={user1} alt="User 1" />
            <h3>John Doe</h3>
            <p>"PDFTools is a game-changer! It has made managing my PDFs so much easier and more efficient."</p>
          </div>
          <div className="testimonial-item">
            <img src={user2} alt="User 2" />
            <h3>Jane Smith</h3>
            <p>"I love the simplicity and effectiveness of the tools. They have saved me so much time."</p>
          </div>
          <div className="testimonial-item">
            <img src={user3} alt="User 3" />
            <h3>Mike Johnson</h3>
            <p>"The best PDF tools I've ever used. Highly recommended for anyone needing reliable PDF solutions."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
