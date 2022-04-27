import React from 'react';
import './ProfessionalLoginCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';

//למצוא את הניתוב של ForgetPass
//import Forgetpass from '.././'



export default function ProfessionalLogin(props) {

    //   let navigate = useNavigate();

    //   function gotoForgrtPassWord(){
    //     navigate('/ForgetPass')
    //   }
    return (
        //to copy the login and add businessId
        <>
            <div>
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
                                className="mb-3 "
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInput"
                                label="מספר העסק" >

                                <Form.Control
                                    type="Text"
                                    placeholder="BusinessID" />


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
                        <Button value="logInBtn" variant="outline" className="btn" >התחבר/י</Button>
                    </div>
                </div>
            </div>
        </>
    )
}