import React from 'react'
import footerImg from "../assets/img/indiamart.png"

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className='container bottom_border'>
                    <div className='row'>
                        <div className=' col-sm-4 col-md col-sm-4  col-12 col'>
                            <h5 className='headin5_amrc col_white_amrc pt2'>Find Us</h5>
                           
                            <p className='mb10'><i className='fa fa-location-arrow'></i>&nbsp; Apple Pharma Shop</p>
                            <p><i className='fa fa-phone'></i>&nbsp; No.2 & 3,Kasturi Sadan </p>
                            <p><i className='fa fa-phone'></i>&nbsp;New Deewanman, Vasai  </p>
                            <p><i className='fa fa fa-envelope'></i>&nbsp;(W) Palghar 401202  </p>
                            <p><i className=''></i>&nbsp;  +91 9820053645  </p>
                            <p><i className=''></i>&nbsp;  +91 9322440515  </p>
                            <p><i className=''></i>&nbsp;  sales@applepharmagroup.com  </p>


                        </div>
                        <div className=' col-sm-4 col-md  col-6 col'>
                            <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>
                          
                            <ul className='footer_ul_amrc'>
                                <li><a href='api.php'>API</a></li>
                                <li><a href='excipients.php'>Excipients</a></li>
                                <li><a href='Vitamins.php'>Vitamins</a></li>
                                <li><a href='Chemical.php'>Chemicals</a></li>
                                <li><a href='Solvents.php'>Solvents</a></li>
                            </ul>
                         
                        </div>

                        <div className=' col-sm-4 col-md  col-6 col'>
                            <h5 className='headin5_amrc col_white_amrc pt2'>Pages</h5>
                           
                            <ul className='footer_ul_amrc'>
                                <li><a href='index.php'>Home</a></li>
                                <li><a href='about us.php'>Contact Us</a></li>
                                <li><a href='Contactus.php'>About Us</a></li>
                            </ul>
                          
                        </div>


                        <div className=' col-sm-4 col-md  col-12 col'>
                            <h5 className='headin5_amrc col_white_amrc pt2' style={{marginBottom: '-40px'}}>follow us</h5>
                            <ul>


                                <li style={{position: "relative",left: "55px",top: "10px"}}><a href='#'>
                                    <img src={footerImg} style={{width: "40px"}} />
                                </a></li>


                            </ul>
    
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <ul className='foote_bottom_ul_amrc mobile-visibility2'>
                        <p><q>For all the material supplied, COA will be provided.

</q></p>
                    </ul>
                  
                    <p className='text-center'>Copyright @2021 Apple Pharma | Designed With by Innovatiive Creators</p>


                </div>

            </footer>

        </div>
    )
}

export default Footer
