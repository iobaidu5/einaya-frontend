import React, { useState, useEffect } from "react";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { setToggleModal } from "../../redux/features/modalSlice";

const Offers = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const router = useRouter();

  const getAllPlans = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/plan/get-all-plans`,
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
        setData(res.data.data);
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
    getAllPlans();
  }, []);

  const handleInsuranceRequest = (plan, index) => {
    router.push({
      pathname: "/insurance-request",
      query: {
        plan: plan,
        index,
      },
    },
    "/insurance-request",
    );
    dispatch(setToggleModal(false));
  };

  return (
    <>
      <div className="offers" id="offers">
        <div className="container">
          <div className="section-title left-title d-flex flex-column align-items-center">
            <p className="top-title text-center">Our Subscriptions</p>
            <h2>Take advantage of the best offers and services</h2>
          </div>
          <div className="offers_cards">
            <div className="row">
              {data.map((plan, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <div
                      className={index == 1 ? "offers_card2" : "offers_card"}
                    >
                      <div className="offers_card-content">
                        <h2
                          className={
                            index == 1
                              ? "offers_card-content--title2"
                              : "offers_card-content--title"
                          }
                        >
                          {plan?.name}
                        </h2>
                        <p
                          className={
                            index == 1
                              ? "offers_card-content--p2"
                              : "offers_card-content--p"
                          }
                        >
                          {plan?.description}
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between py-2">
                          <p
                            className={
                              index == 1
                                ? "offers_card-content--persons2"
                                : "offers_card-content--persons"
                            }
                          >
                            {plan?.features}
                          </p>
                          <p
                            className={
                              index == 1
                                ? "offers_card-content--price2"
                                : "offers_card-content--price"
                            }
                          >
                            AED {plan?.price}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            handleInsuranceRequest(plan?.name, index)
                          }
                          className={
                            index === 1
                              ? "default-btn btn-style-2 text-white offers_card-content--btn2"
                              : "default-btn btn-style-2 text-white offers_card-content--btn"
                          }
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
