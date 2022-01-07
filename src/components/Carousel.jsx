import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active " data-interval="1000" >
                        <div className="overlay-image" style={{backgroundImage: "url(https://innovatiivecreators.in/TestingLink/ApplePharma/cdn/1.jpg)"}}></div>
                        <div className="container container1">
                            <h1 className="animate__animated animate__fadeInDown">Welcome to Apple Pharma</h1>
                            <p className="animate__animated animate__fadeInUp">Celebrating 25 years of expertise , favorable result and commitment</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000">
                        <div className="overlay-image" style={{backgroundImage : "url(https://innovatiivecreators.in/TestingLink/ApplePharma/cdn/2.jpg)"}}></div>
                        <div className="container container1">
                            <p className="animate__animated animate__fadeInUp">Distributors and suppliers of API | EXCIPICENTS | CHEMICALS | SOLVENTS</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="5000">
                        <div className="overlay-image" style={{backgroundImage : "url(http://gccpl.com/images/slide01.jpg)"}}></div>
                        <div className="container container1">
                            <p className="animate__animated animate__fadeInUp">Avec nous, accédez aux meilleurs fabricants et fournisseurs d'ingrédients</p>
                        </div>
                    </div>
                </div>
                <a href="#myCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                   
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>

                <a href="#myCarousel" className="carousel-control-next" role="button" data-slide="next">
                    
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>

                <svg className="editorial"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28 "
                    preserveAspectRatio="none">
                    <defs>
                        <path id="gentle-wave"
                            d="M-160 44c30 0 
                               58-18 88-18s
                               58 18 88 18 
                               58-18 88-18 
                               58 18 88 18
                               v44h-352z" />
                    </defs>
                    <g className="parallax1">
                        <use xlinkHref="#gentle-wave" x="50" y="3" fill="rgba(255,255,255, .1)" />
                    </g>
                    <g className="parallax2">
                        <use xlinkHref="#gentle-wave" x="50" y="0" fill="rgba(255,255,255, .2)" />
                    </g>
                    <g className="parallax4">
                        <use xlinkHref="#gentle-wave" x="50" y="6" fill="#fff" />
                    </g>
                </svg>

            </div>

           
        </div>
    )
}

export default Carousel
