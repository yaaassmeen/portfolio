import React from 'react';
import './header.css';
import CV from '../../assets/Yasmeen_Mahilang_2025.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' aria-label="Download CV">Download CV</a>
        <a href="#contact" className='btn btn-primary' aria-label="Contact Section">Let's Connect</a>
    </div>
  );
}

export default CTA;
