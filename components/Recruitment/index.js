import Link from "next/link"
import React from "react"

const Recruitment = () => {
  return (
    <>
            <div className="recruitment-area pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="single-recruitment-content">
                            <div className="section-title left-title">
                                <span className="top-title">Recruitment</span>
                                <h2>Personnel Employment In Insurance Company</h2>
                                <p>Dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                            </div>
                            <ul>
                                <li className="list-inline">
                                    <img src="./assets/images/about/about-icon-2.svg" alt="about-icon" />
                                    Have Monthly Bonuses For Good Staff
                                </li>
                                <li className="list-inline">
                                    <img src="./assets/images/about/about-icon-2.svg" alt="about-icon" />
                                    Participate In The Personal development Courses
                                </li>
                                <li className="list-inline">
                                    <img src="./assets/images/about/about-icon-2.svg" alt="about-icon" />
                                    Have Complimentary Lunch Paid Holidays
                                </li>
                            </ul>
                            <Link href="/contact">
                            <span  className="default-btn btn-style-2">Contact Us</span>
                            </Link> 
                            
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="recruitment-img">
                            <img src="./assets/images/recruitment-2.webp" alt="recruitment1" />
                            <div className="recruitment-main1">
                                <img src="./assets/images/recruitment-1.webp" alt="recruitment1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recruitment-shape">
                <img src="./assets/images/recruitment-3.webp" alt="recruitment2" />
            </div>
        </div>
    </>
  )
}

export default Recruitment