import React from 'react';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello my name is Pedro</h2>
        <div className='skills'>
          <p>A Software Developer with a passion for learning!</p>
          <Email />
          <LinkedIn />
          <GitHub />
        </div>
      </div>
      <div className='skills'>

      </div>
    </div>
  );
}

export default Home;