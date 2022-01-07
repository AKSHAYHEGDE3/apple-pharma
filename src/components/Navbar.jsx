import React from 'react'
import img1 from "../assets/img/mobile-logo.png"

const Navbar = () => {
    return (
        <div>
            <header id="header" className="fixed-top d-flex  header-transparent ">
                <div className="row mx-auto ">
                    <div className="col-md-12 mobile-visibility1">
                        <div className="container-fluid">
                            <div className="nav-icon2" id="secondary-nav">
                                <div className="nation-flags">
                                    <a href="../index.php"> <img src="https://img.icons8.com/color/24/000000/great-britain.png" alt="..." /> </a>
                                    <a href="../it/index.php"> <img src="https://img.icons8.com/color/24/000000/italy.png" alt="..." /> </a>
                                    <a href="../es/index.php"> <img src="https://img.icons8.com/color/24/000000/spain-2.png" alt="..." /></a>
                                    <a href="index.php"> <img src="https://img.icons8.com/color/24/000000/france.png" alt="..." /> </a>
                                    <a href="../de/index.php"> <img src="https://img.icons8.com/color/24/000000/germany.png" alt="..." /></a>
                                </div>
                                <div className="inner-sec-head">
                                    <div className="nav-left">
                                        <i className='icofont-phone'></i>
                                        <p>+91 9322440515</p>
                                    </div>
                                    <div className="nav-right">
                                        <i className='icofont-envelope'></i>
                                        <p>sales@applepharmagroup.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-12" style={{ width: "100vw" }}>
                        <div className="container-fluid d-flex justify-content-between">
                            <div className="logo mr-auto" >
                                <h1 className="text-light"><a href="index.php"><img src={img1} alt="Apple Pharma" className="logo-visibility" /></a></h1>
                            </div>

                            <nav className="nav-menu d-none d-lg-block" id="navbar1" >
                                <ul>
                                    <li className="active"><a href="index.php">Home</a></li>
                                    <li><a href="products.php">Products</a></li>
                                    <li><a href="about us.php">About Us</a></li>
                                    <li><a href="Contactus.php">Contact Us</a></li>
                                   
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Navbar
