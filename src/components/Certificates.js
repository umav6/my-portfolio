import React, { useState } from 'react';
import './Certificates.css';

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Campus to Technical Careers Training Program',
      issuer: 'Capgemini & TNS India Foundation',
      year: '2024 - 2025',
      image: `${process.env.PUBLIC_URL}/cert-capgemini-tns.jpeg`,
    },
    {
      id: 2,
      title: 'NPTEL: Introduction to Industry 4.0 and Industrial IoT',
      issuer: 'IIT Kharagpur (NPTEL, Elite Certification)',
      year: '2026',
      image: `${process.env.PUBLIC_URL}/cert-nptel-industry40.jpeg`,
    },
    {
      id: 3,
      title: 'NASA International Space Apps Challenge — Galactic Problem Solver',
      issuer: 'NASA International Space Apps Challenge',
      year: '2025',
      image: `${process.env.PUBLIC_URL}/cert-nasa-spaceapps.jpeg`,
    },
    {
      id: 4,
      title: '30 Days MasterClass in Artificial Intelligence',
      issuer: 'NoviTech R&D Private Limited',
      year: '2024',
      image: `${process.env.PUBLIC_URL}/cert-novitech-ai.jpeg`,
    },
    {
      id: 5,
      title: 'Data Structures in C',
      issuer: 'Great Learning Academy',
      year: '2023',
      image: `${process.env.PUBLIC_URL}/cert-great-learning-ds.jpeg`,
    },
    {
      id: 6,
      title: 'Webinar: Road Accident Predictions Using Mining Techniques',
      issuer: 'Innovaskill Technologies Private Limited',
      year: '2025',
      image: `${process.env.PUBLIC_URL}/cert-innovaskill-webinar.jpeg`,
    },
    {
      id: 7,
      title: 'Python and Machine Learning Fundamentals',
      issuer: 'Perfect Plan B ELearning Private Limited',
      year: '2021',
      image: `${process.env.PUBLIC_URL}/cert-perfectplanb-ml.jpeg`,
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications & achievements" className="certificates">
      <h2 className="section-title" data-aos="fade-up">Certifications & Achievements</h2>
      <p className="certificates-subtitle" data-aos="fade-up">
        Training programs, online courses, and recognitions I've completed.
      </p>

      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <div
            className="certificate-card"
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 100}
            onClick={() => setSelectedCert(cert)}
          >
            <div className="certificate-thumb">
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-year">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              ✕
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-image" />
            <p className="cert-modal-caption">{selectedCert.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;