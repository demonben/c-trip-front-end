import DateFnsUtils from "@date-io/date-fns";
import {
	Container,
	createMuiTheme,
	CssBaseline
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import {
	KeyboardDatePicker, MuiPickersUtilsProvider
} from "@material-ui/pickers";
import "date-fns";
import PropTypes from "prop-types";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useState } from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import { createTrip } from "../lib/api";






const StyledRating = withStyles({
	iconFilled: {
		color: "#ff6d75",
	},
	iconHover: {
		color: "#ff3d47",
	},
})(Rating);

const customIcons = {
	1: {
		icon: <SentimentVeryDissatisfiedIcon />,
		label: "Very Dissatisfied",
	},
	2: {
		icon: <SentimentDissatisfiedIcon />,
		label: "Dissatisfied",
	},
	3: {
		icon: <SentimentSatisfiedIcon />,
		label: "Neutral",
	},
	4: {
		icon: <SentimentSatisfiedAltIcon />,
		label: "Satisfied",
	},
	5: {
		icon: <SentimentVerySatisfiedIcon />,
		label: "Very Satisfied",
	},
};

function IconContainer(props) {
	const { value, ...other } = props;
	return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
	value: PropTypes.number.isRequired,
};
const theme = createMuiTheme({
	spacing: 4,
});

theme.spacing(4);

export default function Hotel({ hotel, checkInDate,
	checkOutDate, }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	console.log(hotel)
	const [selectedDate, setSelectedDate] = React.useState(
		new Date("2021-05-15T21:11:54")
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const handleCloseModal = () => {
		setModalIsOpen(false);
	};

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

		<React.Fragment>
			<Button
				className="btn btn-primary auth"
				onClick={() => setModalIsOpen(true)
				}
			>
				More info
      </Button>
			<Modal isOpen={modalIsOpen} onRequestClose={() => handleCloseModal()}>
				<CssBaseline />
				<Container
					borderColor="grey"
					fixed
					maxWidth="md"
					style={{ backgroundColor: "white", height: "150vh" }}
				>
					<Box
						padding="20PX"
						component="span"
						display="block"
						fontSize="h6.fontSize"
						borderColor="error.main"
					>
						{hotel.name}
					</Box>
					<Box component="span" display="block" fontSize="h6.fontSize">
						{hotel.price.formatted} / 1 night

				</Box>

					<img src={hotel.images[0]} />

					<Box
						padding="15PX"
						component="fieldset"
						mb={3}
						borderColor="transparent"
					>
						<Typography component="legend"></Typography>
						<Rating
							name="customized-empty"
							defaultValue={hotel.rating}
							precision={0.5}
							emptyIcon={<StarBorderIcon fontSize="inherit" />}
						/>
					</Box>
					<Box
						padding="20PX"
						component="span"
						display="block"
						fontSize="h6.fontSize"
						borderColor="error.main"
					>
						Adress: {hotel.address}
					</Box>
					<Box
						padding="20PX"
						component="span"
						display="block"
						fontSize="h6.fontSize"
					>
						Description: {hotel.tagLine}
					</Box>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Grid container justify="space-around">
							<div className="MuiBox-root-47">Check in date: {checkInDate} Check out date: {checkOutDate}</div>
							
						</Grid>
					</MuiPickersUtilsProvider>
					<Button id="book" variant="contained" onClick={bookHotel}>Book</Button>
				</Container>
			</Modal>
		</React.Fragment>
	);
}



