import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {


  return (
    <header className={`relative top-0 z-999 bg-06264D dark:bg-06264D transition-opacity`}  style={{ width: '100%'}}>
      <div className="flex items-center justify-between">
        <ul className="header-link flex items-center">
          <li>
            Your Items
          </li>
        </ul>
        <div className="ml-auto">
            <span className="header-right">Show All</span>
        </div>
      </div>
    </header>
  );
};

export default Header;