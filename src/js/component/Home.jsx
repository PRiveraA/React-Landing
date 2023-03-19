import React from "react";

import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div className="body">
			<Navbar />
			<Jumbotron />
			<Cards />
		</div>
	);
};

export default Home;
