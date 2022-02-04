import React from 'react';
import './ChronologyCard.scss';

export const ChronologyCard = ({character}) => {
  return <div className="chronologycard-container">
    
    <img className="charactercard-img" src={character.image} alt={character.name} />
    </div>;



};
