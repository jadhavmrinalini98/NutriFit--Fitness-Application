import React from 'react'
import { weight } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import YogaImage from "../../images/boxing.jpeg";

const Weight = () => {
  return (
    <section>
		<div className="container notFound__container">
				<h2 className="yoga1"> Kick Boxing</h2>
				<img src={YogaImage} alt="yoga" className="yoga1"/>
				
				Weight training, also known as resistance or strength training, builds lean, stronger muscles, strengthens your bones and joints, and can help keep your metabolism in a healthy state — meaning you’ll burn more calories even when you’re resting.

And the benefits of lifting weights aren’t just for young people. Weight training as we age can help fight the loss of muscle mass and mobility, as well as improve psychological well-being.


				{/* <Link to="/" className="btn">
					Go back Home
				</Link> */}
			</div>
	</section>
  )
}

export default Weight