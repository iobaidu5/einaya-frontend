import React, { useState } from "react";
import { useForm, Form } from "../../genericComponents";
import Link from "next/link";

const Contact = () => {
  const { getFormValues, setFormValues, ...others } = useForm();
  const [invalidFormat, setInvalidFormat] = useState(false);

  var fieldsData = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Name",
      required: true,
      className: "input",
      gridStyle: "col-md-12",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Your E-mail",
      required: true,
      className: "input",
      gridStyle: "col-md-12",
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Phone",
      required: true,
      className: "input",
      gridStyle: "col-md-12",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Subject",
      required: true,
      className: "input",
      gridStyle: "col-md-12",
    },
    {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Message",
        required: true,
        className: "textarea",
        gridStyle: "col-md-12",
        rows: "4"
      },
  ];

  const submitHandler = () => {};
  return (
    <>
      <div className="page-banner-area blog-page-are">
        <div className="container">
          <div className="single-page-banner-content">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="contact-us-area pt-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Get In Touch</span>
            <h2>Fill In The Contact Now</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-contact-img">
                <div className="contact-main-img">
                  <img
                    src="assets/images/contact-us-img-5.webp"
                    alt="contact-us"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <Form
                  fieldsData={fieldsData}
                  submitHandler={submitHandler}
                  formType="contact"
                  actions={[
                    {
                      title: "Submit Now",
                      type: "submit",

                      maxWidth: "100%",
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        margin: "20px auto",
                        width: "95%",
                      },
                    },
                  ]}
                  {...others}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-area pt-70">
        <div className="container">
          <div className="contact-card-item">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6 col-md-12">
                <div className="contact-card">
                  <div className="contact-icon">
                    <img src="assets/images/contact-phone-2.svg" alt="Phone" />
                  </div>
                  <h2>Phone Number</h2>
                  <p>
                    <a href="tel:(305) 547-9909">+(305) 547-9909</a>
                  </p>
                  <a href="tel:(305) 547-9908">+(305) 547-9908</a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-12">
                <div className="contact-card">
                  <div className="contact-icon">
                    <img src="assets/images/contact-email.svg" alt="Email" />
                  </div>
                  <h2>Sent Us Email</h2>
                  <p>
                    <a href="mailto:hello@einaya.com">hello@einaya.com</a>
                  </p>
                  <a href="mailto:hello@einaya.com">hello@einaya.com</a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-md-12">
                <div className="contact-card">
                  <div className="contact-icon">
                    <img src="assets/images/location-icon.svg" alt="images" />
                  </div>
                  <h2>Our Location</h2>
                  <p>382 NE 191st NY Miami, FL 33179-3899</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-area">
        <div className="container-fluid">
          <div className="place-map">
            <iframe
              className="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830902776!2d-74.11976379633643!3d40.69766374862956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1667807354267!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
