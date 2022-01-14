import React from 'react'
import img1 from "../assets/img/api-img.jpg"
import img2 from "../assets/img/exp-img.jpg"
import img3 from "../assets/img/vitamins-img.jpg"
import img4 from "../assets/img/chem-img.jpg"
import img5 from "../assets/img/solvents-img.jpg"


const Products = () => {
    return (
        <div>
            <section id="testimonials" className="testimonials">
                <div className="container">

                    <div className="section-title" data-aos="zoom-out">
                        <p>Our Products</p>
                    </div>

                    <div className="owl-carousel testimonials-carousel" data-aos="fade-up">

                        <div className="testimonial-item">
                            <a href="api.php"><img src={img1} className="testimonial-img" alt="" />
                                <h3>API</h3>
                            </a>
                        </div>

                        <div className="testimonial-item">
                            <a href="excipients.php"><img src={img2} className="testimonial-img" alt="" />
                                <h3>Excipients</h3>
                            </a>
                        </div>

                        <div className="testimonial-item">
                            <a href="Vitamins.php"><img src={img3} className="testimonial-img" alt="" />
                                <h3>Vitamins</h3>
                            </a>
                        </div>

                        <div className="testimonial-item">
                            <a href="Chemical.php"><img src={img4} className="testimonial-img" alt="" />
                                <h3>Chemical</h3>
                            </a>
                        </div>

                        <div className="testimonial-item">
                            <a href="Solvents.php"><img src={img5} className="testimonial-img" alt="" />
                                <h3>Solvents</h3>
                            </a>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Products
