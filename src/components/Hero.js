import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const roles = ['Researcher', 'Deep Learning Enthusiast', 'Software Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100);
    } else if (!isDeleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 50);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Uma Bhagavathy V</h1>
        <h2 className="hero-role">
          {text}
          <span className="cursor">|</span>
        </h2>
        <p className="hero-description">
          I'm someone who likes solving problems methodically, whether that's training a model, debugging code, or designing a clean user interface.
        </p>
        <div className="hero-buttons">
          <a href={`${process.env.PUBLIC_URL}/Uma_Resume.pdf`} download className="btn btn-outline">
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;