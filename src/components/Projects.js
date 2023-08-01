import React from 'react'
import { skillsWrapper, skillsTitle, line, line2} from './Skills.module.scss'
import { ProjectWrapper, projectImg, projectTech, projectLink, ProjectDiv } from './Projects.module.scss'
import novablocksImage from './../../static/novablocks.png';
import mytaskmanagerImage from './../../static/taskmanager.png';


const Projects = () => {
  window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    let images = document.querySelectorAll('.projectImg');
    images.forEach(img => img.style.transform = `translateY(${offset * 0.2}px)`);
  });
  return (
    <div className={ProjectDiv}>
      <div className={skillsWrapper}>
        <p className={skillsTitle}>PROJETS</p>
        <div className={line}></div>
        <div className={line2}></div>
      </div>
      <div className={ProjectWrapper}>
        <img src={novablocksImage} alt="project" className={projectImg}/>
        <div className={projectTech}>Wordpress</div>
        <a href="http://novablocks-showcase.xyz" className={projectLink}>Nova Blocks</a>
      </div>
      <div className={ProjectWrapper}>
        <img src={mytaskmanagerImage} alt="project" className={projectImg}/>
        <div className={projectTech}>Symfony</div>
        <a href="http://mytaskmanager.xyz" className={projectLink}>My Task Manager</a>
      </div>
      <div className={ProjectWrapper}>
        <img src={novablocksImage} alt="project" className={projectImg}/>
        <div className={projectTech}>Gatsby / React</div>
        <a href="http://loicmougin.xyz" className={projectLink}>My Resume</a>
      </div>
    </div>
  )
}

export default Projects
