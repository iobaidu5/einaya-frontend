import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Form, Dialog } from "../../genericComponents";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import { QRCodeCanvas } from "qrcode.react";

const MyCards = (props) => {
  const { user } = useSelector((state) => state.user);
  const { getFormValues, setFormValues, ...others } = useForm();
  const [cardData, setCardData] = useState([]);
  const dispatch = useDispatch();

  const getInsuranceDetails = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-insurance`,
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
        setCardData(res.data.data);
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
   getInsuranceDetails();
  }, []);

  console.log("card data ", cardData);

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
              <h2 className="tabheader-title">My Cards</h2>
            </div>
          </div>
          <div className="profiletab_card">
            {cardData.length == 0 ? (
              <div className="d-flex justify-content-center align-items-center my-auto mx-auto pt-5 mt-5">
                <p className="profiletab_content-p mx-auto text-center">
                  No Card Found!
                </p>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <section className="card">
                    <div className="card_content">
                      <div className="card_content-logo">
                        <img
                          className="card_content-logo--img"
                          src="./assets/images/logo.png"
                          alt="logo"
                        />
                      </div>
                      <div className="card_content-data">
                        <h1 className="card_content-data--name">
                          {cardData?.firstname} {cardData?.lastname}
                        </h1>
                      </div>
                      <div className="card_content-details">
                        <div className="row">
                          <div className="col-md-6">
                            <span className="card_content-details--p">
                              Card #:{" "}
                            </span>
                            <span className="card_content-details--p2">
                              {cardData?.idNumber}
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="card_content-details--p">
                              Issue Data:{" "}
                            </span>
                            <span className="card_content-details--p2">
                              {moment(cardData?.createdAt).format("YYYY-MM-DD")}
                            </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <span className="card_content-details--p">
                              DOB:{" "}
                            </span>
                            <span className="card_content-details--p2">
                              {cardData?.dateOfBirth}
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="card_content-details--p">
                              Catagory:{" "}
                            </span>
                            <span className="card_content-details--p2">
                              {cardData?.plan}
                            </span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <span className="card_content-details--p">
                              Policy :{" "}
                            </span>
                            <span className="card_content-details--p2">
                              {cardData?.plan}
                            </span>
                          </div>
                          <div className="col-md-6">
                            <span className="card_content-details--p">
                              Valid until:{" "}
                            </span>
                            <span className="card_content-details--p2">
                              {moment(cardData?.expiresAt).format("YYYY-MM-DD")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-md-1">
                  <div className="card_line"></div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="tabheader">
                    <div className="d-flex align-items-center">
                      <h2 className="tabheader-title">QR Code</h2>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#e5f6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <QRCodeCanvas
                          value={cardData?.cardLink}
                          size={200}
                          bgColor={"white"}
                          level={"H"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCards;
