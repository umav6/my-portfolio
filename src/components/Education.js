import React from 'react';
import './Education.css';

function Education() {
  const qualifications = [
  {
    id: 1,
    degree: 'Master of Engineering (M.E.) — Computer Science and Engineering',
    institution: 'National Engineering College, Kovilpatti',
    duration: '2025 - 2027',
    score: 'CGPA: 9.00',
  },
  {
    id: 2,
    degree: 'Bachelor of Engineering (B.E.) — Computer Science and Engineering',
    institution: 'JP College of Engineering, Tenkasi',
    duration: '2021 - 2025',
    score: 'CGPA: 8.73',
  },
  {
    id: 3,
    degree: 'Higher Secondary Certificate (HSC) — Maths & Computer Science',
    institution: 'SRM Govt Girls Hr Sec School, Sengottai',
    duration: '2020 - 2021',
    score: 'Percentage: 86%',
  },
  {
    id: 4,
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'SRM Govt Girls Hr Sec School, Sengottai',
    duration: '2018 - 2019',
    score: 'Percentage: 83%',
  },
  ];

  return (
    <section id="qualification" className="education">
      <h2 className="section-title" data-aos="fade-up">Qualification</h2>

      <div className="education-list">
        {qualifications.map((q, i) => (
          <div
            className="education-card"
            key={q.id}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="education-marker"></div>
            <div className="education-details">
              <h3>{q.degree}</h3>
              <p className="education-institution">{q.institution}</p>
              <div className="education-meta">
                <span className="education-duration">{q.duration}</span>
                <span className="education-score">{q.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;