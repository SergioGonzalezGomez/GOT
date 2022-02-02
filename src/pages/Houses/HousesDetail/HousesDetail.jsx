import React, { useState, useEffect } from 'react';
import {getHousesByName} from '../../../api/fetchToApi';
import { useParams } from 'react-router-dom';

import { HousesCardDetail} from '../../../components/HousesCard/HousesCardDetail/HousesCardDetail';
export const HousesDetail = () => {

    const [houses, setHouses] = useState([]);
    const {name} = useParams('name');

  useEffect(() => {
    getHousesByName(name).then((data) => setHouses(data))
  },[])
  console.log(houses);


  return <div>
    <HousesCardDetail house={houses} />
  </div>;
};