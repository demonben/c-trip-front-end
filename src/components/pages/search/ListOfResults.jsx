import React from "react";
import { HotelItem } from "./HotelItem";

export const ListOfResults = ({
  hotelsList,
  hotelMockInfo,
  checkInDate,
  checkOutDate,
}) => {
  return (
    <div className="hotelsList">
      {hotelsList.map((hotel) => (
        <HotelItem
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          hotel={hotel}
          hotelMockInfo={hotelMockInfo}
          key={hotel.locationId}
        />
      ))}
    </div>
  );
};
