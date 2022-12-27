import React from "react";
import { useEffect } from "react"
import Nav1 from "./Nav1";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Form from "./Form"
import Footer from "./Footer"
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./Nav1.css"
import "./Nav.css"
import "./Home.css"
import "./About.css"
import "./Skills.css"
import "./Education.css"
import "./Form.css"
import "./Footer.css"
import "./Projects.css"
import Projects from "./Projects";
const Portfolio = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return (<>
        <Nav1 />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Form />
        <Footer />
    </>)
}
export default Portfolio