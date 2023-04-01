import React, { useEffect } from 'react'
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Odometer from '../../components/Odometer';
import Team from '../../components/Team';
import Testimonials from '../../components/Testimonials';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const AboutUs = () => {

    useEffect(() => {
        const settings={
            fill: '#51CB20',
            background: 'transparent'
        }
        const sliders = document.querySelectorAll('.range-slider');
        Array.prototype.forEach.call(sliders,(slider)=>{
            slider.querySelector('input').addEventListener('input', (event)=>{
            slider.querySelector('span').innerHTML = event.target.value;
            applyFill(event.target);
            });
            applyFill(slider.querySelector('input'));
        });
        
        function applyFill(slider) {
            const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
            const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
            slider.style.background = bg;
        }
    }, [])
    
  return (
    <>
    <div className="page-banner-area-about">
            <div className="container">
                <div className="single-page-banner-content">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
        <div className="about-area pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="single-about-image">
                            <img src="./assets/images/about/about-1.webp" alt="about-1" />
                            {/* <div className="about-shape">
                                <img src="./assets/images/about/about-shape-2.svg" alt="about-shape" />
                            </div> */}
                            <div className="about-shape-1">
                                <img src="./assets/images/about/about-shape-2.svg" alt="about-shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-about-content">
                            <div className="section-title left-title">
                                <span className="top-title">About Our Company</span>
                                <h2>Insurance Always Ready To Protect Your Life & Business</h2>
                                <p>Dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                            </div>
                            <ul>
                                <li className="list-inline"><img src="./assets/images/about/about-icon.svg" alt="about-icon" /> Refresing to get such a personal touch.</li>
                                <li className="list-inline"><img src="./assets/images/about/about-icon.svg" alt="about-icon" />Duis aute irure dolor in reprehenderit in voluptate.</li>
                                <li className="list-inline"><img src="./assets/images/about/about-icon.svg" alt="about-icon" />Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <div className="about-btn about-page-btn d-flex align-items-center">
                                <div className="call-experts">
                                    <div className="phone-call">
                                        <img src="./assets/images/phone.svg" alt="phone-call" />
                                    </div>
                                    <span>Call To Our Experts</span>
                                    <a href="tel:(+0188)76898708">(+0188) 768 98708</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape3">
                <img src="./assets/images/about/about-shape-3.webp" alt="image" />
            </div>
        </div>
        <div className="services-area pt-100 pb-70">
            <div className="container">
                <div className="services-top-item d-flex align-items-end justify-content-between">
                    <div className="section-title left-title">
                        <span className="top-title">Our Services</span>
                        <h2>Einaya Best Insurance Services</h2>
                    </div>
                </div>
                <div className="row" data-cues="slideInUp">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-services-card d-flex align-items-center">
                            <div className="services-icon">
                                <img src="./assets/images/services/couple.svg" alt="couple" />
                            </div>
                            <h3><a href="services-details.html">Life Insurance</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-services-card d-flex align-items-center">
                            <div className="services-icon">
                                <img src="./assets/images/services/home.svg" alt="home" />
                            </div>
                            <h3><a href="services-details.html">Home Insurance</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-services-card d-flex align-items-center">
                            <div className="services-icon bg-icon-color">
                                <img src="./assets/images/services/lightbulb.svg" alt="lightbulb" />
                            </div>
                            <h3><a href="services-details.html">Business Insurance</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-services-card d-flex align-items-center">
                            <div className="services-icon bg-icon-color1">
                                <img src="./assets/images/services/heart.svg" alt="heart" />
                            </div>
                            <h3><a href="services-details.html">Health Insurance</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-services-card d-flex align-items-center">
                            <div className="services-icon bg-icon-color2">
                                <img src="./assets/images/services/car.svg" alt="car" />
                            </div>
                            <h3><a href="services-details.html">Car Insurance</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-services-card d-flex align-items-center">
                            <div className="services-icon bg-icon-color2">
                                <img src="./assets/images/services/services-icon-1.svg" alt="lightbulb" />
                            </div>
                            <h3><a href="services-details.html">Travel Insurance</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="free-quote-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="single-free-quote-form">
                            <div className="section-title left-title">
                                <span className="top-title">Free Quote</span>
                                <h2>Get An Insurance Quote To Get Started</h2>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Select Type Of Insurance" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="range-slider">
                                        <div className="d-flex justify-content-between">
                                            <p>Limits Of Balance:</p>
                                            <div className="dolor">
                                                <p>$ &nbsp;</p>
                                                <span className="range-slider__value"> 12000</span>
                                            </div>
                                        </div>
                                        <input className="range-slider__range" type="range" value="6000" min="0" max="12000" />
                                    </div>
                                </div>
                                <button type="submit" className="default-btn btn-padding bg-primary-light">Get A Quote Now</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="free-quote-image">
                            <div className="free-quote-main">
                                <img src="./assets/images/free-quote-1.png" alt="free-quote" />
                            </div>
                            <div className="free-quote-shape">
                                <img src="./assets/images/free-quote-shape-1.webp" alt="shape3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="free-quote-shape1">
                <img src="./assets/images/free-quote-shape-2.webp" alt="shape3" />
            </div>
            <div className="free-quote-shape2">
                <img src="./assets/images/free-quote-shape-3.webp" alt="shape3" />
            </div>
        </div>
 
 <Odometer />


        <div className="recruitment-area page-recruitment pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="recruitment-img">
                            <img src="./assets/images/recruitment-2.webp" alt="recruitment1" />
                            <div className="recruitment-main1">
                                <img src="./assets/images/recruitment-1-1.webp" alt="recruitment1" />
                            </div>
                        </div>
                    </div>
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
                            <a href="contact.html" className="default-btn btn-padding bg-primary-light">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recruitment-shape">
                <img src="./assets/images/recruitment-3.webp" alt="recruitment2" />
            </div>
        </div>
        <Team />
        <div className="testimonials-area testimonials-two-area pt-100 pb-70">
            <div className="container">
                <div className="section-title left-title">
                    <span className="top-title">Testimonials</span>
                    <h2>What Our Customers Says</h2>
                </div>
                <div className="">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    items={2}
                    dots={false}
                    autoplay={true}
                  >
                    <div className="testimonials-item">
                        <div className="testimonials-client d-flex align-items-center">
                            <img src="./assets/images/testimonials/testimonials-img-3.svg" alt="testimonials" />
                            <div className="testimonials-text">
                                <h3>Frank Serbian</h3>
                                <p>Web Designer</p>
                            </div>
                        </div>
                        <div className="testimonials-card testimonials-card-three">
                            <div className="quote-icon">
                                <img src="./assets/images/testimonials/quote.svg" className="quote1" alt="quote" />
                                <div className="quote-icon-2">
                                    <img src="./assets/images/quote-two.svg" alt="quote" />
                                </div>
                            </div>
                            <p>Which is the same as saying through shrinking from toil and pain is
                            cases are perfectly simple and easy to distinguish in a free hour whenour power of choice is untrammelled and when nothing.</p>
                        </div>
                    </div>
                    <div className="testimonials-item">
                        <div className="testimonials-client d-flex align-items-center">
                            <img src="./assets/images/testimonials/testimonials-img-3.svg" alt="testimonials" />
                            <div className="testimonials-text">
                                <h3>Graham Cracker</h3>
                                <p>Founder</p>
                            </div>
                        </div>
                        <div className="testimonials-card testimonials-card-three">
                            <div className="quote-icon">
                                <img src="./assets/images/testimonials/quote.svg" className="quote1" alt="quote" />
                                <div className="quote-icon-2">
                                    <img src="./assets/images/quote-two.svg" alt="quote" />
                                </div>
                            </div>
                            <p>Which is the same as saying through shrinking from toil and pain is
                            cases are perfectly simple and easy to distinguish in a free hour whenour power of choice is untrammelled and when nothing.</p>
                        </div>
                    </div>
                    <div className="testimonials-item">
                        <div className="testimonials-client d-flex align-items-center">
                            <img src="./assets/images/testimonials/testimonials-img-2.svg" alt="testimonials" />
                            <div className="testimonials-text">
                                <h3>Ash Wednesday</h3>
                                <p>Web Developer</p>
                            </div>
                        </div>
                        <div className="testimonials-card testimonials-card-three">
                            <div className="quote-icon">
                                <img src="./assets/images/testimonials/quote.svg" className="quote1" alt="quote" />
                                <div className="quote-icon-2">
                                    <img src="./assets/images/quote-two.svg" alt="quote" />
                                </div>
                            </div>
                            <p>Which is the same as saying through shrinking from toil and pain is
                            cases are perfectly simple and easy to distinguish in a free hour whenour power of choice is untrammelled and when nothing.</p>
                        </div>
                    </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="testimonials-3-shape" data-cue="zoomIn" data-duration="2000">
                <img src="./assets/images/testimonials/testimonials-3-shape.webp" alt="testimonials" />
            </div>
        </div>
    </>
  )
}

export default AboutUs