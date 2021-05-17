import React from 'react'
import {HotelItem} from './HotelItem'

export const ListOfResults = ({ hotelsList }) => {
        <h1>ds</h1>
  return (
    <div className="hotelsList">
      {hotelsList.map((hotel) => (
        <HotelItem hotel={hotel} key={hotel} />
      ))}
    </div>
  );
};
