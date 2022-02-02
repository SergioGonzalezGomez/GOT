import React from 'react';
import {Link, generatePath} from 'react-router-dom';

export const CharactersCard = ({character}) => {
  console.log(character);
  character.image = character.name === "Oberyn Martell" ?   "./images/oberyn-martell.webp" : character.image;
  character.image = character.name === "Grenn" ?   "./images/grenn.webp" : character.image;
  return <div>
    <Link to={generatePath("/characters/:name", {name: character.name})}>
    <img src={character.image} alt={character.name} />
    </Link>
    </div>;
};
