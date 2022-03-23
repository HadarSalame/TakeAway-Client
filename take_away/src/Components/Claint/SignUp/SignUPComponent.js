import React from 'react';
import './SignUpCss.css'
import { Button } from 'react-bootstrap';

export default function SignUp(props) {
    return (
        <>
            <div >
                {/* for users */}
                <div className='signUp' >
                    {/* //הרשמה למשתמשים מכילה
                    //שם, שם משפחה, נייד, מייל, סיסמה, אימות סיסמה
                    //אישור תנאי האתר וכפתור הרשמה */}
                    <h1>הרשמה למשתמשים</h1>
                    <br></br>
                    <div className=" row" >
                        <div className='border col-xl-6 col-sm-10 col-8'>
                            <div >
                                {/* name */}
                                <FloatingLabel
                                    className="mb-3 "
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputName"
                                    label="שם" >

                                    <Form.Control
                                        type="Text"
                                        placeholder="name" />
                                </FloatingLabel>

                                {/* lastname */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputlastName"
                                    label="שם משפחה">

                                    <Form.Control
                                        type="Text"
                                        placeholder="lastName" />
                                </FloatingLabel>

                                {/* phone */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputPhone"
                                    label="טלפון" >

                                    <Form.Control
                                        type="phone"
                                        placeholder="phone" />
                                </FloatingLabel>

                                {/* email */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingInputEmail"
                                    label="E-mail" >

                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com" />
                                </FloatingLabel>

                                {/* password */}
                                <FloatingLabel
                                    className="mb-3"
                                    style={{ 'direction': 'rtl' }}
                                    controlId="floatingPassword"
                                    label="סיסמה">

                                    <Form.Control
                                        type="password"
                                        placeholder="Password" />

                                </FloatingLabel>

                                {/* Password Authentication */}
                                <FloatingLabel
                                    className="mb-3"
                                    // style={{ 'direction': 'rtl' }}
                                    controlId="floatingPasswordAuthentication"
                                    label=" אימות סיסמה">

                                    <Form.Control
                                        type="password"
                                        placeholder="Password Authentication" />

                                </FloatingLabel>
                            </div>

                            <form>
                                <div class="custom-control custom-checkbox custom-control-label">
                                  
                                    <label for="TermsdefaultCheck"> אני מאשר/ת את תקנון האתר  </label> 
                                    <input type="checkbox" id="TermsdefaultCheck" name="Terms" />
                                </div>
                            </form>

                            <Button value="SignUpBtn" variant="outline" className="btn">הרשמ/י</Button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}