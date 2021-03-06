import React from "react";
import Hotel from "../../Hotel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createTrip } from "../../../lib/api";
const { Link } = require("react-router-dom");

export const HotelItem = ({
  hotel,
  checkInDate,
  checkOutDate,
}) => {
  // console.log(hotel);
  const bookHotel = () => {
    const trip = {
      name: hotel.name,
      description: hotel.tagLine,
      image: hotel.images[0],
      price: hotel.price.formatted,
      startDate: checkInDate,
      endDate: checkOutDate,
      createdBy: localStorage.getItem("userId")
    };
    console.log(trip)
    createTrip(trip);
  alert("booked successfully")
  };
  return (
    <div className="hotelItem">
      
      <Card >
        <CardActionArea>
          {hotel.images[0] && <img
            src={hotel.images[0]}
            alt="hotel"
            width="300"
            height="200"
          />}
            <CardMedia
              src="https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/2dac0c53_z.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {hotel.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {hotel.tagLine}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Hotel
              hotel={hotel}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
            />
            <Button variant="contained" onClick={bookHotel}>
              Book
            </Button>
          </CardActions>
        </Card>
    </div>
  );
};
