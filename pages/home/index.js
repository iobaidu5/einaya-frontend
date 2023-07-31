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

import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../genericComponents/Spinner";
import Offers from "../../components/Offers";
import { setDoctor, showSidebar } from "../../redux/features/doctorSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav?.classList?.remove("show");
    btn?.classList?.add("collapsed");
    nav2?.classList?.remove("active")
  }, [])

  useEffect(() => {
    dispatch(showSidebar(false))
  }, [])

  // useEffect(() => {
  //   if(user?.role === "admin"){
  //     window.location.href = "/home";
  //     toast.error("Un-Authorized Access", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // }, [])

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
      <Offers />
      <Team />
      <Blog />
    </>
  );
};

export default Home;
