import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "../assets/img/api-img.jpg"
import img2 from "../assets/img/exp-img.jpg"
import img3 from "../assets/img/vitamins-img.jpg"
import img4 from "../assets/img/chem-img.jpg"
import img5 from "../assets/img/solvents-img.jpg"


const options = {
    margin: 10,
    // responsiveClass: true,
    // nav: true,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
};


const ProductCar = () => {
    return (

        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-title" data-aos="zoom-out">
                    <p>Our Products</p>
                </div>
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                    <div className="item">
                        <div className="testimonial-item">
                            <a href="https://applepharmagroup.com/api.php"><img src={img1} className="testimonial-img" alt="" />
                                <h3>API</h3>
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial-item">
                            <a href="https://applepharmagroup.com/excipients.php"><img src={img2} className="testimonial-img" alt="" />
                                <h3>Excipients</h3>
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial-item">
                            <a href="https://applepharmagroup.com/Vitamins.php"><img src={img3} className="testimonial-img" alt="" />
                                <h3>Vitamins</h3>
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial-item">
                            <a href="https://applepharmagroup.com/Chemical.php"><img src={img4} className="testimonial-img" alt="" />
                                <h3>Chemical</h3>
                            </a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="testimonial-item">
                            <a href="https://applepharmagroup.com/Solvents.php"><img src={img5} className="testimonial-img" alt="" />
                                <h3>Solvents</h3>
                            </a>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </section>


    )
}

export default ProductCar
