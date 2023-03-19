import React from "react";

import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="body">
			<Navbar />
			<Jumbotron />
		</div>
	);
};

export default Home;
