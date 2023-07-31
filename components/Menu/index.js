import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setDoctor, showSidebar } from "../../redux/features/doctorSlice";

const Menu = () => {
  const dispatch = useDispatch();

const selectDoctorHandler = (value) => {
  console.log("doctor selected 2", value)
  dispatch(setDoctor(value))
  dispatch(showSidebar(true))
}


  const appointments = [
    {
      logo: "/assets/images/appointment/cardialogist.svg",
      title: "Cardiologist",
    },
    {
      logo: "/assets/images/appointment/dental.svg",
      title: "Dentist",
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
      <div className="appointment_content">
        <div className="row">
          {appointments.map((appointment, index) => {
            return (
              <div className="col-md-4 col-sm-6" key={index} onClick={() => selectDoctorHandler(appointment?.title)}>
                <div className="appointment_box">
                  <div className="appointment_box-icon">
                    <img
                      src={appointment.logo}
                      alt=""
                      className="appointment_box-icon--img"
                    />
                  </div>
                  <div className="appointment_box-title">
                    <h3 className="appointment_box-title--p">
                      {appointment.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
