import React, { useState, useEffect }from 'react';
import {getCharacters} from '../../api/fetchToApi';
import { CharactersCard } from '../../components/CharactersCard/CharactersCard';
import './Characters.scss';
import { Context } from "../../App";

export const Characters = () => {
  const {page, setPage} = React.useContext(Context);


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
  
  return <div className="characters-list">
      {characters.map((character) => {
        return <CharactersCard key={character.id} character={character} />
      })}
  </div>;
  
};

