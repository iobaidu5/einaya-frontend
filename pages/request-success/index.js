import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { withAuth } from '../../customHooks/withAuth';

const InsuranceSuccess = () => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  const query = router.query;
  const dispatch = useDispatch();
  const userId = query?.userId;
  const plan = query?.plan;
  const price = query?.price;


  const handleBookingCheckout = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/booking/booking-checkout`,
        {
            userId: userId,
            plan: plan,
            price: price,
            status: "pending",
            paid: true
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
        toast.success("Payment Success, Please wait for Admin approval", {
          position: "top-right",
          autoClose: 3000,
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
    if (!userId || !plan || !price ) {
        dispatch(showLoading());
      } else {
        handleBookingCheckout();
      }
  }, [query])


  return (
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
                    Successfully Applied For Insurance
                  </h1>
                  <hr className="request_details-hr" />
                  <p className="request_success-p">
                    Your Insurance application has been successful, You will get
                    your card when its approve, Please check your notifications,<br />
                    <strong> Thank you!</strong>
                  </p>
                </div>
                <button
                  onClick={() => {
                    router.push("/home", undefined, { replace: true }),
                      window.history.replaceState(null, "", "/home");
                  }}
                  className="default-btn btn-style-2 text-white offers_card-content--btn3"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//export default InsuranceSuccess;
export default withAuth(InsuranceSuccess, ['user']);
