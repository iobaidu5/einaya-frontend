import React from 'react'

const Menu = () => {
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
                  <div className="appointment_content">
                <div className="row">
                  {appointments.map((appointment) => {
                    return (
                      <div className="col-md-4">
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
  )
}

export default Menu