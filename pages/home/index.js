import React, { useEffect } from "react";
import Slider from "../../components/Slider";
import Partners from "../../components/Partners";
import About from "../../components/About";
import Appointment from "../../components/Appointment";
import Odometer from "../../components/Odometer";
import Services from "../../components/Services";
import Recruitment from "../../components/Recruitment";
import Subscribe from "../../components/Subscribe";
import Testimonials from "../../components/Testimonials";
import Team from "../../components/Team";
import Blog from "../../components/Blog";

const Home = () => {

  useEffect(() => {
    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
    nav2.classList.remove("active")
  }, [])

  return (
    <>
      <Slider />
      <Partners />
      <About />
      <Appointment />
      <Odometer />
      <Services />
      <Recruitment />
      <Subscribe />
      <Testimonials />
      <Team />
      <Blog />
    </>
  );
};

export default Home;
