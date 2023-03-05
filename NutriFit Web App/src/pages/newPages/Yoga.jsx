import React from "react";
import { Link } from "react-router-dom";
import YogaImage from "../../images/yoga.webp";
import "./yoga.css";

const Yoga = () => {
	return (
		<section>
			<div className="container notFound__container">
				<h2 className="yoga1"> Yoga</h2>
				<img src={YogaImage} alt="yoga" className="yoga1"/>
				
				Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.
				
				<Link to="/home/Home.jsx" className="btn">
					Go back Home
				</Link>
			</div>
		</section>
	);
};

export default Yoga;
