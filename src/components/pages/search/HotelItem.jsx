import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const HotelItem = ({ hotel, hotelMockInfo }) => {
  return (
    <div>
      <div className="hotelItem">{hotel}</div>
      <Card>
        <CardActionArea>
          <img
            src={hotelMockInfo.images[0]}
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
              {hotelMockInfo.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {hotelMockInfo.tagLine}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
