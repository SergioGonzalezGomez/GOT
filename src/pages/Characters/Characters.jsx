import React, { useState, useEffect }from 'react';
import {getCharacters} from '../../api/fetchToApi';
import { CharactersCard } from '../../components/CharactersCard/CharactersCard';
import './Characters.scss';
import { Context } from "../../App";

export const Characters = ({search}) => {
  const {page, setPage} = React.useContext(Context);
  console.log(search);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data))
    
    setPage("Characters");
    console.log(page);
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  },[page])

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search)
  );
  console.log(filteredCharacters)

  const resultCharacters = filteredCharacters.length > 0 ? filteredCharacters : characters
  
  return <div className="characters-list">
      {resultCharacters.map((character) => {
        return <CharactersCard key={character.id} character={character} />
      })}
  </div>;
  
};

