import React from 'react';
import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';
import { SiSpringboot, SiCplusplus, SiTensorflow, SiMysql } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C', icon: <SiCplusplus /> },
      ],
    },
    {
      category: 'Web Technologies',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
      ],
    },
    {
      category: 'AI / ML',
      skills: [
        { name: 'Deep Learning', icon: <TbBrain /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'CNN / GAN', icon: <TbBrain /> },
      ],
    },
    {
      category: 'Tools & Databases',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'Databases', icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title" data-aos="fade-up">Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.category}
            className="skill-category"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <h3>{cat.category}</h3>
            <div className="skill-icons-row">
              {cat.skills.map((skill) => (
                <div className="skill-icon-item" key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-icon-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;