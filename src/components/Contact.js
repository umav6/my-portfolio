import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/xlgyjdyn', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

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
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  autoComplete="name"
  required
/>
<input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  autoComplete="email"
  required
/>
<textarea
  name="message"
  placeholder="Your Message"
  rows="5"
  value={formData.message}
  onChange={handleChange}
  autoComplete="off"
  required
></textarea>
          <input
  type="text"
  name="_gotcha"
  style={{ display: 'none' }}
  tabIndex="-1"
  autoComplete="off"
/>
          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {submitted && (
            <p className="form-success">✓ Message sent! I'll get back to you soon.</p>
          )}
          {error && (
            <p className="form-error">✗ Something went wrong. Please try again or email me directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;