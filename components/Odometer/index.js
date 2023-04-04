import React, { useEffect } from "react"
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const Odometer = () => {

    useEffect(() => {
        // $(".odometer").appear(function(e) {
        //     var odo = $(".odometer");
        //     odo.each(function() {
        //         var countNumber = $(this).attr("data-count");
        //         $(this).html(countNumber);
        //     });
        // }); 
    }, [])

  return (
    <>
           
        <div className="odometer-two-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-12 col-md-6">
                        <div className="odometer-two-content">
                            <h2>
                                <span className="odometer" data-count="89">89 </span>
                                <span className="target">+</span>  
                            </h2>
                            <p>Gave insurances</p>
                            <div className="odometer-shape">
                                <img src="assets/images/odometer/odometer-shape-1.webp" alt="odometer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6">
                        <div className="odometer-two-content">
                            <h2>
                                <span className="odometer" data-count="1120">1120 </span>
                                <span className="target">+</span>  
                            </h2>
                            <p>Experience Members</p>
                            <div className="odometer-shape">
                                <img src="assets/images/odometer/odometer-shape-2.webp" alt="odometer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6">
                        <div className="odometer-two-content">
                            <h2>
                                <span className="odometer" data-count="1.9">1.9 </span>
                                <span className="target">k+</span>  
                            </h2>
                            <p>Satisfied customers</p>
                            <div className="odometer-shape">
                                <img src="assets/images/odometer/odometer-shape-3.webp" alt="odometer" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-6">
                        <div className="odometer-two-content">
                            <h2>
                                <span className="odometer" data-count="50">50 </span>
                                <span className="target">+</span>  
                            </h2>
                            <p>Awards Win</p>
                            <div className="odometer-shape">
                                <img src="assets/images/odometer/odometer-shape-4.webp" alt="odometer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="odometer-shape-1">
                <img src="assets/images/odometer/odometer-shape-5.webp" alt="odometer" />
            </div>
            <div className="odometer-shape-2">
                <img src="assets/images/odometer/odometer-shape-6.webp" alt="odometer" />
            </div>
        </div></>
  )
}

export default Odometer