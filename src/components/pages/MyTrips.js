import Notes from "../Notes";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { getTripByUserId } from "../../lib/api";
const { Link } = require("react-router-dom");

const useStyles = makeStyles((theme) => ({
  card: {
    marginRight: "5rem",
    padding: "2rem"
  },
}));

export default function MyTrips() {
  const [trips, setTrips] = useState();
  useEffect(() => {
    const id = { createdBy: localStorage.getItem("userId") };
    getTripByUserId(id).then((data) => {
      setTrips(data.data);
      console.log(data.data[0]);
    });
  }, [localStorage.getItem("userId")]);
  const classes = useStyles();
  return (
    <>
      <h2>My Trips</h2>
      <Grid container direction="row" justify="center" alignItems="center">
        {trips &&
          trips.map((trip) => (
              <>
            <Card key={trip.createdAt} className={classes.card}>
              
                <img
                  src={trip.image}
                  alt="hotel photo"
                  width="300"
                  height="200"
                />
                <CardMedia
                  src={trip.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {trip.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {trip.price} / 1 night
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {trip.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    You booked this hotel for these dates: {trip.startDate} - {trip.endDate}
                  </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {trip.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  You booked this hotel for these dates: {trip.startDate} - {trip.endDate}
                </Typography>
              </CardContent>

              <CardActions>
                {/* <Link to="/hotel">
                  <Button size="small" color="primary">
                    More Information
                  </Button>
                </Link> */}
              </CardActions>
            </Card>
            <Notes className={classes.notes} tripId={trip._id} getNote={trip.note}/>
            </>
          ))}

       
      </Grid>
    </>
  );
}
