import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className='flex flex-col sm:flex-row justify-center gap-8 h-20 items-center font-bold bg-black text-white '>
        <div className="hidden sm:flex  sm:flex-row justify-center gap-8 h-20 items-center font-bold">
          {/* Render menu items for screens larger than 'sm' */}
          <a>HOME</a>
          <a>PORTFOLIO</a>
          <a>ABOUT</a>
          <a>CONTACT</a>
        </div>
      </nav>
      <div className="sm:hidden bg-black">
          {/* Render the menu icon for 'sm' screens */}
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} onClick={toggleMenu} />
        </div>
      {/* Conditionally render menu items for 'sm' screens when the menu is open */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col font-bold  px-5 ">
          <a>HOME</a>
          <a>PORTFOLIO</a>
          <a>ABOUT</a>
          <a>CONTACT</a>
        </div>
      )}
      
    </div>
  );
};

export default Header;
