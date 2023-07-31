import React, { useState } from "react";
import Menu from "../Menu";

const Appointment = () => {
  const appointments = [
    {
      logo: "/assets/images/appointment/cardialogist.svg",
      title: "Cardiologist",
    },
    {
      logo: "/assets/images/appointment/dental.svg",
      title: "Dental",
    },
    {
      logo: "/assets/images/appointment/gastroenterologist.svg",
      title: "Gastroenterologist",
    },
    {
      logo: "/assets/images/appointment/cardialogist.svg",
      title: "Cardiologist",
    },
    {
      logo: "/assets/images/appointment/general-practitioner.svg",
      title: "General Practitioner",
    },
    {
      logo: "/assets/images/appointment/gynaecologist.svg",
      title: "Gynaecologist",
    },
    {
      logo: "/assets/images/appointment/ophthalmologist.svg",
      title: "Ophthalmologist",
    },
    {
      logo: "/assets/images/appointment/orthopedist.svg",
      title: "Orthopedist",
    },
    {
      logo: "/assets/images/appointment/paediatrician.svg",
      title: "Paediatrician",
    },
  ];
  return (
    <>
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="appointment_image">
                <img
                  src="./assets/images/appointment/1.svg"
                  alt=""
                  className="appointment_image-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title left-title">
                <span className="top-title">Appointment</span>
                <h2>Select your appointment</h2>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
