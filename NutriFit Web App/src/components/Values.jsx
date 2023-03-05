import React from "react";
import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
	return (
		<section className="values">
			<div className="container values__container">
				<div className="values__left">
					<div className="values__image">
						<img src={Image} alt="values Image" style={{height:'1000px'}}/>
					</div>
				</div>
				<div className="values__right">
					<SectionHead icon={<GiCutDiamond />} title="Store" />
					<p>
					Exercise is a staple activity that you should be undergoing no matter what age you are in life. 
					Are you ready to get the perfect motivation to goto gym?
					
					</p>
					<div className="values__wrapper">
						{values.map(({ id, icon,image, title, desc }) => {
							return (
								<Card className="values__value" key={id}>
									<span>{icon}</span>
									<h4>{title}</h4><br></br>
									<img src={image} style={{height:'120px',width:'200px',borderRadius:'10px'}}  />
									<small>{desc}</small>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
