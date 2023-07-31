import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Form, Dialog } from "../../genericComponents";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import Link from "next/link";

const MyRequests = (props) => {
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getInsuranceStatus = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-insurance-requests`,
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
        // toast.success("Insurance found", {
        //   position: "top-right",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        setData(res.data.data);
      } else {
        dispatch(hideLoading());
        // toast.error(res?.data?.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      }
    } catch (e) {
      dispatch(hideLoading());
      // toast.error("Something went wrong!", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  };

  useEffect(() => {
    getInsuranceStatus();
  }, []);

  console.log("card data ", data);
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
              <h2 className="tabheader-title">My Requests</h2>
            </div>
          </div>
          <div className="profiletab_requests">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <h3 className="profiletab_requests-title">Request Type</h3>
                <hr />
                <p className="profiletab_requests-p">
                  {data?.insuranceType || "New Insurance"}
                </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <h3 className="profiletab_requests-title">Date</h3>
                <hr />
                <p className="profiletab_requests-p">
                  {moment(data?.createdAt).format("YYYY/MM/DD")}
                </p>
              </div>
              <div className="col-md-4 col-sm-6">
                <h3 className="profiletab_requests-title">Status</h3>
                <hr />
                <p
                  className={
                    data?.status == "pending"
                      ? "profiletab_requests-p-blue"
                      : data?.status == "done"
                      ? "profiletab_requests-p-green"
                      : "profiletab_requests-p-red"
                  }
                >
                  {data?.status}
                </p>
              </div>
            </div>
            <Link href="/">
              <span className="default-btn btn-style-2 text-white mt-5">
                Make New Insurance
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRequests;
