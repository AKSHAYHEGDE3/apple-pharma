import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <section id='contact' className='contact'>
                <div className='container'>

                    <div className='section-title' data-aos='zoom-out'>
                        <h2>Contacter</h2>
                        <p>Nous contacter</p>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-lg-4' data-aos='fade-right'>

                            <div className='google-map'>
                                <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15055.00947426085!2d72.8231933!3d19.3798722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x926b141d89a4e962!2sApple%20Pharma!5e0!3m2!1sen!2sin!4v1618926711368!5m2!1sen!2sin' width='100%' height='100%' style={{border:'0'}} allowfullscreen='' loading='lazy'></iframe>
                            </div>
                        </div>
                        <div className='col-lg-8 mt-5 mt-lg-0' data-aos='fade-left'>

                            <form action='' method='post' role='form'>
                                <div className='form-row'>
                                    <div className='col-md-6 form-group'>
                                        <input type='text' name='name' className='form-control' id='name' placeholder='votre nom' />
                                        <div className='validate'></div>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <input type='email' className='form-control' name='email' id='email' placeholder='Your Email' data-rule='email' data-msg='Please enter a valid email' />
                                        <div className='validate'></div>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='col-md-12 form-group'>
                                        <input type='text' className='form-control' name='phone' id='phone' placeholder='Numéro de téléphone' />
                                        <div className='validate'></div>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='col-md-6 form-group'>
                                        <input type='text' className='form-control' name='companyName' id='companyName' placeholder='Nom de la compagnie' data-rule='required' data-msg='Please enter the company name' />
                                        <div className='validate'></div>
                                    </div>
                                    <div className='col-md-6 form-group'>
                                        <input type='text' className='form-control' name='subject' id='subject' placeholder='Matière' />
                                        <div className='validate'></div>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='col-md-12 form-group'>
                                        <textarea className=' form-control' name='message' rows='5' placeholder='Un message'></textarea>
                                        <div className='validate'></div>
                                    </div>
                                </div>

                                <div className='text-center'><button name='submit' type='submit'>Envoyer le message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default ContactUs
