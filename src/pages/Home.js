import React from 'react';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import '../styles/Home.css';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello My Name is Pedro</h2>
        <p>I am a Software Developer with a passion for learning!</p>
        <LinkedIn />
        <GitHub />
        <Email />

      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, CSS, HTML, Jest, MaterialUI</span>
            <h2>Back-End</h2>
            <span>MySQL, NodeJS, Express </span>
            <h2>Languages</h2>
            <span>Javascript </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;