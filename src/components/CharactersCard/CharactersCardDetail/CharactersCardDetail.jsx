import React, { useState, useEffect } from "react";
import { getHousesByName } from "../../../api/fetchToApi";
import "./CharactersCardDetail.scss";

export const CharactersCardDetail = ({ character }) => {
  console.log(character);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHousesByName(character.house).then((data) => setHouses(data));
  }, []);
  return (
    <div className="Character-card-main">
      <div className="Character-card-image">
        <img className="img" src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </div>

      <div className="Character-card-details">
        <div className="Character-card-detail">
          <h3>CASA</h3>

          {houses.length != 0 && (
            <img
              className="Character-card__detail-img"
              src={houses[0].logoURL}
              alt={houses[0].name}
            />
          )}
        </div>

        <div className="Character-card-detail">
          <h3>ALIANZAS</h3>
          {character.length != 0 &&
            character.allegiances.map((allegiance) => {
              return <p key={allegiance}>{allegiance}</p>;
            })}
        </div>

        <div className="Character-card-detail">
          <h3>APARICIONES</h3>
          {character.length != 0 &&
            character.appearances.map((appearance) => {
              return <p key={appearance}>{appearance}</p>;
            })}
        </div>

        <div className="Character-card-detail">
          <h3>PADRE</h3>
          <p>{character.father}</p>
        </div>

        <div className="Character-card-detail">
          <h3>DESCENDIENTES</h3>
          {character.length != 0 &&
            character.siblings.map((sibling) => {
              return <p key={sibling}>{sibling}</p>;
            })}
        </div>

        <div className="Character-card-detail">
          <h3>TÍTULOS</h3>
          {character.length != 0 &&
            character.titles.map((title) => {
              return <p key={title}>{title}</p>;
            })}
        </div>
      </div>
    </div>
  );
};
