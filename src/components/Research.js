import React, { useState } from 'react';
import './Research.css';

function Research() {
  const publications = [
    {
      id: 1,
      type: 'Journal Manuscript',
      title:
        'A Hybrid LSTM-Transformer Architecture for Monthly Surface Air Temperature Prediction over India using ERA5 Reanalysis Data',
      venue: 'International Journal of Modelling, Identification and Control',
      status: 'Manuscript Prepared',
      description:
        'Co-authored research proposing a hybrid deep learning architecture combining LSTM and Transformer models for time series prediction of surface air temperature, achieving benchmark-surpassing results.',
      certificate: null,
    },
    {
      id: 2,
      type: 'Conference Presentation',
      title: 'Predictive Intelligence Model for Plant Leaf Disease Detection',
      venue:
        'International Conference on Deep Tech and Sustainable Engineering Solutions (ICoDSES 2026), National Engineering College',
      status: 'Presented',
      description:
        'Presented research on a GAN-based plant disease detection system evaluated across ResNet, MobileNet, VGG16, and DenseNet architectures, achieving 97.42% accuracy.',
      certificate: '/certificate-leaf-disease.jpeg',
    },
    {
      id: 3,
      type: 'Conference Presentation',
      title: 'Sentiment Analysis using Deep Learning',
      venue:
        'International Conference on Emerging and Transformative Technologies in Computer Science (ICET-CS)',
      status: 'Presented',
      description:
        'Presented a deep learning approach for sentiment analysis of student course reviews, covering text preprocessing, feature extraction, and classification.',
      certificate: '/certificate-sentiment-analysis.jpeg',
    },
    {
  id: 4,
  type: 'Journal Publication',
  title:
    'Comparative Analysis of Deep Learning Architecture for Monthly Surface Air Temperature Prediction',
  venue: 'Vietnam Journal of Science and Technology',
  status: 'Under Submission',
  description:
    'A systematic comparison of CNN, Simple RNN, LSTM, and Transformer architectures for monthly surface air temperature forecasting over India using 30 years of ERA5 reanalysis data. Simple RNN achieved the top performance (R² = 0.9486, 93.94% accuracy) across all five evaluation metrics, with a 10-year recursive temperature projection through 2034 included.',
  certificate: null,
},
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="research & publications" className="research">
      <h2 className="section-title" data-aos="fade-up">Research & Publications</h2>
      <p className="research-subtitle" data-aos="fade-up">
        My academic work in deep learning, published and presented at conferences and journals.
      </p>

      <div className="timeline">
        {publications.map((pub, i) => (
          <div
            className="timeline-item"
            key={pub.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-card">
              <span className="pub-type">{pub.type}</span>
              <span className={`pub-status ${pub.status === 'Presented' ? 'presented' : 'prepared'}`}>
                {pub.status}
              </span>
              <h3>{pub.title}</h3>
              <p className="pub-venue">{pub.venue}</p>
              <p className="pub-desc">{pub.description}</p>

              {pub.certificate && (
                <button
                  className="view-cert-btn"
                  onClick={() => setSelectedCert(pub.certificate)}
                >
                  View Certificate →
                </button>
              )}
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
            <img src={selectedCert} alt="Certificate" className="cert-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Research;