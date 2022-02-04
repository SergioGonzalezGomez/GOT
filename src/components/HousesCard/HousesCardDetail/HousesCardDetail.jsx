import React from "react";
import "./HousesCardDetail.scss";

export const HousesCardDetail = ({ house }) => {
  return (
    <div className="Houses-card-container">
      {house.length !== 0 && <img className="Houses-card-logo" src={house[0].logoURL} alt={house[0].name} />}
      <h2>{house[0] && house[0].name}</h2>

      <div className="Houses-card-main">
        <div className="Houses-card-detail">
          <h3>LEMA</h3>
          {console.log(house)}
          <p>{house[0] && house[0].words}</p>
        </div>

        <div className="Houses-card-detail">
          <h3>SEDE</h3>
          <p>{house[0] && house[0].seat}</p>
        </div>

        <div className="Houses-card-detail">
          <h3>REGION</h3>
          {house[0] &&
            house[0].region.map((region) => {
              return <p key={region}>{region}</p>;
            })}
        </div>

        <div className="Houses-card-detail">
          <h3>ALIANZAS</h3>
          {house[0] &&
            house[0].allegiance.map((allegiances) => {
              return <p key={allegiances}>{allegiances}</p>;
            })}
        </div>

        <div className="Houses-card-detail">
          <h3>RELIGIONES</h3>
          {house[0] &&
            house[0].religion.map((religions) => {
              return <p key={religions}>{religions}</p>;
            })}
        </div>
      </div>
    </div>
  );
};
