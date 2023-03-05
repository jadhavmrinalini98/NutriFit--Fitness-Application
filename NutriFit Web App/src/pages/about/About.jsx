import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about6.webp";
import MissionImage from "../../images/about5.webp";

const About = () => {
	return (
		<>
			<Header title="About us" image={HeaderImage}>
			At Nutri.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src={StoryImage} alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
						Nutri.Fit is a health and fitness company offering 
						digital and offline experiences across fitness, nutrition, and mental well-being.
						</p>
						<p>
						Co-founded by Mrinalini Jadhav, Monalika Pradhan, Krishnanand Jha, Vatsal Kapadia, Tanmay Shekhar and Shreya Iyer the company is headquartered in Boston, Massachusetts.
						</p>
						<p>
						At Nutri.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay
						</p>
					</div>
				</div>
			</section>

			<section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
						Our Vision is to equip our members with the tools and knowledge they need to achieve their fitness goals while catering to each member’s lifestyle.
						 Vision is all about guiding our members towards unlocking their potential and helping them be the best version of themselves.
						</p>
						<p>
						We are proud of our state-of-the-art facilities that are unmatched in Boston . Our modern gym equipment, training spaces, Visio plex cardio cinema, and a luxurious member’s lounge offer an extraordinary workout experience.
						</p>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
						Nutri.Fit's mission is to “make health easy”.
						</p>
						<p>
						Through our products and services, we want to enable people to significantly improve their overall health, 
						reduce the risk of lifestyle diseases and enable a long, disease free life.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
