import React, { useState, useEffect }from 'react';
import {getCharacters} from '../../api/fetchToApi';
import { CharactersCard } from '../../components/CharactersCard/CharactersCard';
import './Characters.scss';

export const Characters = () => {

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then((data) => setCharacters(data))
  },[])
  
  return <div className="characters-list">
      {characters.map((character) => {
        return <CharactersCard key={character.id} character={character} />
      })}
  </div>;
  
};

