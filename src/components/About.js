import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title" data-aos="fade-up">About Me</h2>

      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
          <p>
            <p>
  I'm Uma Bhagavathy V, a postgraduate scholar with a strong foundation
  in Computer Science and Engineering. I'm passionate about Software
  Development, Artificial Intelligence, Machine Learning, and Problem
  Solving, and my work sits at the intersection of deep learning research
  and practical engineering. I'm equally comfortable building full-stack
  web applications and exploring core programming fundamentals, and I'm
  always looking for opportunities to apply what I learn to real-world
  problems.
</p>
          </p>
        </div>

        <div className="about-image" data-aos="fade-left">
          <img src="/Uma Bhagavathy.jpeg" alt="Uma Bhagavathy V" className="profile-photo" />
        </div>
      </div>
    </section>
  );
}

export default About;