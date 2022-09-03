import React from 'react';
import ProjectItem from '../components/ProjectItem';
import ArtItem from '../components/ArtItem';
import { ProjectsList } from '../helpers/ProjectsList';
import '../styles/Projects.css';
import img_artstation from '../assets/images/artstation.png';
import img_instagram from '../assets/images/instagram.png';
import img_behance from '../assets/images/behance.png';
import BackToTopButton from '../components/BackToTopButton';

function Projects() {
  const artstationUrl = 'https://www.artstation.com/joseantonio11';
  const instagramUrl = 'https://www.instagram.com/jarl.art_/';
  const behanceUrl = 'https://www.behance.net/joseantonio44';
  return (
    <div className='projects'>
      <h1>Main Projects</h1>
      <div className='projectList'>
        {ProjectsList.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>

      <h1>Art Projects</h1>
      <div className='projectList'>
        <ArtItem
          name={'Artstation'}
          image={img_artstation}
          url={artstationUrl}
        />
        <ArtItem name={'Instagram'} image={img_instagram} url={instagramUrl} />
        <ArtItem name={'Behance'} image={img_behance} url={behanceUrl} />
      </div>
      <BackToTopButton />
    </div>
  );
}

export default Projects;
