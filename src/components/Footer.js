import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Uma Bhagavathy V. Built with React.</p>
    </footer>
  );
}

export default Footer;