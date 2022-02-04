import React, { useState, useEffect }from 'react';
import {getHouses} from '../../api/fetchToApi';
import {HousesCard} from '../../components/HousesCard/HousesCard';
import { Context } from "../../App";
import './Houses.scss';

export const Houses = () => {
  const {page, setPage} = React.useContext(Context);
  
  React.useEffect(() => {
    setPage("House");
    console.log(page);
    page === "Home"
    ? document.body.classList.add("home")
    : document.body.classList.length !== 0 &&
      document.body.classList.remove("home");
  }, [page]);
  

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