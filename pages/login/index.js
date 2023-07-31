import React, { useState, useEffect } from "react";
import { useForm, Form } from "../../genericComponents";
import Link from "next/link";
import { useRouter } from 'next/router'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../genericComponents/Spinner";

const Login = () => {
  const { getFormValues, setFormValues, ...others } = useForm();
  const [invalidFormat, setInvalidFormat] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();


  useEffect(() => {
    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav?.classList?.remove("show");
    btn?.classList?.add("collapsed");
    nav2?.classList?.remove("active")
  }, [])

  var fieldsData = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "E-mail",
      required: true,
      className: "input-white",
      gridStyle: { xs: 12 },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      required: true,
      className: "input-white",
      gridStyle: { xs: 12 },
    },
  ];

  const submitHandler = async (values) => {
    dispatch(showLoading())
    try{
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/login`, values);
      console.log("resss ", res)
      if(res.data.success){
        dispatch(hideLoading())
        localStorage.setItem("token", res?.data?.token);
        toast.success("Login Successfully!", {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("user a home ", res.data.role)
        if(res?.data?.role === "user"){
          window.location.href = "/home"
        }else if (res?.data?.role === "admin")  {
          window.location.href = "admin/home"
        } else {
          window.location.href = "doctor/home"
        }
        
        //window.location.href = "/home"; // refresh page
      } else {
       dispatch(hideLoading())
        toast.error(res?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    } catch (e) {
      dispatch(hideLoading())
      toast.error(e.toString().split(":")[1], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
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
      <ToastContainer />
      <Spinner />
    </>
  );
};

export default Login;
