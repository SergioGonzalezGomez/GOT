import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  return <div className="navbar">
      <NavLink to='/characters' className="navbar_link" activeclassname={"active"}>Personajes</NavLink>
      <NavLink to='/houses' className="navbar_link" activeclassname={"active"}>Houses</NavLink>
      <NavLink to='/chronology' className="navbar_link" activeclassname={"active"}>Cronologia</NavLink>
    </div>;
};
