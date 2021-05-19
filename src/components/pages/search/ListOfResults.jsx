import React from 'react'
import {HotelItem} from './HotelItem'

export const ListOfResults = ({ hotelsList, hotelMockInfo }) => {
  return (
    <div className="hotelsList">
      {hotelsList.map((hotel) =>
        // console.log(hotel.locationId)
        <HotelItem hotel={hotel} hotelMockInfo={hotelMockInfo} key={hotel.locationId} />
      )}
    </div>
  );
};
