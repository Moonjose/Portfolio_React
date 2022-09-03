import { React } from 'react';

import '../styles/Content.css'; // Css

import { SkillList } from '../helpers/SkillList';
import Skill from '../components/Skill_Item';
import BackToTopButton from '../components/BackToTopButton';

function Content() {
  return (
    <div>
      <div className='about' id='home'>
        <h2>Hi, i'm Jose</h2>
        <div className='prompt'>
          <p>A fullstack web developer.</p>
        </div>
      </div>

      <div className='skills' id='skills'>
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
      <BackToTopButton />
    </div>
  );
}

export default Content;
