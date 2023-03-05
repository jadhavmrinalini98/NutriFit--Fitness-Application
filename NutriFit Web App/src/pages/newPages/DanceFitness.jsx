import React from "react";
import { Link } from "react-router-dom";
import "./yoga.css";

const DanceFitness = () => {
	return (
		<section>
			<div className="container notFound__container">
				<h2> Dance Fitness</h2>
				"Every class has an array of breathing techniques, a variety of meditation techniques. Helps in improving confidence while gaining a stronger body."
				{/* <img src="newPages/yoga card.webp" alt="yoga" /> */}
				<Link to="/home" className="btn">
					Go back Home
				</Link>
			</div>
		</section>
	);
};

export default DanceFitness;