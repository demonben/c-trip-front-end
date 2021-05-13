import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";



import SignUp from "../components/SignUp";
import Home from "./pages/Home";
import NavBar from "./NavBar"
import Search from "./Search"
import Login from "./Login";


function Header() {
	return (
		// <Router>
		// 	<NavBar />
		// 	<Switch>
		// 		<Route path="/" exact>
		// 			<Home />
		// 		</Route>

		// 		<Route path="/search" >
		// 			<Search />
		// 		</Route>

		// 		<Route path="/login" >
		// 			<Login />
		// 		</Route>
		// 	</Switch>
		// </Router>
	);
}

export default Header;
