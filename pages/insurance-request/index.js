import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm, Form, Dialog } from "../../genericComponents";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import  ChangePlanModal  from "./change-plan";
import { setToggleModal } from "../../redux/features/modalSlice";
import { withAuth } from '../../customHooks/withAuth';

const InsuranceRequest = () => {
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState();
  const [beneficiary, setBeneficiary] = useState("me");
  const { getFormValues, setFormValues, ...others } = useForm();
  const router = useRouter();
  const query = router.query;
  const { toggleModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  var fieldsData = [
    {
      name: "beneficiary",
      label: "beneficiary",
      options: [
        {
          label: "Me",
          value: "me",
        },
        {
          label: "Others",
          value: "others",
        },
      ],
      type: "radio",
      required: true,
      defaultValue: beneficiary,
      className: "radio",
      gridStyle: { xs: 12 },
      onChange: (e) => {
        setBeneficiary(e.target.value);
      }
    },
    {
      name: "firstname",
      label: "",
      type: "text",
      placeholder: `First Name`,
      required: true,
      className: "input-2",
      gridStyle: { xs: 12 },
    },
    {
      name: "lastname",
      label: "",
      type: "text",
      placeholder: `Last Name`,
      required: true,
      className: "input-2",
      gridStyle: { xs: 12 },
    },
    {
      name: "email",
      label: "",
      type: "email",
      placeholder: `E-mail`,
      required: true,
      className: "input-2",
      gridStyle: { xs: 12 },
    },
    {
      name: "phone",
      label: "",
      type: "text",
      placeholder: `+971`,
      required: true,
      className: "input-2",
      gridStyle: { xs: 12 },
    },
    {
      name: "idNumber",
      label: "",
      type: "text",
      placeholder: `ID number`,
      required: true,
      className: "input-2",
      gridStyle: { xs: 12 },
    },
  ];

  const handleInsuranceRequest = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/plan/get-plan-by-name`,
        {
          name: query?.plan,
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

  const checkoutSessionHandler = async() => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/booking/checkout-session`,
        {
          userId: user?.user?.userId,
          plan: data?.name,
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
        return res.data.data?.url;
        // await setCheckoutURL(res.data.data?.url);
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

  const handleChangePlan = () => {
    dispatch(setToggleModal(true));
  };

 

  const submitHandler = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/insurance/apply-for-insurance`,
        {
          userId: user?.user?.userId,
          ...getFormValues(),
          beneficiary,
          plan: data?.name,
          price: data?.price,
          requestType: "insurance-request"
          
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
        toast.success("You Insurance Application has been Submitted, Please Pay your Charges", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const url = await checkoutSessionHandler();
        console.log("checking url -> ", url);
        router.push(url)
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
    if (!router.query.plan || !router.query.index) {
      router.push("/home#offers");
    }
    handleInsuranceRequest();
  }, [query]);



  return (
    <>
      <section className="request">
        <div className="container">
          <div className="request_content">
            <div className="row justify-content-between">
              <div className="col-md-5 col-sm-6">
                <div className="request_details">
                  <h1 className="login_form-content--title">
                    Selected Subscription
                  </h1>
                  <hr className="request_details-hr" />
                  <div className={"offers_card2 h-500"}>
                    <div className="offers_card-content">
                      <h2 className={"offers_card-content--title2"}>
                        {data?.name}
                      </h2>
                      <p className={"offers_card-content--p2"}>
                        {data?.description}
                      </p>
                      <hr />
                      <div className="d-flex justify-content-between py-2">
                        <p className={"offers_card-content--persons2"}>
                          {data?.features}
                        </p>
                        <p className={"offers_card-content--price2"}>
                          AED {data?.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleChangePlan}
                  className="default-btn btn-style-2 text-white offers_card-content--btn3"
                >
                  Change
                </button>
              </div>
              <div className="col-md-7 col-sm-6">
                <div className="request_details">
                  <h1 className="login_form-content--title">
                    Insurance request
                  </h1>
                  <hr className="request_details-hr" />
                  <div className="request_form mt-5">
                    <Form
                      fieldsData={fieldsData}
                      submitHandler={submitHandler}
                      formType="request"
                      actions={[
                        {
                          title: "Apply",
                          type: "submit",
                          maxWidth: "100%",
                          style: {
                            display: "flex",
                            justifyContent: "flex-start",
                            margin: "30px auto",
                            background:
                              "linear-gradient(265.63deg, #0077B6 -16.55%, #51CB20 114.1%)",
                          },
                        },
                      ]}
                      {...others}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <ChangePlanModal
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          // title={dialogTitle}
          // description={dialogDescription}
          // actions={dialogActions}
        />
      
    </>
  );
};

//export default InsuranceRequest;
export default withAuth(InsuranceRequest, ['user']);