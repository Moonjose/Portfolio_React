import React, { useEffect } from 'react';
import ArtItem from '../components/ArtItem';
import { ProjectsList } from '../helpers/ProjectsList';
import '../styles/Projects.css';
import img_artstation from '../assets/images/artstation.png';
import img_instagram from '../assets/images/instagram.png';
import img_behance from '../assets/images/behance.png';
import BackToTopButton from '../components/BackToTopButton';
import Card from '../components/Card';

function Projects() {
  const artstationUrl = 'https://www.artstation.com/joseantonio11';
  const instagramUrl = 'https://www.instagram.com/jarl.art_/';
  const behanceUrl = 'https://www.behance.net/joseantonio44';
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
    <div className='projects'>
      <h1>Main Projects</h1>
      <div className='projectList'>
        {ProjectsList.map((project) => {
          return (
            <Card
              image={project.image}
              title={project.title}
              category={project.category}
              id={project.id}
              key={project.id}
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
