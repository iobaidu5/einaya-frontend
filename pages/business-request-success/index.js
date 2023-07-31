import React, { useState, useEffect } from "react";
import { useForm, Form } from "../../genericComponents";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import numbers from "../../utils/numbers";
import Spinner from "../../genericComponents/Spinner";
import ExportExcel from "../../utils/ExportExcel";
import jwt from 'jsonwebtoken';

const BusinessRequestSuccess = () => {
  const { getFormValues, setFormValues, ...others } = useForm();
  const [employeesFields, setEmployeesFields] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query;
  const [data, setData] = useState([]);
  const [showPDF, setShowPDF] = useState(false);
  const [state, setState] = useState();

  function generateDynamicForm(employeeCount) {
    var formFields = [];

    for (var i = 0; i < employeeCount; i++) {
      var identifier = "employee" + (i + 1);

      var firstNameField = {
        identifier: identifier,
        name: "firstName_" + identifier,
        label: "First Name",
        type: "text",
        placeholder: "First Name",
        required: true,
        gridStyle: "col-md-3 my-1",
      };

      var lastNameField = {
        identifier: identifier,
        name: "lastName_" + identifier,
        label: "Last Name",
        type: "text",
        placeholder: "Last Name",
        required: true,
        gridStyle: "col-md-3 my-1",
      };

      var dobField = {
        identifier: identifier,
        name: "dateOfBirth_" + identifier,
        label: "Date Of Birth",
        type: "date",
        placeholder: "D-O-B",
        required: true,
        gridStyle: "col-md-3 my-1",
      };

      var employeeIdField = {
        identifier: identifier,
        name: "email_" + identifier,
        label: "Email",
        type: "text",
        placeholder: "Email",
        required: true,
        gridStyle: "col-md-3 my-1",
      };

      formFields.push(firstNameField, lastNameField, dobField, employeeIdField);
    }

    setEmployeesFields(formFields);

    return formFields;
  }

  function getEmployeeData(formData) {
    var employeeDataArray = [];
    var employeeCount = Object.keys(formData).filter((key) =>
      key.startsWith("firstName_employee")
    ).length;

    for (var i = 1; i <= employeeCount; i++) {
      var identifier = "employee" + i;
      var employeeData = {};

      Object.entries(formData).forEach(function ([fieldName, fieldValue]) {
        if (fieldName.includes(identifier)) {
          var nameWithoutIdentifier = fieldName.replace(/_\w+$/, ""); // Remove the identifier from field name
          employeeData[nameWithoutIdentifier] = fieldValue;
        }
      });

      employeeDataArray.push(employeeData);
    }

    return employeeDataArray;
  }

  const workersSubmitHandler = async () => {
    const formData = getFormValues();
    var employeeDataArray = getEmployeeData(formData);
    console.log("workers  ", employeeDataArray); // TODO : to call api and store each user then
    dispatch(showLoading());
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/create-business-accounts`,
        {
          users: employeeDataArray,
          companyName: state?.companyName,
          accountType: "company user",
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
        dispatch(hideLoading());
        toast.success("User Registered Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setData(res.data.data);
        setShowPDF(true);
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

  const verifyAndExtractParams = async () => {
    // Get the finalUrl from the router query
    const finalUrl = window.location.href;

    // Extract the query parameters from the finalUrl
    const searchParams = new URLSearchParams(finalUrl?.split('?')[1]);
    const token = searchParams.get('token');

    // Send a request to the custom server route for JWT verification
    try {
      await fetch(`/api/verify?token=${token}`);
      const decoded = jwt.decode(token);
      const { id, status, companyName, noOfEmployees } = decoded;
      setState({
        id,
        status,
        companyName, 
        noOfEmployees
      });
    } catch (error) {
           toast.error(`Un-Authorized Access ${error}`, {
        position: "top-right",
        autoClose: 50000,
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
     verifyAndExtractParams();

    generateDynamicForm(Number(state?.noOfEmployees));
  }, [state?.noOfEmployees]);

  return (
    <>
      {showPDF ? (
        <>
          <section className="request">
            <div className="container">
              <div className="request_content2">
                <div className="row">
                  <div className="col-md-12">
                    <div className="request_success">
                      <img
                        src="./assets/images/success.png"
                        alt="success"
                        className="request_success-img"
                      />
                    </div>
                    <div className="request_details">
                      <h1 className="request_success-title text-center">
                        Employees Successfully Registered For Insurance
                      </h1>
                      <hr className="request_details-hr" />
                      <p className="request_success-p">
                        Your Insurance applications has been successful, Please
                        get your employees details and login to account
                        <br />
                        <strong> Thank you!</strong>
                      </p>
                    </div>
                    <ExportExcel
                      excelData={data}
                      fileName={"Employees Credentials"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="login">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="login_form-2">
                  <div className="login_form-content">
                    <h1 className="login_form-content--title">
                      Add Your Workers
                    </h1>
                  </div>
                  <hr className="login_form-hr" />
                  <div className="login_form-form">
                    <Form
                      fieldsData={employeesFields}
                      submitHandler={workersSubmitHandler}
                      formType="signup"
                      actions={[
                        {
                          title: "Sign Up",
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
      )}
      <Spinner />
    </>
  );
};

export default BusinessRequestSuccess;
