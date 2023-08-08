import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Form, Dialog } from "../../genericComponents";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";

const Notifications = (props) => {
  const [notification, setNotifications] = useState([])
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //
  const markAllNotificationsHandler = async () => {

    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-notifications`,
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
        toast.success("All Notifications marked as read", {
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

  useEffect(() => {
    setNotifications(user.user.notification);
  }, [])

  return (
    <>
      <div
        className="section__Jobs-styledContent no-left-padding"
        style={
          props.activeTabId === props.index
            ? { display: "block" }
            : { display: "none" }
        }
      >
        <div className="profiletab">
          <div className="tabheader">
            <div className="d-flex align-items-center">
              <h2 className="tabheader-title">Notifications</h2>
            </div>
          </div>
          <div className="profiletab_requests">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <h3 className="profiletab_requests-title">Notification Type</h3>
                <hr />
              </div>
              <div className="col-md-4 col-sm-6">
                <h3 className="profiletab_requests-title">Message</h3>
                <hr />
              </div>
              <div className="col-md-4 col-sm-6">
                <h3 className="profiletab_requests-title">Status</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              {user?.user?.notification.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center my-auto mx-auto pt-5 mt-5">
                  <p className="profiletab_content-p mx-auto text-center">
                    No New Notificaiton
                  </p>
                </div>
              ) : (
                
                notification?.map((n) => {
                  return (
                    <>
                      <div className="col-md-4 col-sm-6">
                        <p className="profiletab_requests-p">{n?.type}</p>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <p className="profiletab_requests-p">{n?.message}</p>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <p className="profiletab_requests-p-green">New</p>
                      </div>
                    </>
                  );
                })
              )}
            </div>
            <div>
              {user?.user?.notification.length > 0 && (
                  <button onClick={markAllNotificationsHandler} className="default-btn btn-style-2 text-white mt-5">
                    Mark all as read
                  </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;


