import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Form, Dialog } from "../../genericComponents";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from 'next/router'

const AccountManagement = (props) => {
  const { user } = useSelector((state) => state.user);
  const { getFormValues, setFormValues, ...others } = useForm();
  const [toggleModal, setToggleModal] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");
  const [dialogActions, setDialogActions] = useState([]);
  const [email, setEmail] = useState("")
  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = async () => {
    console.log("form Values profile", email);
    setToggleModal(false)
    if(email === ""){
      toast.error("Please enter your email", {
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
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/deactivate-account`,
        {
          email: email,
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
        toast.success("Your account has been de-activated", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.removeItem("token");
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
    }}
  };

  const deleteSubmitHandler = async () => {
    console.log("form Values profile", email);
    setToggleModal(false)
    if(email === ""){
      toast.error("Please enter your email", {
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
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/delete-account`,
        {
          email: email,
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
        toast.success("Your account has been deleted Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.removeItem("token");
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
    }}
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const deactivateHandler = () => {
    setToggleModal((prev) => !prev)
    setDialogTitle("Warning");
    setDialogDescription("Are you sure to Deactivate your account?");
    setDialogActions([
      {
        title: "No",
        onClick: () => setToggleModal(false),
      },
      {
        title: "Yes",
        onClick: submitHandler,
      }
    ]);
  };

  const deleteHandler = () => {
    setToggleModal((prev) => !prev)
    setDialogTitle("Warning");
    setDialogDescription("Are you sure to Delete your account?");
    setDialogActions([
      {
        title: "No",
        onClick: () => setToggleModal(false),
      },
      {
        title: "Yes",
        onClick: deleteSubmitHandler,
      }
    ]);
  };


  var fieldsData = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: `${user?.user?.email}`,
      value: `${user?.user?.email}`,
      required: true,
      className: "input",
      disabled: true,
      gridStyle: { xs: 12 },
    },
  ];

  useEffect(() => {
    setEmail(user?.user?.email)
  }, [])

  return (
    <>
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
              <h2 className="tabheader-title">Account Management</h2>
            </div>
          </div>
          <div className="profiletab_form mt-5">
            <Form
              fieldsData={fieldsData}
              submitHandler={submitHandler}
              formType="account"
              // actions={[
              //   {
              //     title: "Save",
              //     type: "submit",
              //     maxWidth: "100%",
              //     style: {
              //       display: "flex",
              //       justifyContent: "flex-start",
              //       margin: "20px auto",
              //       background:
              //         "linear-gradient(265.63deg, #0077B6 -16.55%, #51CB20 114.1%)",
              //     },
              //   },
              // ]}
              {...others}
            />
          </div>
          <div className="profiletab_content">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="profiletab_content-p">Deactivate account</p>
                <p className="profiletab_content-span">
                  Hide your Pins and profile
                </p>
              </div>
              <div>
                <button
                  className="transparent-btn transparent-btn--red"
                  data-bs-target="#exampleModal"
                  onClick={deactivateHandler}
                >
                  Deactivate
                </button>
              </div>
            </div>
          </div>
          <div className="profiletab_content">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="profiletab_content-p">
                  Delete your data and account
                </p>
                <p className="profiletab_content-span">
                  Delete your account and account data
                </p>
              </div>
              <div>
                <button className="transparent-btn transparent-btn--red" onClick={deleteHandler}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Toggle Button */}
        {/* <button
          onClick={() => }
          className="bg-red-9 px-20px py-10px rounded-10px hover:bg-red-7"
        >
          Toggle Modal
        </button> */}

        <Dialog
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          title={dialogTitle}
          description={dialogDescription}
          actions={dialogActions}
        />
      </div>
    </>
  );
};

export default AccountManagement;
