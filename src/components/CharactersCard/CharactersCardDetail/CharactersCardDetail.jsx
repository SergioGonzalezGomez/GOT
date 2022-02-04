import React from 'react';

export const CharactersCardDetail = ({character}) => {
  return <div>
    <img src={character.image} alt={character.name} />
  </div>;
};
 