import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
	return (
		<section>
			<div className="container notFound__container">
				<h2>not NotFound</h2>
				<img src="" alt="" />
				<Link to="/" className="btn">
					Go back Home
				</Link>
			</div>
		</section>
	);
};

export default NotFound;
