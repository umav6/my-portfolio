import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const allProjects = [
    {
      id: 1,
      title: 'Predictive Intelligence Model for Plant Leaf Disease Detection',
      category: 'Deep Learning',
      description:
        'A deep learning-based plant disease detection system using image processing. Implemented GAN for image generation and foreground extraction, and evaluated ResNet, MobileNet, VGG16, and DenseNet architectures.',
      highlights: [
        '97.42% accuracy achieved using DenseNet',
        'Deployed on NVIDIA Jetson Nano for real-time inference',
        'Presented at ICoDSES 2026, National Engineering College',
      ],
      tags: ['Deep Learning', 'GAN', 'CNN', 'Image Processing'],
    },
    {
      id: 2,
      title: 'Hybrid LSTM-Transformer for Surface Air Temperature Prediction',
      category: 'Deep Learning',
      description:
        'A hybrid LSTM-Transformer architecture for monthly surface air temperature prediction over India, using ERA5 reanalysis data. Co-authored research achieving benchmark-surpassing results.',
      highlights: [
        'Combines LSTM and Transformer architectures',
        'Trained on ERA5 reanalysis meteorological data',
        'Manuscript prepared for Vietnam Journal of Science and Technology',
      ],
      tags: ['LSTM', 'Transformer', 'Time Series', 'Climate Data'],
    },
    {
      id: 3,
      title: 'Sentiment Analysis of Student Reviews for Course Decision Making',
      category: 'Machine Learning',
      description:
        'A deep learning model that analyzes student feedback and recommends suitable courses, using text preprocessing, feature extraction, and sentiment classification.',
      highlights: [
        'Built an interactive UI using Python and Gradio',
        'Full pipeline: preprocessing → feature extraction → classification',
        'Presented at ICET-CS conference',
      ],
      tags: ['NLP', 'Sentiment Analysis', 'Python', 'Gradio'],
    },
    {
      id: 4,
      title: 'Comparative Analysis of Deep Learning Architectures for Monthly Surface Air Temperature Prediction',
      category: 'Deep Learning',
      description:
        'A comprehensive comparison of CNN, Simple RNN, LSTM, and Transformer architectures for monthly 2-meter surface air temperature prediction over India, using 30 years of ERA5 reanalysis data, evaluated under identical experimental conditions.',
      highlights: [
        'Simple RNN achieved the best performance (R² = 0.9486, Accuracy = 93.94%), outperforming LSTM, CNN, and Transformer',
        'Trained on 30 years (1994–2024) of ERA5 monthly 2m temperature data at 0.25° × 0.25° resolution',
        '10-year recursive future temperature projection (2025–2034) generated using all four trained models',
        'Co-authored with Sivakamasundari G, published in Vietnam Journal of Science and Technology',
      ],
      tags: ['CNN', 'RNN', 'LSTM', 'Transformer', 'ERA5', 'Climate Prediction'],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title" data-aos="fade-up">Projects</h2>

      <div className="projects-grid">
        {allProjects.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={i * 100}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <span className="view-more">Click to view details →</span>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <h3>{selectedProject.title}</h3>
            <p className="project-category">{selectedProject.category}</p>
            <p className="project-desc">{selectedProject.description}</p>
            <h4>Highlights</h4>
            <ul>
              {selectedProject.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="project-tags">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;