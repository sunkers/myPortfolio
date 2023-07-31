import React from 'react'
import { skillsWrapper, skillsTitle, line, line2} from './Skills.module.scss'
import { ProjectWrapper, projectImg, projectTech, projectLink } from './Projects.module.scss'


const Projects = () => {
  return (
    <div>
      <div className={skillsWrapper}>
        <p className={skillsTitle}>PROJECTS</p>
        <div className={line}></div>
        <div className={line2}></div>
      </div>
      <div className={ProjectWrapper}>
        <img src="https://via.placeholder.com/150" alt="project" className={projectImg}/>
        <div className={projectTech}>Wordpress</div>
        <a href="http://example.com" className={projectLink}>Nova Blocks</a>
      </div>
      <div className={ProjectWrapper}>
        <img src="https://via.placeholder.com/150" alt="project" className={projectImg}/>
        <div className={projectTech}>Symfony</div>
        <a href="http://example.com" className={projectLink}>My Task Manager</a>
      </div>
      <div className={ProjectWrapper}>
        <img src="https://via.placeholder.com/150" alt="project" className={projectImg}/>
        <div className={projectTech}>Gatsby / React</div>
        <a href="http://example.com" className={projectLink}>My Resume</a>
      </div>
    </div>
  )
}

export default Projects
