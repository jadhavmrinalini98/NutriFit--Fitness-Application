import React from 'react'
// import { kickboxing } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import YogaImage from "../../images/kickBoxing.jpeg";

const Kickboxing = () => {
  return (
    <section>
		<div className="container notFound__container">
				<h2 className="yoga1"> Kick Boxing</h2>
				<img src={YogaImage} alt="yoga" className="yoga1"  />
				
				At Nutri.Fit, we aim to honor the sport of kickboxing in the right way too. Expect punches, elbows, knees, and kicks of all sorts during this high-energy, full body workout.

      The flow of our signature kickboxing class remains the same as our boxing fitness classes. You burn calories through a progression of warm-up drills, shadowboxing, and HIIT exercises. You’ll also endure 3-minute rounds on the heavy bag and strength work.
				
				{/* <Link to="/" className="btn">
					Go back Home
				</Link> */}
        {/* style={"height:450px, width:1384.80px"} */}
			</div>
	</section>
  )
}

export default Kickboxing