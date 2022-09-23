import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
    // bring navbar out of the way when user clicks on link, using useLocation
  const location = useLocation();
    // whenever location ChangeCircleSharp, expandbar does the opposite of being opened
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  
  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
      <div className='toggleButton'>
        {/* makes a button apear when screen gets too small */}
        <button onClick={() => { setExpandNavbar((prev) => !prev); }}>
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/experience'>Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;