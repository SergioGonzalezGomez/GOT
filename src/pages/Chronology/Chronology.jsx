import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../api/fetchToApi';
import { Context } from "../../App";
import { ChronologyCard } from "../../components/ChronologyCard/ChronologyCard";
import './Chronology.scss';

export const Chronology = () => {
  const {page, setPage,setSearch} = React.useContext(Context);
  const [characters, setCharacters] = useState([]);
  const [direction, setDirection] = useState(true);
  console.log(direction);

  React.useEffect(() => {
    setSearch('')
    getCharacters().then((data) => setCharacters(data))
    setPage("Chronology");
    
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  }, [page]);
  
  return <div>
    <button className="chronology-button" onClick={() => setDirection(!direction)}>O</button>
    <div className="chronology-list">

     {characters.length !== 0 && characters.filter(character => character.age != null && character.age.age > 0).sort((a, b) => {
       
       if (a.age.age > b.age.age) {
         return direction ? 1 : -1;
       }
       if (a.age.age < b.age.age) {
         return direction ? -1 : 1; 
       }
       return 0;
       
     }).map((character) => {
        return <ChronologyCard key={character.id} character={character} />
      })}

      </div>
    </div>;
};
