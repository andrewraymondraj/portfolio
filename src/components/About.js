import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <h3>
        Hello, I'm Andrew Raymond Raj A, a passionate Front-End Developer skilled in HTML, CSS, JavaScript, and modern frameworks like React.js. I am eager to join a dynamic team where I can leverage my skills to build responsive, user-friendly web applications. With a strong problem-solving mindset and a commitment to continuous learning, I aim to contribute to creating seamless, engaging user experiences and grow as a developer in an entry-level Front-End Developer role.
      </h3>

      {/* Education Section */}
      <div className="education">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>Bachelor of Engineering : </strong> St.Joseph's Institute Of Technology - Mechanical Engineering (2016- Nov 2020)
          </li>
          <li>
            <strong>Higher Secondary Schooling : </strong> CK School of Practical Knowledge (2016)
          </li>
            <li>
            <strong>Secondary School Leaving Certificate : </strong> Lakshmi Chordia(2014)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
