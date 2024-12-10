import React from 'react';
import '../styles/portfolio.css';
import instagram from '../assets/instagram.png'
import rps from '../assets/rps.png'
import contacts from '../assets/contacts.png'
import portfolio from '../assets/portfolio.png'

const Portfolio = () => {
  const projects = [
    {
      name: 'Instagram Clone',
      demoLink: 'https://instagram-tau-blond.vercel.app/',
      codeLink: 'https://github.com/andrewraymondraj/instagram',
      imgSrc: instagram, 
      skills: ['HTML', 'CSS', 'Bootstrap'],
      description: "This project recreates Instagram UI using HTML and CSS, focusing on static, responsive designs forthe homepage, profiles, and feeds, replicating Instagram's modern and minimalist aesthetic"
    },
    {
      name: 'Rock Paper Scissor',
      demoLink: 'https://rockpaperscissor-eight.vercel.app/',
      codeLink: 'https://github.com/andrewraymondraj/Rockpaperscissor',
      imgSrc: rps,
      skills: ['HTML', 'CSS','JavaScript'],
      description:"Create an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript, where users play against the computer, which randomly selects rock, paper, or scissors for each round ",
    },
    {
      name: 'Contacs Manager',
      demoLink: 'https://andrewraymondraj.github.io/contact_manager/',
      codeLink: 'https://github.com/andrewraymondraj/contact_manager',
      imgSrc: contacts,
      skills: ['React'],
      description: "The Contact Manager app allows users to manage contacts by adding, editing, deleting, and searching. It features validation for mobile numbers, an intuitive user interface, and an organized layout for easy navigation and efficient contact management.",
    },
    {
      name: 'Portfolio',
      demoLink: 'https://andrewraymondraj.github.io/portfolio/',
      codeLink: 'https://github.com/username/project1',
      imgSrc: portfolio,
      skills: ['React'],
      description: "This portfolio highlights my skills as a Front-End Developer using React. It features sections like Home, About, Skills, and Projects, demonstrating my expertise in HTML, CSS, JavaScript, React, and other technologies, with interactive elements and responsive design."
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
    <h2>My Portfolio</h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <img src={project.imgSrc} alt={project.name} className="project-img" />
          </a>
          <h4 className="project-name">{project.name}</h4>
          
          <p className="project-description">{project.description}</p>
          <div className="skills-used">
            {project.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">{skill}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="link-btn demo-btn">
              View Demo
            </a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="link-btn code-btn">
              View Code
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Portfolio;
