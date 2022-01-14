import React from 'react'

export const Footer = () => {
    return (
        <div>
            <section class="about">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <p>Why Choose Us?</p>
        </div>

        <div class="row content" data-aos="fade-up">
          <div class="col-lg-12 pt-4 pt-lg-0 d-flex justify-content-center flex-column">
            <p>
              We, at Apple Pharma deliver a complete package of quality, business values, technical expertise, documentation, punctuality
              and after sales service.

            </p>
            <br/>
          </div>
        </div>

      </div>
    </section>

    <section id="features" class="features">
      <div class="container">

        <ul class="nav nav-tabs row d-flex flex-wrap text-center ">

          <li class="nav-item col-md-4  col-xs-12 " data-aos="zoom-in">
            <button class="nav-link extra-1 mobile-mr">
            <img src="https://img.icons8.com/cotton/40/000000/fast-shipping--v2.png" alt='error'/>
              <h4 class=" d-lg-block" style={{width:100}}>On-time delivery. </h4>
            </button>
          </li>
          <li class="nav-item col-md-4 col-xs-12" data-aos="zoom-in" data-aos-delay="100">
            <button class="nav-link extra-pd  mobile-mr">
              <i class="ri-body-scan-line"></i>
              <h4 class=" d-lg-block" style={{width:100} }>One-point contact experience.</h4>
            </button>
          </li>


          <li class="nav-item col-md-4 col-xs-12" data-aos="zoom-in" data-aos-delay="200">
            <button  class="nav-link">
              <i class="ri-sun-line"></i>
              <h4 class=" d-lg-block"  style={{width:100}}>Professional documentation and smooth process.</h4>
            </button>
          </li>


        </ul>
      </div>

      <div class="container mt-5">

        <ul class="nav nav-tabs row d-flex flex-wrap text-center ">

          <li class="nav-item col-md-4 col-xs-12 " data-aos="zoom-in" data-aos-delay="300">
            <button  class="nav-link extra-3 mobile-mr">
            <img src="https://img.icons8.com/windows/40/000000/user-clock.png"  alt='error'/>
              <h4 class=" d-lg-block" style={{width:100} }>We provide service 24 x 7 and 365 days.</h4>
            </button>
          </li>

          <li class="nav-item col-md-4 col-xs-12 " data-aos="zoom-in" data-aos-delay="200">
            <button class="nav-link mobile-mr"style={{padding: '19px'}}>
            <img src="https://img.icons8.com/ios-glyphs/40/000000/group.png"  alt='error'/>
              <h4 class=" d-lg-block"  style={{width:100}}>Customer Centric Approach.</h4>
            </button>
          </li>


          <li class="nav-item col-md-4 col-xs-12 " data-aos="zoom-in" data-aos-delay="200">
            <button class="nav-link " style={{padding: '19px'}}>
            <img src="https://img.icons8.com/pastel-glyph/40/000000/line-chart--v1.png" alt='error'/>
              <h4 class=" d-lg-block"  style={{width:100}}>Qualities at par.</h4>
            </button>
          </li>

        </ul>


      </div>

    </section>

    <section id="testimonials" class="testimonials">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <p>Our Products</p>
        </div>

        <div class="owl-carousel testimonials-carousel" data-aos="fade-up">

          <div class="testimonial-item">
            <a href="api.php"><img src="assets/img/api-img.jpg" class="testimonial-img" alt="error"/>
              <h3>API</h3>
            </a>
          </div>

          <div class="testimonial-item">
            <a href="excipients.php"><img src="assets/img/exp-img.jpg" class="testimonial-img"alt="error"/>
              <h3>Excipients</h3>
            </a>
          </div>

          <div class="testimonial-item">
            <a href="Vitamins.php"><img src="assets/img/vitamins-img.jpg" class="testimonial-img"alt="error"/>
              <h3>Vitamins</h3>
            </a>
          </div>

          <div class="testimonial-item">
            <a href="Chemical.php"><img src="assets/img/chem-img.jpg" class="testimonial-img"alt="error"/>
              <h3>Chemical</h3>
            </a>
          </div>

          <div class="testimonial-item">
            <a href="Solvents.php"><img src="assets/img/solvents-img.jpg" class="testimonial-img" alt="error"/>
              <h3>Solvents</h3>
            </a>
          </div>

        </div>

      </div>
    </section>
    <section id="about" class="about">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>About</h2>
          <p>About Us?</p>
        </div>

        <div class="row content" data-aos="fade-up">
          <div class="col-lg-12 pt-4 pt-lg-0 d-flex justify-content-center flex-column">
            <p>
              Apple Pharma is the supplier of chemical intermediates and specialty chemicals
              catering into variety of industries like Pharma & Nutraceuticals, Food & Beverages,
              Personal Care and others. Apple Pharma prides itself in serving efficiently The
              Indian Pharma and other industries for more than two and a half decades.
            </p>
            <a href="about us.php" class="btn-learn-more">Read More</a>
          </div>
        </div>

      </div>
  
    </section>


 
        </div>
    )
}
