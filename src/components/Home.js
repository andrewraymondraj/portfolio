import React from 'react';
import '../styles/home.css';
import image from './image.jpg'; // Import your profile image
import resume from './resume.pdf'; // Import your resume PDF
import Navbar from './Navbar';

const Home = () => {
  return (
    <>

    <Navbar />
    <section id="home" className="home">
      <div className="home-container">
        <div className="text-container">
          <h1 className="name">
            <span className="wave-emoji">👋</span> Hi, I'm  
            <span className="highlight name-animation"> Andrew Raymond Raj A</span>
          </h1>
          <h2 className="role">
            <h3 className="highlight">Front-End Developer</h3>
          </h2>
          <div className="social-links">
            {/* LinkedIn and GitHub buttons */}
            <a href="https://www.linkedin.com/in/andrewraymondraj/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-btn linkedin">
              LinkedIn
            </a>
            <a href="https://github.com/andrewraymondraj" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-btn github">
              GitHub
            </a>
            {/* Resume button */}
            <a href={resume} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="social-btn resume">
              Resume
            </a>
          </div>
        </div>
        <div className="photo-container">
          <img src={image} alt="Profile" className="profile-photo" />
        </div>
      </div>
      
    </section>
   
    </>
  );
};

export default Home;
