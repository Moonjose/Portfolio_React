import blogerizer from '../assets/images/blogerizer.png';
import heroes_api from '../assets/images/heroes_api.png';
import landing_page from '../assets/images/landing_page.png';
import time_to_answer from '../assets/images/time_to_answer.png';
import youtube_clone from '../assets/images/youtube_clone.png';
import em_Breve from '../assets/images/Em_Breve.png';

export const ProjectsList = [
  {
    // Web Dev
    id: 1,
    title: 'Youtube Clone',
    category: 'Web Development',
    image: youtube_clone,
    skill: 'ReactJS, MUI',
    desc: 'Um clone do youtube consumindo a API Youtube API v3.',
    link: 'https://github.com/Moonjose/YoutubeClone_React',
    projectLink: 'https://iutub.netlify.app/',
  },
  {
    id: 2,
    title: 'Blogerizer',
    category: 'Web Development',
    image: blogerizer,
    skill: 'Ruby On Rails 6, Bootstrap, postgreSQL, libs(devise, rolify, pundit, kaminari)',
    desc: 'Um blog pessoal de noticias com cadastro de usuários e comentarios.',
    link: 'https://github.com/Moonjose/Blogerizer_RB',
    projectLink: 'https://blogerizer.herokuapp.com/pt-BR',
  },
  {
    id: 3,
    title: 'Time To Answer',
    category: 'Web Development',
    image: time_to_answer,
    skill: 'Ruby On Rails 5, BootStrap, sqlite3, libs(devise, cocoon, sbAdmin, kaminari)',
    desc: 'Um site de perguntas e respostas estilo concurso, onde o admin cadastra perguntas e respostas de múltipla escolha e os usuários respondem',
    link: 'https://github.com/Moonjose/TimeToAnswer_RB',
    projectLink: 'https://timetoanswertwo.herokuapp.com/',
  },
  {
    id: 4,
    title: 'Tour Of Heroes API',
    category: 'Web Development',
    image: heroes_api,
    skill: 'Ruby On Rails 6',
    desc: 'Uma API básica com um CRUD onde é possivel cadastrar super heróis',
    link: 'https://github.com/Moonjose/HeroesList_Api_RB',
    projectLink: 'https://tour-of-heros-api.herokuapp.com/',
  },
  {
    id: 5,
    title: 'Landing Page Básica',
    category: 'Web Development',
    image: landing_page,
    skill: 'HTML, CSS',
    desc: 'Um dos meus primeiros projetos, aprendendo HTML e CSS. Landing Page básica',
    link: 'https://github.com/Moonjose/LandingPage_CSS_UD',
    projectLink: 'https://basic-landing-pg.netlify.app/',
  },
  {
    id: 6,
    title: 'Em breve...',
    category: '???',
    image: em_Breve,
    skill: '???',
    desc: '???',
    link: '',
    projectLink: '',
  },
  // Game Dev
  {
    id: 7,
    title: 'Mente Obscura',
    category: 'Game Development',
    image: em_Breve,
    skill: 'Unreal Engine 5, Blender, Photoshop',
    desc: 'Jogo de survival-horror inspirado em Resident Evil e Outlast',
    link: '',
    projectLink: '',
  },
  {
    id: 8,
    title: 'Shokan',
    category: 'Game Development',
    image: em_Breve,
    skill: 'Unity, Piskel, Photoshop',
    desc: 'Jogo 2d Plataforma pixel art com temática de folclore japonês, multiplataforma (Desktop/Mobile)',
    link: '',
    projectLink: '',
  },
  {
    id: 9,
    title: 'Operation Gear',
    category: 'Game Development',
    image: em_Breve,
    skill: 'Photoshop',
    desc: 'Jogo feito em equipe na universidade como projeto final, temática steampunk',
    link: '',
    projectLink: '',
  },
];
