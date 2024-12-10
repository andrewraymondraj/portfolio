import React from 'react';
import '../styles/portfolio.css';
import instagram from '../assets/instagram.png'
import rps from '../assets/rps.png'
import contacts from '../assets/contacts.png'
import portfolio from '../assets/portfolio.png'
import sqlicon from '../assets/mysql-icon.png'
import todolist from '../assets/todolist.png'
import w3school from '../assets/w3school.png'

const Portfolio = () => {
  const projects = [
    {
      name: 'Instagram UI',
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
      name: 'Todo List',
      demoLink: 'https://andrewraymondraj.github.io/todolist/',
      codeLink: 'https://github.com/andrewraymondraj/todolist',
      imgSrc: todolist,
      skills: ['React'],
      description: "A To-Do List project allows users to add tasks with a title and summary, and delete tasks. It features a toggle for dark and light modes, providing an intuitive interface for task management and personalized theme preferences."
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
      codeLink: 'https://github.com/andrewraymondraj/portfolio',
      imgSrc: portfolio,
      skills: ['React'],
      description: "This portfolio highlights my skills as a Front-End Developer using React. It features sections like Home, About, Skills, and Projects, demonstrating my expertise in HTML, CSS, JavaScript, React, and other technologies, with interactive elements and responsive design."
    },
    {
      name: 'Simple React UI',
      demoLink: 'https://react-project-mu-ten.vercel.app/',
      codeLink: 'https://github.com/andrewraymondraj/w3school',
      imgSrc: w3school,
      skills: ['React'],
      description: "This project builds a functional React-based website with dark/light mode toggle, filter search functionality, and authentication pages (signin/login), focusing on interactivity, user experience, and state management."
    },
    


    {
      name: 'Real Time- Customer LoanDetails Analysis',
      demoLink: 'https://www.dropbox.com/scl/fi/fkrs4bdssj1buk6h015yb/PROJECT1.pptx?rlkey=roxy9wawvedwo6wq5qb5myaq2&e=2&st=wa9nwasd&dl=0',
      codeLink: 'https://www.dropbox.com/scl/fi/3t2z1fff1oofin04z8jak/project1.sql?rlkey=nlwnzu7k0r8evmsqp0nrsjpa9&e=2&st=ctomyngn&dl=0',
      imgSrc: sqlicon,
      skills: ['MySql'],
      description: "Developed & comprehensive Loan Analysis System Based onreal time scenario. Using tool My sql Database Technology. Implemented6 tables while usingjoins . finally Stored the All Reports into Store Procedure."
    },
    {
      name: 'Real Time- Sales Record Analysis',
      demoLink: 'https://www.dropbox.com/scl/fi/v4jjwawoszifupf9cut1w/SQL-PROJECT2.pptx?rlkey=5unfeog43t95tg9gstyokv5av&st=oqa70f47&dl=0',
      codeLink: 'https://www.dropbox.com/scl/fi/yzxluzknpg2xamnym15fr/project2.sql?rlkey=wu38rn9xqj6wjg10uvx0n00f0&e=1&st=4hkuilio&dl=0',
      imgSrc: sqlicon,
      skills: ['MySql'],
      description: " Developed & comprehensive stock & work_order analysis Based onreal time scenario. Using tool My sql Database Technology. Applying logical functions, aggregate functions and 2 tables connected while usingjoins finally Stored the All Reports into Stored Procedure and exported as a table"
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
