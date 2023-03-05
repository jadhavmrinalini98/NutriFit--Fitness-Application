import React from 'react'
import { dance } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import YogaImage from "../../images/dance.jpeg";


export const Dance = () => {
  return (
    <section>
    <div className="container notFound__container">
    <h2 className="yoga1"> Dance Fitness</h2>
    <img src={YogaImage} alt="yoga" className="yoga1" />
    
    Fitness enthusiasts have been burning up the dance floor for years, rockin' off the calories to the sound of heart-pumping tunes and easy-to-master moves. Dance fitness instructors constantly adapt their choreography and develop new classes inspired by styles ranging from hip-hop and Latin dance to ballroom and ballet.

One of the best things about dance fitness classes is that they're accessible to almost all fitness levels. They also provide an easy and fun way for people to get active with a wide variety of offerings.


    {/* <Link to="/" className="btn">
      Go back Home
    </Link> */}
  </div>
  </section>
  )
}
