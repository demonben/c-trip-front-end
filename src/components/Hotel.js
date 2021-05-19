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

export default function Hotel() {
	const [selectedDate, setSelectedDate] = React.useState(
		new Date("2021-05-15T21:11:54")
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	return (
		<React.Fragment>
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
					Florentin Boutique
				</Box>
				<Box component="span" display="block" fontSize="h6.fontSize">
					20$ / 1 night
				</Box>

				<img src="https://images.unsplash.com/photo-1581974206967-93856b25aa13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

				<Box
					padding="15PX"
					component="fieldset"
					mb={3}
					borderColor="transparent"
				>
					<Typography component="legend">Rate your stay</Typography>
					<Rating
						name="customized-empty"
						defaultValue={4}
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
					Adress: Tzahal 365, Tel Aviv
				</Box>
				<Box
					padding="20PX"
					component="span"
					display="block"
					fontSize="h6.fontSize"
				>
					Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
					ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur.
				</Box>
				correct one
				{/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Grid container justify="space-around">
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="MM/dd/yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Date picker inline"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
						<KeyboardDatePicker
							margin="normal"
							id="date-picker-dialog"
							label="Date picker dialog"
							format="MM/dd/yyyy"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
				</MuiPickersUtilsProvider> */}
			</Container>
		</React.Fragment>
	);
}
