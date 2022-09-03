import React from 'react';
import { useParams } from 'react-router-dom';
// import { WebDevList } from '../helpers/WebDevList';
// import { GameDevList } from '../helpers/GameDevList';
import { ProjectsList } from '../helpers/ProjectsList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectsList[id - 1];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <h2>{project.desc}</h2>
      <img src={project.image} alt='img for the project' />
      <p>
        <b>Skills:</b> {project.skill}
      </p>

      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
