import React, { useState, useEffect } from "react";
import { useForm, Form } from "../../genericComponents";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/router'
import "react-toastify/dist/ReactToastify.css";
import numbers from "../../utils/numbers";

const SignUp = () => {
  const { getFormValues, setFormValues, ...others } = useForm();
  const [invalidFormat, setInvalidFormat] = useState(false);
  const dispatch = useDispatch();
  const [accountType, setAccountType] = useState("individual");
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [showEmployeesForm, setShowEmployeesForm] = useState(false);
  const [employeesFields, setEmployeesFields] = useState([]);
  const router = useRouter();

  useEffect(() => {
    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav?.classList?.remove("show");
    btn?.classList?.add("collapsed");
    nav2?.classList?.remove("active");
  }, []);

  const workersSubmitHandler = () => {
    const formData = getFormValues();
    var employeeDataArray = getEmployeeData(formData);
    console.log("workers  ", employeeDataArray); // TODO : to call api and store each user then
  };

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
        name: "employeeIdNumber_" + identifier,
        label: "Employee Id Number",
        type: "text",
        placeholder: "Employee Id Number",
        required: true,
        gridStyle: "col-md-3 my-1",
      };

      formFields.push(firstNameField, lastNameField, dobField, employeeIdField);
    }

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

  var fieldsData =
    accountType === "business"
      ? [
          {
            name: "typeAccount",
            label: "Type Account",
            defaultValue: accountType,
            options: [
              {
                label: "Individual",
                value: "individual",
              },
              {
                label: "Business",
                value: "business",
              },
            ],
            type: "radio",
            required: true,
            className: "radio",
            gridStyle: { xs: 12 },
            onChange: (e) => {
              setAccountType(e.target.value);
            },
          },
          {
            name: "companyName",
            label: "Company Name",
            type: "text",
            placeholder: "Company Name",
            required: true,
            gridStyle: "col-md-12 my-1",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "E-mail",
            required: true,
            gridStyle: "col-md-12 my-1",
          },
          {
            name: "phoneNumber",
            label: "Phone Number",
            type: "text",
            placeholder: "+971",
            required: true,
            gridStyle: "col-md-12 my-1",
          },
          {
            name: "noOfEmployees",
            label: "Number of Workers",
            type: "dropdown",
            className: "input",
            options: numbers,
            required: true,
            gridStyle: { xs: 12 },
            onChange: (e) => {
              setNumberOfEmployees(e.target.value);
            },
          },
        ]
      : [
          {
            name: "typeAccount",
            label: "Type Account",
            defaultValue: "individual",
            options: [
              {
                label: "Individual",
                value: "individual",
              },
              {
                label: "Business",
                value: "business",
              },
            ],
            type: "radio",
            required: true,
            className: "radio",
            gridStyle: { xs: 12 },
            onChange: (e) => {
              setAccountType(e.target.value);
            },
          },
          {
            name: "firstName",
            label: "First Name",
            type: "text",
            placeholder: "First Name",
            required: true,
            gridStyle: "col-md-6 my-1",
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "text",
            placeholder: "Last Name",
            required: true,
            gridStyle: "col-md-6 my-1",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "E-mail",
            required: true,
            gridStyle: "col-md-12 my-1",
          },
          {
            name: "dateOfBirth",
            label: "Date Of Birth",
            type: "date",
            placeholder: "D-O-B",
            required: true,
            gridStyle: "col-md-12 my-1",
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Password",
            required: true,
            gridStyle: "col-md-12 my-1",
          },
          {
            name: "confirmPassword",
            label: "Re-Password",
            type: "password",
            placeholder: "Confirm Password",
            required: true,
            gridStyle: "col-md-12 my-1",
          },
        ];

  const handleEmployees = async () => {
    // setShowEmployeesForm(true);
    // var dynamicForm = generateDynamicForm(numberOfEmployees);
    // setEmployeesFields(dynamicForm);

    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/business-account-request`,
        {
          ...getFormValues(),
          noOfEmployees: numberOfEmployees,
          status: "pending"
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success("Business Account Application Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push("/home")
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

  const submitHandler = async () => {
    if (getFormValues().password !== getFormValues().confirmPassword) {
      return toast.error("Confirm Password doesn't matched", {
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
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/register`,
        {
          ...getFormValues(),
          accountType: accountType,
          isAdmin: false,
          isDoctor: false,
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
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
  return (
    <>
      <section className="login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className={!showEmployeesForm ? "login_form-3" : "login_form-2"}
              >
                <div className="login_form-content">
                  <h1 className="login_form-content--title">
                    {showEmployeesForm
                      ? "Add Your Workers"
                      : "Create An Account"}
                  </h1>
                </div>
                <hr className="login_form-hr" />
                {!showEmployeesForm ? (
                  <div className="login_form-form">
                    <Form
                      fieldsData={fieldsData}
                      submitHandler={
                        accountType === "business"
                          ? handleEmployees
                          : submitHandler
                      }
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
                ) : (
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
                )}
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
      <ToastContainer />
    </>
  );
};

export default SignUp;
