import React from 'react';
import {Link, generatePath} from 'react-router-dom';
import './CharactersCard.scss';

export const CharactersCard = ({character}) => {
  console.log(character);
  character.image = character.name === "Oberyn Martell" ?   "./images/oberyn-martell.webp" : character.image;
  character.image = character.name === "Grenn" ?   "./images/grenn.webp" : character.image;
  return <div className="charactercard-container">
    <Link to={generatePath("/characters/:name", {name: character.name})}>
    <img className="charactercard-img" src={character.image} alt={character.name} />
    </Link>
    </div>;
};
