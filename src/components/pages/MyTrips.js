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
        marginRight: "5rem"
    }
}));

export default function MyTrips() {
    const [trip, setTrip] = useState()
    useEffect(() => {
        const id = {createdBy: localStorage.getItem("userId")}
        getTripByUserId(id).then((data) => {
            setTrip(data[0]);
            console.log(data.data[0])
          });
          
      }, [localStorage.getItem("userId")]);
    const classes = useStyles();
  return (
    <>
      <h2>My Trips</h2>
      <Grid container direction="row" justify="center" alignItems="center">
        <Card className={classes.card}>
          <CardActionArea>
            <img
              src="https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/2dac0c53_z.jpg"
              alt="hotel photo"
              width="300"
              height="200"
            />
            <CardMedia
              src="https://exp.cdn-hotels.com/hotels/1000000/20000/16400/16366/2dac0c53_z.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to="/hotel">
              <Button size="small" color="primary">
                More Information
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Notes className={classes.notes}/>
      </Grid>
    </>
  );
}
