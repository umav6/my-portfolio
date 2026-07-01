import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm('xlgyjdyn');

  return (
    <section id="contact" className="contact">
      <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
      <p className="contact-subtitle" data-aos="fade-up">
        Have an opportunity, collaboration idea, or just want to say hi? My inbox is open.
      </p>

      <div className="contact-wrapper" data-aos="fade-up">
        <div className="contact-info">
          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">umabhagavathyv@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone</span>
            <span className="info-value">+91 6380515913</span>
          </div>
          <div className="info-item">
            <span className="info-label">LinkedIn</span>
            <span className="info-value">linkedin.com/in/uma-bhagavathy-v</span>
          </div>
          <div className="info-item">
            <span className="info-label">GitHub</span>
            <span className="info-value">github.com/umav6</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            autoComplete="off"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          {/* Honeypot for bot detection */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>

          {state.succeeded && (
            <p className="form-success">✓ Message sent! I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;