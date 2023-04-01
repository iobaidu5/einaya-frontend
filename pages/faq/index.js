import React, { useState } from 'react'
import { useForm, Form } from "../../genericComponents";
import Link from "next/link";

const FAQ = () => {
    const { getFormValues, setFormValues, ...others } = useForm();
    const [invalidFormat, setInvalidFormat] = useState(false);
  
    var fieldsData = [
        {
            name: "name",
            label: "Name",
            type: "text",
            placeholder: "Name",
            required: true,
            className: "input-white",
            gridStyle: "col-md-6",
          },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Your E-mail",
        required: true,
        className: "input-white",
        gridStyle: "col-md-6",
      },
      {
        name: "phone",
        label: "Phone",
        type: "text",
        placeholder: "Phone",
        required: true,
        className: "input-white",
        gridStyle: "col-md-6",
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "Subject",
        required: true,
        className: "input-white",
        gridStyle: "col-md-6",
      },
    ];
  
    const submitHandler = () => {
  
    };

    
  return (
    <>
     <div className="page-banner-area portfolio-page-area">
            <div className="container">
                <div className="single-page-banner-content">
                    <h1>FAQ's</h1>
                </div>
            </div>
        </div>
        <div className="faqs-area pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="faqs-img">
                            <img className='faq-img--img' src="assets/images/faq-img-1.webp" alt="faqs" />
                            <div className="faqs-img-2">
                                <img src="assets/images/faq-img-2.webp" alt="faqs" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faqs-content">
                            <div className="section-title left-title">
                                <span className="top-title">FAQ</span>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <div className="faqs-item">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                1. Why Should I Buy Standalone Own-Damage Car Insurance?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Luptatem accusantium doloremque laudantium, totam rem aper ab illo inventtatis  quasit architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt quia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                2. How To File An Own Damage Car Insurance Claim?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Luptatem accusantium doloremque laudantium, totam rem aper ab illo inventtatis  quasit architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt quia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                3. Does Own Damage Cover Include Personal Accident Cover?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Luptatem accusantium doloremque laudantium, totam rem aper ab illo inventtatis  quasit architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt quia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFore">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFore" aria-expanded="false" aria-controls="collapseFore">
                                                4. Why Do I Need A General Insurance Company?
                                            </button>
                                        </h2>
                                        <div id="collapseFore" className="accordion-collapse collapse" aria-labelledby="headingFore" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Luptatem accusantium doloremque laudantium, totam rem aper ab illo inventtatis  quasit architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt quia.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                5.  Who Is Eligible To Buy Standalone Own-Damage Car Insurance?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>Luptatem accusantium doloremque laudantium, totam rem aper ab illo inventtatis  quasit architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volupt quia.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="massage-area pt-100 pb-100">
            <div className="container">
                <div className="massage-item">
                    <div className="section-title">
                        <span className="top-title">Massage Us</span>
                        <h2>Do You Have Any Questions</h2>
                    </div>
                    <Form
                    fieldsData={fieldsData}
                    submitHandler={submitHandler}
                    formType="faq"
                    actions={[
                      {
                        title: "Submit Now",
                        type: "submit",
                        maxWidth: "100%",
                        style: {display: "flex", justifyContent: "center",  margin: "20px auto" },
                      },
                    ]}
                    {...others}
                  />
                </div>
            </div>
            <div className="faqs-shape-1">
                <img src="assets/images/faqs-shape-1.webp" alt="faqs" />
            </div>
            <div className="faqs-shape-2">
                <img src="assets/images/faqs-shape-2.webp" alt="faqs" />
            </div>
            <div className="faqs-shape-3">
                <img src="assets/images/faqs-shape-3.webp" alt="faqs" />
            </div>
        </div>
    </>
  )
}

export default FAQ