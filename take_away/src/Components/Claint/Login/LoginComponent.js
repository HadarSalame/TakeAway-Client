import React from 'react';
import './LoginCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


export default function Login(props) {

    let navigate = useNavigate();

    function gotoIndex() {
       
        navigate("/Index")
    };

    return (
        <>
            <div>
                {/* //התחברות למשתמשים עם שם סיסמא כפתור שיחזור סיסמה עי שליחת 
            //קישור למייל 
            // וכפתור התחברות */}
                <br></br>
                <div></div>
                <h1  style={{ textAlign: 'center' }}>התחברות</h1>
                <br></br>
                <br></br>
                <div className=" row" >
                    <div className='border col-xl-6 col-sm-10 col-8'>
                        {/* mail for login */}
                        {/* <div style={{'marginBottom':'30px'}}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="E-mail"
                                aria-label="E-mail"
                                aria-describedby="basic-addon1"
                                className='a'
                            />
                            <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
                        </InputGroup>
                    </div>
                    {/* PassWord for login */}
                        {/* <InputGroup className="mb-3">

                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                            className='a'
                        />
                        <InputGroup.Text id="basic-addon1" >@</InputGroup.Text> */}
                        {/* </InputGroup> */}
                        <div>
                            <FloatingLabel
                                className="mb-3 "
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInput"
                                label="Email" >

                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com" />


                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="סיסמה">

                                <Form.Control
                                    type="password"
                                    placeholder="Password" />

                            </FloatingLabel>

                            <div className="FP">
                              
                                    <Link to='/ForgetPass'>שכחתי סיסמה</Link>
                                   
                                    
                                   
                            </div>
                        </div>
                        <Button value="logInBtn" variant="outline" className="btn" onClick={gotoIndex}>התחבר/י</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
