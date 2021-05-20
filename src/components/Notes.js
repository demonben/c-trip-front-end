import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, InputBase, Paper } from "@material-ui/core";
import { postNote } from "../lib/api";


const useStyles = makeStyles((theme) => ({
  notesInput: {
    height: "10rem",
    padding: "2rem",
  },
  notesBtn: {
    marginTop: "5rem",
    marginRight: "1rem"
  }
}));
export default function Notes(props) {
  const classes = useStyles();
  const [note, setNote] = useState()
  const handleInput = (value) => {
    setNote(value)
  }
  const handleSubmit = () => {
	  const sendNote = {id: props.tripId,
		note: note,
		createdBy: localStorage.getItem("userId")
	}
    postNote(sendNote)
    console.log(sendNote)
  }
  return (
    <>
      <Paper noValidate autoComplete="off" >
        <InputBase
          className={classes.notesInput}
          label="Notes"
          placeholder="Add some notes..."
          id="outlined-basic"
          label="My Trip Note"
          variant="outlined"
        //   value={note}
		defaultValue={props.getNote}
          onChange={(e) => handleInput(e.target.value)}
        />
        <Button className={classes.notesBtn} variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </Paper>
    </>
  );
}
