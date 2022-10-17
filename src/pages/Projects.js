import React from 'react';
import ProjectItem from '../components/ProjectItem';
import fish from '../assets/Pacc.png';

import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name='Angry fish PACC' image={fish} />
        <ProjectItem />
      </div>
    </div>
  );
}

export default Projects;