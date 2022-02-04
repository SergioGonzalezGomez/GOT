import React from 'react';

export const HousesCardDetail = ({house}) => {
  return <div>
  {house.length !== 0 && 
    <img src={house[0].logoURL} alt={house[0].name} />
  }
  </div>;
};
