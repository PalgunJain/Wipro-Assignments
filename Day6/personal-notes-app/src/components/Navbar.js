import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/notes">Notes</a>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;