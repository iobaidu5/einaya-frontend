import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useForm, Form } from "/genericComponents";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/features/alertSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { withAuth } from '../../../customHooks/withAuth';

const DoctorProfile = () => {
  const { getFormValues, setFormValues, ...others } = useForm();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(null);
  const [invalidFormat, setInvalidFormat] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState({})

  var fieldsData = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "abc-xyz",
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",
    },
    // {
    //   id: "contained-button-file",
    //   name: "logo",
    //   label: "Company Logo",
    //   type: "file",
    //   icon: logo,
    //   required: !logo && true,
    //   disabled: disabled,
    //   style: { display: "none" },
    //   gridStyle: { xs: 2 },
    //   onChangeHandler: handleFileChange,
    // },
    {
      name: "lastName",
      label: "Last Name",
      required: true,
      placeholder: "abc-xyz",
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",        
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "doctor@example.com",
      required: true,
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",
    },
    {
      name: "address",
      label: "Address",
      placeholder: "",
      required: true,
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",

    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "000-000-0000",
      required: true,
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",
    },
    {
      name: "specialization",
      label: "Specialization",
      required: true,
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",
    },
    {
      name: "experience",
      label: "Experience",
      required: true,
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",
    },
    {
      name: "fees",
      label: "Fees",
      required: true,
      disabled: disabled,
       className: "input",
      gridStyle: "col-md-6",
    },
  ];

  const getDoctorProfile = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctor/get-doctor-info`,
        {
          userId: user?.user?.userId,
        },
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
        toast.success("All Doctors Fetched", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFormValues(res?.data?.data);
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
    try {
        dispatch(showLoading());
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctor/update-profile`,{
            ...getFormValues(),
          },
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

  useEffect(() => {
    getDoctorProfile();
  }, []);

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            mt: "21px",
            mb: "0px",
            fontWeight: 700,
            fontSize: { xs: "20px", sm: "24px" },
            textAlign: "left",
            letterSpacing: "0.2px",
            textTransform: "capitalize",
          }}
        >
          Doctor Profile Information
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            mt: "7px",
            ml: "2px",
            color: "#000",
            textAlign: "left",
            mb: "20px",
            fontWeight: "600",
            fontSize: { xs: "14px", sm: "14px" },
            letterSpacing: "0.2px",
          }}
        >
          Edit your Information
        </Typography>
        <IconButton
          sx={{ marginTop: "-12px" }}
          style={{ color: disabled ? "#ccc" : "#000"}}
          onClick={() => {
            setDisabled(!disabled);
          }}
        >
          <EditIcon />
        </IconButton>
      </Box>
      <Box
        sx={{ maxWidth: "800px !important", width: "100%", marginTop: "10px" }}
      >
        <Form
          fieldsData={fieldsData}
          submitHandler={submitHandler}
          actions={[
            {
              title: "Update Profile",
              type: "submit",
              disabled: disabled,
              maxWidth: "100%",
              style: { marginTop: "20px" },
              gridStyle: { xs: 12 },
            },
          ]}
          {...others}
        />
      </Box>
    </Box>
  );
};

export default withAuth(DoctorProfile, ['doctor']);
