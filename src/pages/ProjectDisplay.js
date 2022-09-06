import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectLinkButton from '../components/ProjectLinkButton';
import { ProjectsList } from '../helpers/ProjectsList';

import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectsList[id - 1];
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    backToTop();
  }, []);
  return (
    <div className='project-container-display'>
      <div className='project-display'>
        <h1>{project.title}</h1>
        <h2>{project.desc}</h2>
        <img src={project.image} alt='img for the project' />
        <div className='bottom-content'>
          <p>
            <b>Skills:</b> {project.skill}
          </p>
          <ProjectLinkButton url={project.link} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
