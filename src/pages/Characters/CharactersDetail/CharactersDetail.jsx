import React, { useState, useEffect } from 'react';
import {getCharactersByName} from '../../../api/fetchToApi';
import { useParams } from 'react-router-dom';
import { CharactersCardDetail } from '../../../components/CharactersCard/CharactersCardDetail/CharactersCardDetail';

export const CharactersDetail = () => {

    const [characters, setCharacters] = useState([]);
    const {name} = useParams('name');

  useEffect(() => {
    getCharactersByName(name).then((data) => setCharacters(data))
  },[])
  console.log(characters);


  return <div>
      <CharactersCardDetail character={characters}/>
  </div>;
};
