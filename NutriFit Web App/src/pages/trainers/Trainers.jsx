import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./trainers.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Fragment } from "react";
//import Header from "../components-diet_plan/header/Header";
import HeroSlider from "../../components-diet_plan/hero-slider/HeroSlider";
import PopularMenu from "../../components-diet_plan/popular-menu/PopularMenu";
import ChooseUs from "../../components-diet_plan/choose-us/ChooseUs";
import MenuPack from "../../components-diet_plan/menu-pack/MenuPack";
import Testimonials from "../../components-diet_plan/testimonials/Testimonials";
import Download from "../../components-diet_plan/download-section/Downlaod";
//import Footer from "../../components-diet_plan/footer/Footer";


const DietPlan = () => {

    return <Fragment>
        <HeroSlider/>
        <PopularMenu/>
        <ChooseUs/>
        <MenuPack/>
        <Testimonials/>
        <Download/>
        </Fragment>
};

export default DietPlan;