import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img width={70} height={50} src="/assets/murky.png" alt="logo" />
        <p>
          The best
          <br /> weather forecast
        </p>
      </div>
      <div className="my_cities">
        <Link to="/cities">
          <span>My cities</span>
          <img width={30} height={30} src="/assets/sun.png" alt="sun" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
