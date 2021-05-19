import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));
export default function Notes() {
	const classes = useStyles();
	return (
		<>
			<h2>Notes</h2>
			<form className={classes.root} noValidate autoComplete="off">
	
				<TextField id="outlined-basic" label="My Trip Note" variant="outlined" />
			</form>
		</>
	);
}
