import React, { useState, useEffect }from 'react';
import {getHouses} from '../../api/fetchToApi';
import {HousesCard} from '../../components/HousesCard/HousesCard';
import './Houses.scss';

export const Houses = () => {

  const [houses, setHouses] = useState([]);
  useEffect(() => {
    getHouses().then((data) => setHouses(data))
  },[])
  console.log(houses);
  return <div className="houses-list">
    {houses.map((house) => {
        return <HousesCard key={house.id} house={house} />
      })}
  </div>;
  
};