import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Form } from "../../genericComponents";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ProfileTab = (props) => {
  const { user } = useSelector((state) => state.user);
  const { getFormValues, setFormValues, ...others } = useForm();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [photo, setPhoto] = useState(user?.user?.image)

  const submitHandler = async () => {
    console.log("form Values profile", getFormValues());
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/update-profile`,
        {
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
        setDisabled(true)
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

  const handleFileSelected = async (e) => {
        console.log("file ", e.target.files)
        e.preventDefault();

        try {
            dispatch(showLoading());
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/upload-photo`,
              {
                image: e.target.files[0],
                userId: user?.user?.userId
              },
              {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  'Content-Type': 'multipart/form-data',
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            );
            dispatch(hideLoading());
            if (res.data.success) {
              toast.success("Profile Image Updated", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setDisabled(true)
              setPhoto(res?.data?.data)
              console.log("res-date photo", res.data)
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
  }

  var fieldsData = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: `${user?.user?.firstName}`,
      required: true,
      className: "input",
      gridStyle: { xs: 12 },
      disabled: disabled,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: `${user?.user?.lastName}`,
      required: true,
      className: "input",
      gridStyle: { xs: 12 },
      disabled: disabled,
    },
    {
      name: "aboutMe",
      label: "About",
      placeholder: `${user?.user?.aboutMe || "About Me"}`,
      type: "textarea",
      rows: 5,
      required: true,
      gridStyle: "col-md-12",
      style: { height: "100%" },
      disabled: disabled,
    },
  ];

  useEffect(() => {
    setFormValues(user?.user)
    setPhoto(user?.user?.image)
  }, [user])

  console.log("photooooo ", photo)


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
            <h2 className="tabheader-title">Profile</h2>
            <i className='bx bxs-edit tabheader-icon' style={{ color: disabled ? "#ccc" : "#000"}} onClick={disabledHandler}></i>
            </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="profiletab_image">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${photo}`}
              className="profiletab_image-img"
              alt="User"
            />
          </div>
          <div className="profiletab_button">
          <input className="profileInput" type="file" id="profile" name="profile"
                 accept="image/png, image/jpeg, image/jpg" onChange={handleFileSelected} />
            {/* <div
              className="default-btn btn-style-2 dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <span>Change Picture</span>
            </div> */}
          </div>
        </div>
        <div className="profiletab_form mt-5">
          <Form
            fieldsData={fieldsData}
            submitHandler={submitHandler}
            formType="signup"
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
                  background: disabled ? "#555" : "linear-gradient(265.63deg, #0077B6 -16.55%, #51CB20 114.1%)"
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

export default ProfileTab;
