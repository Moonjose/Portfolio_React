import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';

import '../styles/Content.css'; // Css

import { SkillList } from '../helpers/SkillList';
import Skill from '../components/Skill_Item';

function Content() {
  return (
    <div>
      <div className='about'>
        <h2>Hi, i'm Jose</h2>

        <div className='prompt'>
          <p>A fullstack web developer.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>

        <div className='listSkills'>
          {SkillList.map((skill, index) => {
            return (
              <Skill
                title={skill.title}
                info={skill.info}
                image={skill.image}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content;
