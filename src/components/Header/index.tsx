import React from 'react';
import './header.css';

import NavBar from './NavBar';

function HeaderTitle() {
  return (
    <header className="header">
      <div className="header-title"><h1>Flight List</h1></div>
      <NavBar />
    </header>
  )
}


export default HeaderTitle