import React, { useRef, useState } from 'react';
import './LoginCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import { connect } from 'react-redux';
import { addUser, signhoutClient, signhoutProfessional } from '../../../Redux/Actions/actions'

export default connect()(function Login(props) {

    const { dispatch } = props

    let UserEmailRef = useRef()
    let UserPassRef = useRef()

    const [showAlert, setShowAlert] = useState(false)


    let navigate = useNavigate();

    function gotoIndex() {

        axios.get(`http://localhost:3030/claint/claintLogin/${UserEmailRef.current.value}/${UserPassRef.current.value}`).then((res) => {

            console.log(res.data);
            if (res.data == null || res.data == undefined) {
                setShowAlert(true)
            }
            else {
                dispatch(addUser(res.data));
                dispatch(signhoutProfessional());
                setShowAlert(false)
                navigate('/Index')
            }
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <br></br>
                <div></div>
                <h1 style={{ textAlign: 'center' }}>התחברות</h1>
                <br></br>
                <br></br>
                <div className=" row" >
                    <div className='border col-xl-6 col-sm-10 col-8'>

                        <Stack sx={{ width: '100%', margin: '2%' }} spacing={2} >
                            <Alert severity="error" hidden={!showAlert}>
                                <AlertTitle>!שגיאה</AlertTitle>
                                אחד מהפרטים שהוזנו אינו תקין
                            </Alert>
                        </Stack>

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
                                    ref={UserEmailRef}
                                    type="email"
                                    placeholder="name@example.com"
                                />



                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="סיסמה">

                                <Form.Control
                                    ref={UserPassRef}
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
})
