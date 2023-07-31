import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";


const UnAuthorized = () => {
  const router = useRouter();

  return (
    <>
      <section className="request">
        <div className="container">
          <div className="request_content2">
            <div className="row">
              <div className="col-md-12">
                <div className="request_success">
                  <img
                    src="./assets/images/cancel.png"
                    alt="success"
                    className="request_success-img"
                  />
                </div>
                <div className="request_details mt-4">
                  <h1 className="request_success-title text-center">
                    Un-Authorized Access
                  </h1>
                  <hr className="request_details-hr" />
                  <p className="request_success-p">
                    You dont have access to this router
                    <br />
                  </p>
                </div>
                <button
                  onClick={() => {
                    // router.push("/home", undefined, { replace: true }),
                    //   window.history.replaceState(null, "", "/home");
                   router.back();
                  }}
                  className="default-btn btn-style-2 text-white offers_card-content--btn3"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnAuthorized;
