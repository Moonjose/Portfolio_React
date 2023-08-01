import backend from '../assets/icons/backend.png';
import frontend from '../assets/icons/frontend.png';
import databases from '../assets/icons/database.png';
import languages from '../assets/icons/languages.png';
import gamedev from '../assets/icons/gamedev.png';
import other from '../assets/icons/other.png';

export const SkillList = [
  {
    title: 'Back-End',
    info: 'NodeJS, ExpressJS, Ruby On Rails, Axios, API REST',
    image: backend,
  },
  {
    title: 'Front-End',
    info: 'ReactJS, HTML, CSS, JavaScript, BootStrap, Styled Components.',
    image: frontend,
  },
  {
    title: 'Languages',
    info: 'C#, C++, JavaScript, TypeScript, Ruby.',
    image: languages,
  },
  {
    title: 'Databases',
    info: 'MySQL, PostgreSQL(ORM), SQL(ORM), MongoDB(ORM).',
    image: databases,
  },
  {
    title: 'Game Development',
    info: 'Unreal Engine, Unity, Blender.',
    image: gamedev,
  },
  {
    title: 'Other Skills',
    info: 'Linux, Photoshop, 2D & 3D Art',
    image: other,
  },
];
