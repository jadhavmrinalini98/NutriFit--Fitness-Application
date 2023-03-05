import React from "react";

import { Container, Row, Col } from "reactstrap";
import './testimonials.css'

import testimonialImg from '../assets/images/review1.png'
import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }

    return(
        <section>
            <Container>
            <Row >
                <Col lg="8" className="m-auto">
                    <div className="slider__wrapper d-flex align-items-center gap-5">
                        <div className="slider__content w-50">
                        <h2 className="mb-4">What our customers are saying</h2>
                    <Slider {...settings}>
                        <div>
                            <div className="single__testimonial">
                                <p className="review_content">
                                    "I am very happy and proud to share my weight loss journey with NutriFit. It started with self motivation, continued through discipline & was supported immensely by Ma'am Dnyanada Pusalkar Chitale & her fantastic nutrition products. The programme is perfect for persons like me who want to loose weight. It allowed me to progress at my own pace & showed results week on week which kept me motivated to push myself further each and every day. Needless to say I was 120 kgs when I registered myself with Nutrition Clinic almost about 2 yrs ago (March 2020) and today I am 85 kgs with a loss of around 35 kgs and still counting. Today I feel myself very much fit and feel very active and very grateful to the staff team of Nutrition Clinic who are very helpful when in need and to NutriFit for their outstanding Diet plans and advices during every visit."
                                </p>

                                <h6>Mohan Aina</h6>
                                <p>Customer</p>
                            </div>
                        </div>

                        <div>
                            <div className="single__testimonial">
                                <p className="review_content">
                                    "My experience is very good with clinic. Please come and visit here, you will be able toeat full meal with so many different options of food in your diet plan. You can see result in just 1 month. Do visit and have a great experience."
                                </p>

                                <h6>Samruddhi Kalaskar</h6>
                                <p>Customer</p>
                            </div>
                        </div>

                    </Slider>
                        </div>
                        <div className="slider__img w-50">
                        <img src={testimonialImg} alt="" className='w-100' />
                        </div>
                    </div>
                    
                </Col>

            </Row>
            </Container>
        </section>
    );
};

export default Testimonials