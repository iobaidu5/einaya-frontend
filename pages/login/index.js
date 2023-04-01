import React, { useState } from "react";
import { useForm, Form } from "../../genericComponents";
import Link from "next/link";

const Login = () => {
  const { getFormValues, setFormValues, ...others } = useForm();
  const [invalidFormat, setInvalidFormat] = useState(false);

  var fieldsData = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "E-mail",
      required: true,
      className: "input",
      gridStyle: { xs: 12 },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      required: true,
      className: "input",
      gridStyle: { xs: 12 },
    },
  ];

  const submitHandler = () => {

  };



  return (
    <>
      <section className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="login_form">
                <div className="login_form-content">
                  <h1 className="login_form-content--title">
                    Log In To Your Account
                  </h1>
                </div>
                <hr className="login_form-hr" />
                <div className="login_form-form">
                  <Form
                    fieldsData={fieldsData}
                    submitHandler={submitHandler}
                    formType="login"
                    actions={[
                      {
                        title: "Login",
                        type: "submit",
                
                        maxWidth: "100%",
                        style: {display: "flex", justifyContent: "center",  margin: "20px auto" },
                      },
                    ]}
                    {...others}
                  />
                </div>
                <div className="login_bottom">
                  <p className="login_bottom-p">Don’t have an account? <Link href="/signup"  passHref><span className="login_bottom-link">Sign Up</span></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
