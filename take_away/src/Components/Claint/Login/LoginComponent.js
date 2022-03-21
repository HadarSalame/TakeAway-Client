import React from 'react';
import './LoginCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form } from 'react-bootstrap';

export default function Login(props) {
    return (
        <>
            <div>
                {/* //התחברות למשתמשים עם שם סיסמא כפתור שיחזור סיסמה עי שליחת 
            //קישור למייל 
            // וכפתור התחברות */}
                <br></br>
                <h1>התחברות</h1>
                <br></br>
                <br></br>
                <div className="border row" >
                    <div className='col-xl-12 col-sm-12 col-xs-10'>
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
                                className="mb-3"
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
                        </div>
                        <h1 className='ForgetPassword'>שכחתי סיסמה</h1>

                        <Button value="logInBtn" variant="outline" className="btn">התחבר/י</Button>
                    </div>
                </div>
            </div>
        </>
    )
}