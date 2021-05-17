import React from 'react'
import {HotelItem} from './HotelItem'

export const ListOfResults = ({ hotelsList, hotelMockInfo }) => {
  console.log(hotelMockInfo);
  console.log(hotelMockInfo.images[0]);
  return (
    <div className="hotelsList">
      {hotelsList.map((hotel) => (
        <HotelItem hotel={hotel} hotelMockInfo={hotelMockInfo} key={hotel} />
      ))}
    </div>
  );
};
