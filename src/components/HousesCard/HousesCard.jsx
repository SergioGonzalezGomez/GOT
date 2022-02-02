import React from 'react';
import {Link, generatePath} from 'react-router-dom';

export const HousesCard = ({house}) => {
  return <div>
   {/*  {house.logoURL &&  
      <Link to={generatePath("/houses/:name", {name: house.name})}>
      <img src={house.logoURL} alt={house.name} />
      </Link>
    } */}
    <Link to={generatePath("/houses/:name", {name: house.name})}>
      <img src={house.logoURL} alt={house.name} />
      </Link>

  </div>;
};
