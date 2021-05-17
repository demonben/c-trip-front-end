import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    headText: {
     fontSize: "2rem",
	 wordWrap: "break-word",
	 marginTop: "3rem"
    },
	subHead: {
		
	},
	btn: {
		marginBottom: "5rem"
	}
  }));

export default function Home() {
	const classes = useStyles();
  return (
    <>
      <h1 className={classes.headText}>All your adventures in one place</h1>
	  <h5 className={classes.subHead}>Find hotels. Write some notes. Have a safe trip.</h5>
	  <Button className={classes.btn} variant="contained" color="primary" href="/search">Explore</Button>
	  <img src="https://res.cloudinary.com/alinanovof/image/upload/c_lfill,h_883,w_1589,x_0/v1620928598/pexels-tatiana-614484_wcyyy3.jpg"/>
	</>
  );
}
