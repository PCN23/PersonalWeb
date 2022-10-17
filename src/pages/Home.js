import React from 'react';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import '../styles/Home.css';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello My Name is Pedro</h2>
        <div className='prompt'>
          <p>I am a Software Developer with a passion for learning!</p>
          <LinkedIn />
          <GitHub />
          <Email />

        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li>Front-End</li>
          <span>ReactJS, CSS, HTML, Jest, MaterialUI</span>
          <li>Back-End</li>
          <span>MySQL, NodeJS, Express </span>
          <li>Languages</li>
          <span>Javascript </span>
        </ol>
      </div>
    </div>
  );
}

export default Home;