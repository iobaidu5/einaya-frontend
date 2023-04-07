import React, { useEffect } from "react"

const InsurersPartners = () => {

  useEffect(() => {
    var nav = document.getElementById("navbarNav");
    var nav2 = document.getElementById("nav-2");
    var btn = document.getElementById("navbarBtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
    nav2.classList.remove("active")
  }, [])

  return (
    <>
          <div className="page-banner-area">
        <div className="container">
          <div className="single-page-banner-content">
            <h1>Insurers & Partners</h1>
            <p className="banner-para">We’ve been a trusted third party administrator of insurers for over 20 years, offering ready to use healthcare insurance management solutions.</p>
          </div>
        </div>
      </div>
      <div className="services-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-services-details-content">
                <div className="services-details-img">
                  <img
                    src="./assets/images/services/services-details-img-1.webp"
                    alt="services-details"
                  />
                </div>
                <h2 className="services-text">Work with us</h2>
                <p className="para">
                We"ve been a trusted partner for over 2 decades, offering our partners and clients a relationship based on transparency and trust, and helping coordinate between healthcare services as per policy benefits provision.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <ul className="blog-details-list">
                      <li>
                        <img
                          src="./assets/images/services/services-check.svg"
                          alt="blog-check"
                        />
                        The process is completely online.
                      </li>
                      <li>
                        <img
                          src="./assets/images/services/services-check.svg"
                          alt="blog-check"
                        />
                        Get quotes from top insurers instantly.
                      </li>
                      <li>
                        <img
                          src="./assets/images/services/services-check.svg"
                          alt="blog-check"
                        />
                        Unbiased advice. Exceptional Experience.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <ul className="blog-details-list">
                      <li>
                        <img
                          src="./assets/images/services/services-check.svg"
                          alt="blog-check"
                        />
                        Get quotes from top insurers instantly.
                      </li>
                      <li>
                        <img
                          src="./assets/images/services/services-check.svg"
                          alt="blog-check"
                        />
                        Unbiased advice. Exceptional Experience.
                      </li>
                      <li>
                        <img
                          src="./assets/images/services/services-check.svg"
                          alt="blog-check"
                        />
                        The process is completely online.
                      </li>
                    </ul>
                  </div>
                </div>
                <h3>Our Story</h3>
                <p>
                “Together we go on an inseparable journey of nurturing health and care.”
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="services-details-img2">
                      <img
                        src="./assets/images/services/services-details-img-2.webp"
                        alt="services-details"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-md-6">
                    <div className="services-details-img2">
                      <img
                        src="./assets/images/services/services-details-img-3.webp"
                        alt="services-details"
                      />
                    </div>
                  </div>
                </div>
                <h4>We Help To Get Solutions</h4>
                <div className="faqs-content">
                  <div className="faqs-item">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            01. Supporting your healthcare needs!
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                            As an established third party administrator we have developed a wide range of solutions to work with multiple insurers partners to find the perfect solution for clients. We invest in technology and claims management platforms to bring peace of mind and make life easier to our valued partners, clients and insured members.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                          02. Supporting your healthcare needs!
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Luptatem accusantium doloremque laudantium totam
                              rem aperiam, eaque ipsa quae ab illo inventtatis
                              et quasi architecto beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quia
                              voluptas sit aspernatur aut odit aut fugit sed
                              quia consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                           03. Supporting your healthcare needs!
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Luptatem accusantium doloremque laudantium totam
                              rem aperiam, eaque ipsa quae ab illo inventtatis
                              et quasi architecto beatae vitae dicta sunt
                              explicabo. Nemo enim ipsam voluptatem quia
                              voluptas sit aspernatur aut odit aut fugit sed
                              quia consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <h2>Our Services</h2>
                <ul>
                  <li>
                    <a href="categories.html">
                      Car Insurance <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="categories.html">
                      Home Insurance <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="categories.html">
                      Health Insurance <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="download-app">
                <h2>Download</h2>
                <button type="button" className="default-btn">
                  <img src="./assets/images/services/pdf-icon.svg" alt="pdf" />{" "}
                  Download Brochure
                </button>
                <button type="button" className="default-btn">
                  <img src="./assets/images/services/doc-icon.svg" alt="doc" />{" "}
                  Company Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="section-title left-title">
                <span className="top-title">Sign Up For Email</span>
                <h2>Signup Our Newsletter</h2>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
                        <div className="subscribe-from subscribe-from-style-2"> 
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" className="form-control" placeholder="Your Email" name="EMAIL" required autoComplete="off" />
                    
                                <button className="default-btn btn-style-2" type="submit">
                                Get Started 
                                </button>
                    
                                <div id="validator-newsletter" className="form-result"></div>
                            </form> 
                            <div className="subscribe-shape">
                                <img src="./assets/images/subscribe-2-shape-1.webp" alt="subscribe1" />
                            </div>
                            <div className="subscribe-shape13">
                                <img src="./assets/images/subscribe-2-shape-2.webp" alt="subscribe1" />
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InsurersPartners