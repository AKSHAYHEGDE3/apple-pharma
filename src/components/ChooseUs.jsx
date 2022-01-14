import React from 'react'

const ChooseUs = () => {
    return (
        <div>
            <section className="about">
                <div className="container">

                    <div className="section-title" data-aos="zoom-out">
                        <p>Why Choose Us?</p>
                    </div>

                    <div className="row content" data-aos="fade-up">
                        <div className="col-lg-12 pt-4 pt-lg-0 d-flex justify-content-center flex-column">
                            <p>
                                We, at Apple Pharma deliver a complete package of quality, business values, technical expertise, documentation, punctuality
                                and after sales service.

                            </p>
                            <br />
                        </div>
                    </div>

                </div>
            </section>

            <section id="features" className="features">
                <div className="container">

                    <ul className="nav nav-tabs row d-flex flex-wrap text-center ">

                        <li className="nav-item col-md-4  col-xs-12 " data-aos="zoom-in">
                            <a className="nav-link extra-1 mobile-mr">
                                <img src="https://img.icons8.com/cotton/40/000000/fast-shipping--v2.png" />
                                <h4 className=" d-lg-block" style={{width:"100%"}}>On-time delivery. </h4>
                            </a>
                        </li>
                        <li className="nav-item col-md-4 col-xs-12" data-aos="zoom-in" data-aos-delay="100">
                            <a className="nav-link extra-pd  mobile-mr">
                                <i className="ri-body-scan-line"></i>
                                <h4 className=" d-lg-block" style={{width:"100%", marginLeft:"10px"}}>One-point contact experience.</h4>
                            </a>
                        </li>


                        <li className="nav-item col-md-4 col-xs-12" data-aos="zoom-in" data-aos-delay="200">
                            <a className="nav-link">
                                <i className="ri-sun-line"></i>
                                <h4 className=" d-lg-block" style={{width:"100%"}}>Professional documentation and smooth process.</h4>
                            </a>
                        </li>


                    </ul>
                </div>

                <div className="container mt-5">

                    <ul className="nav nav-tabs row d-flex flex-wrap text-center ">

                        <li className="nav-item col-md-4 col-xs-12 " data-aos="zoom-in" data-aos-delay="300">
                            <a className="nav-link extra-3 mobile-mr">
                                <img src="https://img.icons8.com/windows/40/000000/user-clock.png" />
                                <h4 className=" d-lg-block" style={{width:"100%", marginLeft:"10px"}}>We provide service 24 x 7 and 365 days.</h4>
                            </a>
                        </li>

                        <li className="nav-item col-md-4 col-xs-12 " data-aos="zoom-in" data-aos-delay="200">
                            <a className="nav-link mobile-mr" style={{padding: "19px"}}>
                                <img src="https://img.icons8.com/ios-glyphs/40/000000/group.png" />
                                <h4 className=" d-lg-block" style={{width:"100%"}}>Customer Centric Approach.</h4>
                            </a>
                        </li>


                        <li className="nav-item col-md-4 col-xs-12 " data-aos="zoom-in" data-aos-delay="200">
                            <a className="nav-link " style={{padding: "19px"}}>
                                <img src="https://img.icons8.com/pastel-glyph/40/000000/line-chart--v1.png" alt="..." />
                                <h4 className=" d-lg-block" style={{width:"100%"}}>Qualities at par.</h4>
                            </a>
                        </li>

                    </ul>


                </div>

            </section>

        </div>
    )
}

export default ChooseUs
