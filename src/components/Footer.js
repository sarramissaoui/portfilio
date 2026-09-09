import React from 'react';
import personalData from '../data/personal.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with ❤️ by {personalData.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;