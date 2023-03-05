
import React from "react";
import './download.css'

import appImg from '../assets/images/app.png'

import { Container, Row,Col } from "reactstrap";


const Download = () => {

    return (
        <section>
            <Container className="app__container">
                <Row>
                    <Col lg='4' md='3'>
                        <div className="app__img">
                            <img src={appImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="app__content">
                            <h5>Download our app</h5>
                            <h2>Never Feel Hungry! Download Our Mobile App Order </h2>
                            <p> Go ahead and download our app</p>
                        </div>

                        <div className="app__btns d-flex align-items-center gap-5 mt-4">
                            <button className="btn__apple d-flex align-items-center gap-3">
                            <i class="ri-apple-line"></i> <a href="https://www.apple.com/app-store/">Apple Store</a>
                            </button>

                            <button className="btn__google d-flex align-items-center gap-3">
                            <i class="ri-google-play-line"></i>{" "}
                            <a href="https://play.google.com/store/games?hl=en_US&gl=US">Google Store</a>
                            </button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Download