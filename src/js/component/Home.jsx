import React from "react";

import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="body">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
