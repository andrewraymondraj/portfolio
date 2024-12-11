import React from 'react';
import '../styles/skills.css';
import htmlIcon from '../assets/html-icon.png';
import cssIcon from '../assets/css-icon.png';
import jsIcon from '../assets/js-icon.png';
import reactIcon from '../assets/react-icon.png';
import bootstrapIcon from '../assets/bootstrap-icon.png';
import mysqlIcon from '../assets/mysql-icon.png';
import vscodeIcon from '../assets/vscode-icon.png';
import githubIcon from '../assets/github-icon.png';

const Skills = () => {
  const skills = [
    {
      category: 'Web Technologies',
      items: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
      ],
    },
    {
      category: 'Library',
      items: [
        { name: 'React JS', icon: reactIcon },
       
      ],
    },
    {
      category: 'Framework',
      items: [
        { name: 'Bootstrap', icon: bootstrapIcon },
      ],
    },
    {
      category: 'Database',
      items: [{ name: 'MySQL', icon: mysqlIcon }],
    },
    {
      category: 'Tools',
      items: [
        { name: 'VS Code', icon: vscodeIcon },
        { name: 'GitHub', icon: githubIcon },
      ],
    },
  ];

  return (
    
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.items.map((skill, subIndex) => (
                <div key={subIndex} className="skill-card">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
