import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { ListOfResults } from "./ListOfResults";
import Button from "@material-ui/core/Button";
import { searchRequest } from "../../../lib/api";
import CircularProgress from "@material-ui/core/CircularProgress";

const hotelMockInfo = {
  locationId: 139009,
  name: "The Inbal2 Jerusalem",
  address: "Liberty Bell Park, 3, Jabotinsky St., Jerusalem, 9214502, Israel",
  tagLine:
    "<b>Luxury hotel with full-service spa, connected to the convention center, near Jerusalem Great Synagogue</b>",
  rating: 5,
  price: { formatted: "$287", plain: 287 },
  priceInfo: "nightly price per room",
  totalPrice: "(<strong>$574</strong> for 2 nights)",
  images: [
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/3e55f86d_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/c50b8fb9_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/a959563c_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/f6d1907a_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/8cd72c68_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/0f80fecd_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/be9d1046_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/89e88e9e_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/ab1dbbf7_z.jpg",
    "https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/37025150_z.jpg",
  ],
};

export const SearchFront = () => {
  const [search, setSearch] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numberOfRoom, setNumberOfRoom] = useState("");
  const [adults, setAdults] = useState("");

  const [loader, setLoader] = useState(false);

  // const [hotelInfo, setHotelInfo] = useState("");
  // useEffect(() => {
  //   setHotelInfo(hotelMockInfo);
  // }, []);
  // console.log(hotelInfo);

  const [hotelsList, setHotelsList] = useState([]);
  const searchHandler = async () => {
    setLoader(true);
    const searchObject = {
      search,
      checkInDate,
      checkOutDate,
      numberOfRoom,
      adults,
    };
    const searchResult = await searchRequest(searchObject);
    console.log(searchResult.data.results);

    setHotelsList(searchResult.data.results);

    setLoader(false);
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

      {!loader && (
        <ListOfResults hotelsList={hotelsList} hotelMockInfo={hotelMockInfo} />
      )}
      {loader && (
        <div>
          <CircularProgress id="loader" />
        </div>
      )}
    </div>
  );
};
