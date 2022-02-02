import React from 'react';
import {NavLink} from 'react-router-dom';
export const Footer = () => {
  return <div>
      <NavLink to='/characters' activeclassname={"active"}>Personajes</NavLink>
      <NavLink to='/houses' activeclassname={"active"}>Houses</NavLink>
      <NavLink to='/chronology' activeclassname={"active"}>Cronología</NavLink>

  </div>;
};
