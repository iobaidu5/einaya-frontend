import React from 'react'

const Subscribe = () => {
  return (
    <>
            <div className="subscribe-two-area pt-100">
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
                                <input type="email" className="form-control" placeholder="Your Email" name="EMAIL" required autocomplete="off" />
                    
                                <button className="default-btn btn-style-2" type="submit">
                                    Subscribe 
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
            <div className="subscribe-shape-2">
                <img src="./assets/images/subscribe-2-shape-3.webp" alt="subscribe-2-shape-3" /> 
            </div>
        </div>
    </>
  )
}

export default Subscribe