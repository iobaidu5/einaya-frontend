import React from 'react'

const Services = () => {
  return (
    <>
            <div className="services-two-area pt-100 pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="top-title">Our Services</span>
                    <h2>Our Best Insurance Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="services-img">
                            <img src="assets/images/services/1.svg" alt="services" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-services-two-content">
                            <div className="services-btn">
                                <a href="services-details.html" className="default-btn btn-style-secondary">View All</a>
                            </div>
                            <div className="services-card-two card1 d-flex align-items-center">
                                <div className="services-icon">
                                    <img src="assets/images/services/icon.svg" alt="icon1" />
                                </div>
                                <h3><a href="services-details.html">Home Insurance</a></h3>
                            </div>
                            <div className="services-card-two card2 d-flex align-items-center">
                                <div className="services-icon">
                                    <img src="assets/images/services/icon.svg" alt="icon1" />
                                </div>
                                <h3><a href="services-details.html">Car Insurance</a></h3>
                            </div>
                            <div className="services-card-two card3 d-flex align-items-center">
                                <div className="services-icon">
                                    <img src="assets/images/services/icon.svg" alt="icon1" />
                                </div>
                                <h3><a href="services-details.html">Health Insurance</a></h3>
                            </div>
                            <div className="services-card-two card4 d-flex align-items-center">
                                <div className="services-icon">
                                    <img src="assets/images/services/icon.svg" alt="icon1" />
                                </div>
                                <h3><a href="services-details.html">Travel Insurance</a></h3>
                            </div>
                            <div className="services-card-two card5 d-flex align-items-center">
                                <div className="services-icon">
                                    <img src="assets/images/services/icon.svg" alt="icon1" />
                                </div>
                                <h3><a href="services-details.html">Business Insurance</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
  )
}

export default Services