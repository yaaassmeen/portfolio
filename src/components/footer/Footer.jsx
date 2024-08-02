import React from 'react';
import './footer.css';
import { GrInstagram } from 'react-icons/gr';
import { IoLogoLinkedin } from 'react-icons/io5';

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Back to top</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li> {/* Fixed typo */}
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <GrInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yasmeen. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
