import React from "react";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { ListOfResults } from "./ListOfResults";
import Button from "@material-ui/core/Button";

export const SearchFront = () => {
  const [search, setSearch] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfRoom, setNumberOfRoom] = useState("");
  const [adults, setAdults] = useState("");

  const [hotelsList, setHotelsList] = useState([1, 2, 3, 4, 5]);

  const searchHandler = () => {

    const searchObject = {
      search,
      checkInDate,
      checkOutDate,
      numberOfRoom,
      adults,
    };
    console.log(searchObject);
  };

  return (
    <div>
      <TextField
        id="standard-search"
        label="Where are you going?"
        type="search"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form noValidate>
        <TextField
          id="check-in-date"
          label="check-in-date"
          type="date"
          defaultValue={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <form noValidate>
        <TextField
          id="check-out-date"
          label="check-out-date"
          type="date"
          defaultValue={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <form noValidate>
        <TextField
          id="numberOfRoom"
          label="number of room"
          type="number"
          defaultValue={numberOfRoom}
          onChange={(e) => setNumberOfRoom(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <form noValidate>
        <TextField
          id="numberOfAdults"
          label="number of adults"
          type="number"
          // value={adults}
          defaultValue={adults}
          onChange={(e) => setAdults(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <Button
        variant="contained"
        color="primary"
        type="button"
        id="button"
        onClick={() => searchHandler()}
      >
        Search
      </Button>
      <ListOfResults hotelsList={hotelsList} />
    </div>
  );
};



  