import React, { useState, useEffect } from "react";
import { useForm, Form } from "../../genericComponents";
import Link from "next/link";

const SignUp = () => {
  const { getFormValues, setFormValues, ...others } = useForm();
  const [invalidFormat, setInvalidFormat] = useState(false);

  useEffect(() => {
    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
    nav2.classList.remove("active")
  }, [])

  var fieldsData = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Name",
      required: true,
      gridStyle: "col-md-12",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "E-mail",
      required: true,
      gridStyle: "col-md-12",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      required: true,
      gridStyle: "col-md-12",
    },
    {
      name: "password",
      label: "Re-Password",
      type: "password",
      placeholder: "Re-Password",
      required: true,
      gridStyle: "col-md-12",
    },
  ];

  const submitHandler = () => {};
  return (
    <>
      <section className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="login_form">
                <div className="login_form-content">
                  <h1 className="login_form-content--title">
                    Create An Account
                  </h1>
                </div>
                <hr className="login_form-hr" />
                <div className="login_form-form">
                  <Form
                    fieldsData={fieldsData}
                    submitHandler={submitHandler}
                    formType="signup"
                    actions={[
                      {
                        title: "Sign Up",
                        type: "submit",

                        maxWidth: "100%",
                        style: {display: "flex", justifyContent: "center",  margin: "20px auto" },
                      },
                    ]}
                    {...others}
                  />
                </div>
                <div className="login_bottom">
                  <p className="login_bottom-p">
                    Have an account?{" "}
                    <Link href="/login" passHref>
                      <span className="login_bottom-link">Log in</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
