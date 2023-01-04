import React from "react";
import './IndexCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select, Carousel } from 'react-bootstrap';

import Page1 from '../../Images/Logos/Photos/Page1.jpg'
import stake1 from '../../Images/Logos/stake1.jpg'
import Page2 from '../../Images/Logos/Photos/Page2.jpg'
import Page3 from '../../Images/Logos/Photos/Page3.jpg'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';


function mapStateToProps(state) {

    return {
        clt: state.Cliant.C,
        loginClient: state.Cliant.loginClient,
        loginB: state.Professional.loginB,
        B: state.Professional.B,

    }
}

export default connect(mapStateToProps)(function Index(props) {

    const { B, loginB, loginClient, clt, dispatch } = props;

    let navigate = useNavigate();

    function gotoMenu() {

        navigate('/Menu')
    }

    function gotoPA() {
        navigate('/PAComponent')


    }

    function gotoPPA() {
        navigate('/PPAComponent')


    }
    function ClaintLogin() {
        navigate('/Login')
    }

    function ProSignUp() {
        navigate('/ProfessionalSignUp')
    }
    function ProLogin() {
        navigate('/ProfessionalLogin')
    }

    function ClaintSignUp() {
        navigate('/SignUp')
    }
    return (
        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <div className="row col-xl-12 col-sm-10 col-xs-6 " >


                    <div className="openPart">
                        <div className="openLine">
                            <h2> עורכים אירוע?
                                <>
                                    <br></br>
                                </>
                                אנחנו כאן לעזור!
                            </h2>

                            <p style={{ fontSize: '20px', textAlign: 'right' }}>
                                לארגן אירוע זה סיפור לא פשוט...
                                <br></br>
                                כאן נעזור לכם לארגן קייטרינג בקלות ובמהירות!
                                <br></br>
                                תוכלו לבנות את התפריט המועדף עליכם,ולקבל עליו הצעות מחיר ישר לאזור האישי שלכם
                            </p>
                            <div style={{ display: 'flex' }}>
                                <Button className="btn jump"  onClick={ClaintLogin}>התחברות </Button>
                                <Button className=" jump"    onClick={ClaintSignUp} style={{ backgroundColor: 'white' }}>הרשמה</Button>

                            </div>
                        </div>
                        <div style={{ width: '40%' }}>
                            <img src={stake1} className="photo"></img>

                        </div>
                    </div>


                    <div className="openPart"  style={{flexDirection:'row'}}>
                    <div className="openLine">
                            <h2> יש לכם קייטרינג?
                                <>
                                    <br></br>
                                </>
                               
                            </h2>

                            <p style={{ fontSize: '20px', textAlign: 'right' }}>
                              תנו לנו להקל עליכם את עבודה!
                                <br></br>
                              כאן תוכלו לפרסם את עצמכם, לתת שירות ולסגור עבודות.
                              <br></br>
                             ועוד בחינם!
                            </p>
                            <div style={{ display: 'flex' }}>
                                <Button className="btn jump"  onClick={ProLogin}>התחברות </Button>
                                <Button className=" jump"    onClick={ProSignUp} style={{ backgroundColor: 'white' }}>הרשמה</Button>

                            </div>
                        </div>
                        <div style={{ width: '40%' }}>
                            <img src={Page3} className="photo"></img>

                        </div>
                    </div>



                    {/* <div>

                        <Button className="btn st" onClick={gotoMenu}>לתפריט</Button>

                        <img src={Page2} className='opens '></img>
                    </div> */}
                    {/* <div>
                        <Carousel className="car">
                            <Carousel.Item interval={5000} className="carousel-item">
                                <img
                                    className=" d-block w-100"
                                    src={page3}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={5000} className="carousel-item">
                                <img
                                    className=" d-block w-100"
                                    src={stake1}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>


                        </Carousel>

                    </div> */}
             

                    {/* <div>

                        {!loginClient ? <Button className="btn st" style={{ top: "1060px" }} onClick={gotoPPA} >אזור אישי</Button> : !loginB ?
                            <Button className="btn st" style={{ top: "1060px" }} onClick={gotoPA} >אזור אישי</Button> : ""}

                        <img src={stake1} className='opens '></img>
                    </div>


                    <div>

                        <Button className="btn st" style={{ top: "1580px" }} >עלינו</Button>

                        <img src={Page3} className='opens '></img>
                    </div> */}



                </div>
            </div>


        </>
    )

})