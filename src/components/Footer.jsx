import React from 'react'
import footerImg from "../assets/img/indiamart.png"

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className='container bottom_border'>
                    <div className='row'>
                        <div className=' col-sm-4 col-md col-sm-4  col-12 col'>
                            <h5 className='headin5_amrc col_white_amrc pt2'>Trouve nous</h5>
                           
                            <p className='mb10'><i className='fa fa-location-arrow'></i>&nbsp;" . $footeraddress . "</p>
                            <p><i className='fa fa-phone'></i>&nbsp; " . $firstnumber . "  </p>
                            <p><i className='fa fa-phone'></i>&nbsp;  " . $secondnumber . "  </p>
                            <p><i className='fa fa fa-envelope'></i>&nbsp; " . $footeremail . "  </p>


                        </div>
                        <div className=' col-sm-4 col-md  col-6 col'>
                            <h5 className='headin5_amrc col_white_amrc pt2'>Liens rapides</h5>
                          
                            <ul className='footer_ul_amrc'>
                                <li><a href='api.php'>API</a></li>
                                <li><a href='excipients.php'>Excipients</a></li>
                                <li><a href='Vitamins.php'>Les vitamines</a></li>
                                <li><a href='Chemical.php'>Produits chimiques</a></li>
                                <li><a href='Solvents.php'>Solvants</a></li>
                            </ul>
                         
                        </div>

                        <div className=' col-sm-4 col-md  col-6 col'>
                            <h5 className='headin5_amrc col_white_amrc pt2'>Des pages</h5>
                           
                            <ul className='footer_ul_amrc'>
                                <li><a href='index.php'>Domicile</a></li>
                                <li><a href='about us.php'>Contactez-nous</a></li>
                                <li><a href='Contactus.php'>À propos de nous</a></li>
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
                        <p><q>" . $quote . "</q></p>
                    </ul>
                  
                    <p className='text-center'>droits d'auteur @2021 Apple Pharma | Conçu avec par Innovatiive Creators</p>


                </div>

            </footer>

        </div>
    )
}

export default Footer
