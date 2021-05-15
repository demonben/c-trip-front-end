import React from "react";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { ListOfResults } from "./ListOfResults";

export const SearchFront = () => {
  const [search, setSearch] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfRoom, setNumberOfRoom] = useState("");

   const [hotelsList, setHotelsList] = useState([1, 2, 3, 4, 5]);

  const searchHandler = () => {
    console.log("search", search);
    console.log("checkInDate", checkInDate);
    console.log("checkOutDate", checkOutDate);
    console.log("number of room", numberOfRoom);

    const searchObject = {
      search,
      checkInDate,
      checkOutDate,
      numberOfRoom,
    };
    console.log(searchObject);
  };

  return (
    <div>
      <h1>Search</h1>
      <div>
        <label htmlFor="hotelName">Destination/Property name: </label>
        <input
          type="search"
          className="search"
          name="username"
          placeholder="Tel-aviv"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="hotelName">Check-in-date</label>
        <input
          type="date"
          className="search"
          placeholder="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="hotelName">Check-out-date</label>
        <input
          type="date"
          className="search"
          placeholder="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="hotelName">Number of room</label>
        <input
          type="number"
          className="search"
          placeholder="1 room"
          value={numberOfRoom}
          onChange={(e) => setNumberOfRoom(e.target.value)}
        />
      </div>
      <form>
        <TextField
          required
          id="standard-required"
          label="search hotel"
          defaultValue="Hello World"
        />
      </form>

      <button
        type="button"
        className=" button btn btn-primary "
        onClick={() => searchHandler()}
      >
        Search
      </button>

      <ListOfResults hotelsList={hotelsList} />
    </div>
  );
};
