import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Form } from "../../genericComponents";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import countries from "../../utils/countryList"
import { setUser } from "../../redux/features/userSlice";

const PersonalInformation = (props) => {
    const { user } = useSelector((state) => state.user);
    const { getFormValues, setFormValues, ...others } = useForm();
    const [disabled, setDisabled] = useState(true);
    const [state, setState] = useState({})
    const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/update-profile`,state,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        toast.success("Profile Updated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setDisabled(true);
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

  const disabledHandler = () => {
    setDisabled(false);
  };

  var fieldsData = [
    {
        name: "gender",
        label: "Gender",
        options: [{
          label: "Male",
          value: "Male"
        },
        {
          label: "Female",
          value: "Female"
        }],
        type: "radio",
        required: true,
        className: "radio",
        defaultValue: `${state?.gender}`,
        disabled: disabled,
        gridStyle: { xs: 12 },
        onChange: (e) => {
          setState({
            ...state,
            gender: e.target.value,
          });
        }
      },
      {
        name: "location",
        label: "Country",
        type: "dropdown",
        className: "input",
        options: countries,
        defaultValue: `${state?.location}`,
        value: `${state?.location}`,
        required: true,
        disabled: disabled,
        gridStyle: { xs: 12 },
        onChange: (e) => {
          setState({
            ...state,
            location: e.target.value,
          });
        }
      },
      {
        name: "language",
        label: "Language",
        type: "dropdown",
        className: "input",
        defaultValue: `${state?.language}`,
        value: `${state?.language}`,
        options: [
          {
            value: 'English'
          },
          {
            value: 'Arabic'
          },
          {
            value: 'French'
          }
        ],
        required: true,
        disabled: disabled,
        gridStyle: { xs: 12 },
        onChange: (e) => {
          setState({
            ...state,
            language: e.target.value,
          });
        }
      },
  ];


  useEffect(() => {
    setFormValues(user?.user);
    setState({
      gender: user?.user?.gender,
      location: user?.user?.location,
      language: user?.user?.language,
    });



  }, [state]);

  return (
    <div
      className="section__Jobs-styledContent"
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <div className="profiletab">
        <div className="tabheader">
          <div className="d-flex align-items-center">
            <h2 className="tabheader-title">Personal Information</h2>
            <i className='bx bxs-edit tabheader-icon' style={{ color: disabled ? "#ccc" : "#000"}} onClick={disabledHandler}></i>
          </div>
        </div>
        <div className="profiletab_form mt-5">
          <Form
            fieldsData={fieldsData}
            submitHandler={submitHandler}
            formType="personalInfo"
            actions={[
              {
                title: "Save",
                type: "submit",
                disabled: disabled,
                maxWidth: "100%",
                style: {
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: "20px auto",
                  background: disabled
                    ? "#555"
                    : "linear-gradient(265.63deg, #0077B6 -16.55%, #51CB20 114.1%)",
                },
              },
            ]}
            {...others}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
