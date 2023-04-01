import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="page-banner-area blog-page-are">
        <div className="container">
          <div className="single-page-banner-content">
            <h1>Error</h1>
          </div>
        </div>
      </div>
      <section className="error">
        <div className="container">
          <div className="error_content">
            <h1 className="error_content-title">
                <span className="color-secondary">4</span>
                <span className="color-primary-light">0</span>
                <span className="color-secondary">4</span>
            </h1>
            <p className="error_content-head">
              <strong>Error 404 : Page Not Found</strong>
            </p>
            <p className="error_content-p">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href="/" passHref>
              <span className="default-btn btn-style-2">
                Return To Home Page
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
