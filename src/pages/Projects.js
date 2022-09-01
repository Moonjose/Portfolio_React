import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList as CodeProjectList } from '../helpers/ProjectList';
import { GameDevList } from '../helpers/GameDevList';

import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>Web Development</h1>
      <div className='projectList'>
        {CodeProjectList.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              id={index}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>

      <h1>Game Development</h1>
      <div className='projectList'>
        {GameDevList.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              id={index}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>

      <h1>Art Projects</h1>
      <div className='projectList'>
        <ProjectItem name={'Artstation'} image={'blank'} />
        <ProjectItem name={'Behance'} image={'blank'} />
        <ProjectItem name={'Instagram'} image={'blank'} />
      </div>
    </div>
  );
}

export default Projects;
