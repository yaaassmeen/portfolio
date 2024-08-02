import './contact.css';
import React, { useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ylt95de', 'template_o6f5thu', form.current, '028YRLUuUa5jMfFzT')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );

    e.target.reset(); // Optionally reset the form after submission
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>yasmeen2002mahilang@gmail.com</h5>
            <a href="mailto:yasmeen2002mahilang@gmail.com?subject=SweetWords&body=I wanted to reach out to you!">Click Here to Send Email</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 7224003135</h5>
            <a href="https://api.whatsapp.com/send?phone=917224003135" target="_blank" rel="noopener noreferrer">Click Here to Send Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
