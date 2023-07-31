import React, { useState, useEffect } from "react";
import $ from "jquery";
import Menu from "../Menu";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import { setDoctor, showSidebar } from "../../redux/features/doctorSlice";
import { useForm, Form } from "../../genericComponents";
import TimeGrid from "../TimeGrid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const SideBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [showProviderForm, setShowProviderForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [selectedProvider, setSelectedProvider] = useState();
  const [searchDoctor, setSearchDoctor] = useState("");
  const [doctors, getDoctors] = useState([]);
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);
  const { getFormValues, setFormValues, ...others } = useForm();
  const [calender, showCalender] = useState(false);
  const [clock, showClock] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentForm, showAppointmentForm] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hideOptions, setHideOptions] = useState(true);
  const [appointmentType, setAppointmentType] = useState("self");
  const [providers, setProviders] = useState([]);
  const [showProviders, setShowProviders] = useState(false);

  doctor.show == true && openSideNav();

  function openSideNav() {
    $("#side-menu").addClass("open-side-nav");
    $("#overlay").addClass("overlay");
  }

  function closeSideNav() {
    $("#side-menu").removeClass("open-side-nav");
    $("#overlay").removeClass("overlay");
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setDoctor(searchDoctor));
  };

  const handleSelectedDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    showCalender(true);
    setShowForm(true);
  };

  const handleSelectedProvider = (provider) => {
    setSelectedProvider(provider);
    setShowProviders(false);
    setShowProviderForm(true);
  };

  const handleDate = (event) => {
    setDate(event);
    showCalender(false);
    showClock(true);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    showClock(false);
    setHideOptions(false);
    // Handle any additional logic when a time is selected
  };

  const providersMenu = () => {
    setShowForm(true);
    setShowProviders(true);
    $("#providerMenuBtn").addClass("default-btn btn-style-2 text-white w-100");
    $("#doctorMenuBtn").removeClass("default-btn btn-style-2 text-white w-100");
    $("#doctorMenuBtn").addClass("transparent-btn");
  };

  const doctorsMenu = () => {
    setShowForm(false);
    setShowProviders(false);
    setShowProviderForm(false);
    $("#doctorMenuBtn").addClass("default-btn btn-style-2 text-white w-100");
    $("#providerMenuBtn").removeClass("default-btn btn-style-2 text-white w-100");
    $("#providerMenuBtn").addClass("transparent-btn");
  };

  const submitHandler = async () => {
    setSelectedDoctor(null);
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/book-appointment`,
        {
          ...getFormValues(),
          doctorId: selectedDoctor.doctorId,
          type: appointmentType,
          date: moment(date.toString()).format("DD/MM/YYYY"),
          time: selectedTime,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        console.log("res.data", res.data);
        dispatch(hideLoading());
        toast.success("Your Appointment Request has been send to the doctor", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setShowForm(false);
      } else {
        dispatch(hideLoading());
        toast.error(res?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (e) {
      dispatch(hideLoading());
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const submitRequestHandler = async () => {
    setSelectedDoctor(null);
    console.log("req handlers and provvder", getFormValues(), selectedProvider);
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/providers/apply-claim-request`,
        {
          ...getFormValues(),
          providerId: selectedProvider.providerId,
          date: moment(date.toString()).format("DD/MM/YYYY"),
          providerName: selectedProvider?.name,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        console.log("res.data", res.data);
        dispatch(hideLoading());
        toast.success("Your Claim Request has been submitted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setShowForm(false);
      } else {
        dispatch(hideLoading());
        toast.error(res?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (e) {
      dispatch(hideLoading());
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const getDoctor = async () => {
    dispatch(showLoading());
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctor/get-doctor-by-specialization`,
        {
          specialization: doctor.doctor.toLowerCase(),
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        // setShow(true)
        dispatch(showSidebar(true));
        getDoctors(res?.data?.data);
        dispatch(hideLoading());
      } else {
        dispatch(hideLoading());
        toast.error(res?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (e) {
      dispatch(hideLoading());
      toast.error(e.toString().split(":")[1], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const getProviders = async () => {
    dispatch(showLoading());
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/providers/get-all-providers`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        // setShow(true)
        setProviders(res?.data?.data);
        dispatch(hideLoading());
      } else {
        dispatch(hideLoading());
        toast.error(res?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (e) {
      dispatch(hideLoading());
      toast.error(e.toString().split(":")[1], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    doctor.doctor !== "" && getDoctor();
  }, [doctor.doctor]);

  useEffect(() => {
    getProviders();
  }, []);

  var fieldsData = [
    {
      name: "appointmentType",
      label: "Booking an Appointment For",
      options: [
        {
          label: "Self",
          value: "self",
        },
        {
          label: "Others",
          value: "others",
        },
      ],
      type: "radio",
      required: true,
      className: "radio",
      defaultValue: appointmentType,
      gridStyle: { xs: 12 },
      onChange: (e) => {
        setAppointmentType(e.target.value);
      },
    },
    {
      name: "name",
      label: "Your Details",
      placeholder: "Name",
      type: "text",
      className: "input",
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
    },
    {
      name: "email",
      label: "",
      placeholder: "Email",
      type: "email",
      className: "input",
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
    },
    {
      name: "phoneNumber",
      label: "",
      placeholder: "+971",
      type: "number",
      className: "input",
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
    },
    {
      name: "dateOfBirth",
      label: "",
      placeholder: "Date Of Birth",
      type: "date",
      required: true,
      className: "input",
      gridStyle: "col-md-12",
    },
    {
      name: "idNumber",
      label: "",
      placeholder: "Emirates ID Number",
      type: "text",
      className: "input",
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
    },
    {
      name: "term",
      label:
        " *I am flexible to different time slots subject to the Doctor's Availability and I agree to Healthigo’s Terms Of Use policy.",
      defaultValue: "accept",
      placeholder: "11",
      options: [
        {
          label: "accept",
          value: "accept",
        },
      ],
      type: "checkbox",
      required: true,
      className: "radio-btn",
      gridStyle: { xs: 12 },
    },
  ];

  var fieldsData2 = [
    {
      name: "name",
      label: "Your Name",
      placeholder: "Name",
      type: "text",
      className: "input",
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
    },
    {
      name: "idNumber",
      label: "Einaya Id Number",
      placeholder: "Einaya Id Number",
      type: "text",
      className: "input",
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
    },
    {
      name: "type",
      label: "Claim Type",
      placeholder: "Claim Type",
      type: "text",
      className: "input",
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
    },
    // {
    //   name: "date",
    //   label: "",
    //   placeholder: "Date Of Request",
    //   type: "date",
    //   required: true,
    //   className: "input",
    //   gridStyle: "col-md-12",
    // },
    // {
    //   name: "term",
    //   label:
    //     " *I am flexible to different time slots subject to the Doctor's Availability and I agree to Healthigo’s Terms Of Use policy.",
    //   defaultValue: "accept",
    //   placeholder: "11",
    //   options: [
    //     {
    //       label: "accept",
    //       value: "accept",
    //     },
    //   ],
    //   type: "checkbox",
    //   required: true,
    //   className: "radio-btn",
    //   gridStyle: { xs: 12 },
    // },
  ];

  return (
    <>
      <div className="navbar-right">
        <a id="menuButton" onClick={openSideNav} className="menuButton">
          <img src="./assets/images/calendar.svg" />
        </a>
      </div>
      <div id="overlay" className=""></div>
      <div id="side-menu" className="main-side-nav">
        {doctor.show && !showForm ? (
          <a
            id="close-menu"
            className="menuCloseButton"
            onClick={() => {
              dispatch(showSidebar(false));
              setSelectedDoctor(false);
              setSelectedTime(false);
              setDate(false);
              showCalender(false);
              showClock(false);
            }}
          >
            <span id="side-menu-close-text mb-4">
              <i className="bx bx-chevron-left"></i>
            </span>
            <span className="menu-Close "></span>
          </a>
        ) : showForm ? (
          <a
            id="close-menu"
            className="menuCloseButton"
            onClick={() => {
              setShowForm(false);
              setSelectedDoctor(false);
              setSelectedTime(false);
              setDate(false);
              showCalender(false);
              showClock(false);
            }}
          >
            <span id="side-menu-close-text mb-4">
              <i className="bx bx-chevron-left"></i>
            </span>
            <span className="menu-Close "></span>
          </a>
        ) : (
          <a id="close-menu" className="menuCloseButton" onClick={closeSideNav}>
            <span id="side-menu-close-text">
              <i className="bx bx-x"></i>
            </span>
            <span className="menu-Close "></span>
          </a>
        )}
        {doctor.show ? (
          <div className="sidebar">
            <div className="sidebar_content">
              <div className="container-fluid">
                {hideOptions ? (
                  <div className="banner-btn d-flex align-items-center mt-3">
                    <button
                    id="doctorMenuBtn"
                      className="default-btn btn-style-2 text-white w-100"
                      onClick={doctorsMenu}
                    >
                      Doctors
                    </button>
                    <button  id="providerMenuBtn" className="transparent-btn" onClick={providersMenu}>
                      Providers
                    </button>
                  </div>
                ) : (
                  <div className="available_selected-content-2">
                    <p className="available_selected-content--p">
                      {moment(date.toString()).format("ddd MM/DD/YYYY")}
                    </p>
                  </div>
                )}

                {!showForm && (
                  <>
                    <div className="available">
                      <div className="available_content">
                        <img
                          src="./assets/images/doctor.png"
                          alt="doctor"
                          className="available_content-img"
                        />
                        <h2 className="available_content-title">
                          Any available doctor
                        </h2>
                      </div>
                      <button className="available_content-btn">Select</button>
                    </div>
                    <div className="sidebar_content-title py-2">
                      <h2 className="sidebar_content-title--h2 color-2">
                        Or select doctor:{" "}
                      </h2>
                    </div>
                  </>
                )}

                {doctors.length == 0  ? (
                  <p className="sidebar_content-title--h2 color-2 text-center">
                    No Doctor Found!
                  </p>
                ) : (
                  doctors.map((doctor, index) => {
                    return (
                      <>
                        {!showForm && (
                          <div className="available-2" key={index}>
                            <div className="available_content">
                              <div>
                                <img
                                  src="./assets/images/doctor.png"
                                  alt="doctor"
                                  className="available_content-img"
                                />
                              </div>
                              <div className="d-flex justify-content-between align-items-center w-100 px-3">
                                <div>
                                  <p className="available_content-name">
                                    Dr. {doctor?.firstName} {doctor?.lastName}
                                  </p>
                                  <p className="available_content-specialty">
                                    {doctor?.specialization}
                                  </p>
                                  <p className="available_content-address">
                                    {" "}
                                    JTS Medical Centre
                                  </p>
                                </div>
                                <div>
                                  <p className="available_content-specialty">
                                    <i className="bx bxs-map available_content-icon"></i>{" "}
                                    {doctor?.address}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <button
                              className="available_content-btn available_content-btn-2"
                              onClick={() => handleSelectedDoctor(doctor)}
                            >
                              Select
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })
                )}

                {providers.length == 0 ? (
                  <p className="sidebar_content-title--h2 color-2 text-center">
                    No Providers Found!
                  </p>
                ) : (
                  providers.map((doctor, index) => {
                    return (
                      <>
                        {showProviders && (
                          <div className="available-2" key={index}>
                            <div className="available_content">
                              <div>
                                <img
                                  src="./assets/images/doctor.png"
                                  alt="doctor"
                                  className="available_content-img"
                                />
                              </div>
                              <div className="d-flex justify-content-between align-items-center w-100 px-3">
                                <div>
                                  <p className="available_content-name">
                                    {doctor?.name}
                                  </p>
                                  <p className="available_content-specialty">
                                    {doctor?.specialization}
                                  </p>
                                  <p className="available_content-specialty">
                                    <i className="bx bxs-map available_content-icon"></i>{" "}
                                    {doctor?.address}
                                  </p>
                                </div>
                                <div></div>
                              </div>
                            </div>
                            <button
                              className="available_content-btn available_content-btn-2"
                              onClick={() => handleSelectedProvider(doctor)}
                            >
                              Select
                            </button>
                          </div>
                        )}
                      </>
                    );
                  })
                )}

                {showProviderForm && (
                  <>
                    <div className="available_selected">
                      <div className="available_selected-content">
                        <p className="available_selected-content--p">
                          {selectedProvider?.name}
                        </p>
                      </div>
                      {/* <div className="available_selected-content">
                                  <p className="available_selected-content--p">
                                    {selectedTime.toString()}{" "}
                                  </p>
                                </div> */}
                    </div>
                    <Form
                      fieldsData={fieldsData2}
                      submitHandler={submitRequestHandler}
                      formType="signup"
                      actions={[
                        {
                          title: "Confirm your Request",
                          type: "submit",

                          maxWidth: "100%",
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            margin: "20px auto",
                          },
                        },
                      ]}
                      {...others}
                    />
                  </>
                )}

                {selectedDoctor && (
                  <>
                    <>
                      <div className="available-2">
                        <div className="available_content">
                          <div>
                            <img
                              src="./assets/images/doctor.png"
                              alt="doctor"
                              className="available_content-img"
                            />
                          </div>
                          <div className="d-flex justify-content-between align-items-center w-100 px-3">
                            <div>
                              <p className="available_content-name">
                                Dr. {selectedDoctor?.firstName}{" "}
                                {selectedDoctor?.lastName}
                              </p>
                              <p className="available_content-specialty">
                                {selectedDoctor?.specialization}
                              </p>
                              <p className="available_content-address">
                                {" "}
                                Fee: {selectedDoctor?.fees}
                              </p>
                            </div>
                            <div>
                              <p className="available_content-specialty">
                                <i className="bx bxs-map available_content-icon"></i>{" "}
                                {selectedDoctor?.address}
                              </p>
                              <p className="available_content-specialty">
                                <i className="bx bx-time-five available_content-icon"></i>{" "}
                                {selectedDoctor?.timing}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {calender ? (
                        <Calendar onChange={handleDate} value={date} />
                      ) : clock ? (
                        <TimeGrid
                          selectedTime={selectedTime}
                          handleTimeSelection={handleTimeSelection}
                        />
                      ) : (
                        <>
                          <div className="available_selected">
                            <div className="available_selected-content">
                              <p className="available_selected-content--p">
                                {moment(date.toString()).format(
                                  "ddd MM/DD/YYYY"
                                )}
                              </p>
                            </div>
                            <div className="available_selected-content">
                              <p className="available_selected-content--p">
                                {selectedTime.toString()}{" "}
                              </p>
                            </div>
                          </div>
                          <Form
                            fieldsData={fieldsData}
                            submitHandler={submitHandler}
                            formType="signup"
                            actions={[
                              {
                                title: "Confirm your Booking",
                                type: "submit",

                                maxWidth: "100%",
                                style: {
                                  display: "flex",
                                  justifyContent: "center",
                                  margin: "20px auto",
                                },
                              },
                            ]}
                            {...others}
                          />
                        </>
                      )}
                    </>
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="sidebar">
            <div className="sidebar_content">
              <div className="sidebar_content-form">
                <div className="sidebar_content-input">
                  <div className="right-inner-addon input-container">
                    <i className="bx bx-search-alt-2 right-inner-addon-icon"></i>
                    <input
                      type="text"
                      name="search-doctor"
                      placeholder="Search By Doctor Name or Specialty or Provider"
                      className="input"
                      onChange={(e) => setSearchDoctor(e.target.value)}
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: "20px 0",
                        background: "#fff",
                        height: "54px",
                      }}
                    />
                  </div>
                </div>
                <div className="sidebar_content-input">
                  <div className="right-inner-addon input-container">
                    <i className="bx bx-current-location right-inner-addon-icon"></i>
                    <input
                      type="text"
                      name="search-location"
                      placeholder="Location"
                      className="input"
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: "20px 0",
                        background: "#fff",
                        height: "54px",
                      }}
                    />
                  </div>
                </div>
                <div className="option-item w-100">
                  <button
                    className="default-btn btn-style-2 text-white w-100"
                    onClick={handleSearch}
                  >
                    Select
                  </button>
                </div>
              </div>
              <div className="sidebar_content-title">
                <h2 className="sidebar_content-title--h2">Specialities</h2>
              </div>
              <div className="sidebar_content-menu">
                <Menu />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
