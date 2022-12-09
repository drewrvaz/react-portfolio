import React from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import {BiVoicemail} from 'react-icons/bi';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <AiOutlineMail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>drewrvaz@gmail.com</h5>
            <a href='mailto:drewrvaz@gmail.com' target='_'>Send an email</a>
          </article>
          <article className='contact-option'>
            <BiVoicemail className='contact-option-icon'/>
            <h4>Phone</h4>
            <h5>(734)883-0013</h5>
            <a href='tel:7348830013'>Leave a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='5' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact