import React, { useRef } from 'react';
import './ProfessionalLoginCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import ForgetPass from '../../ForgetPassWord/ForgetPassComponent';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


//למצוא את הניתוב של ForgetPass
//import Forgetpass from '.././'



export default function ProfessionalLogin(props) {
    let ProEmailRef = useRef()
    let ProPassRef = useRef()
    let ProIdRef = useRef()


    let navigate = useNavigate();

    function gotoIndex() {

        axios.get(`http://localhost:3030/business/BusinessLogin/${ProIdRef.current.value}/${ProEmailRef.current.value}/${ProPassRef.current.value}`).then((res) => {
            console.log(res.data);
            if (res.data !== 'true') {
                function Eror() {
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">
                            <AlertTitle>!שגיאה</AlertTitle>
                            אחד מהפרטים שהוזנו אינו תקין
                        </Alert>
                    </Stack>
                }
            }

            navigate('/Index')

        }).catch(err => {

        })

    }
    return (

        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>

                <div className=" row" >
                    <h1 style={{ textAlign: 'center' }}>התחברות לעסקים</h1>
                    <div className='border col-xl-6 col-sm-10 col-8'>
                 {/* //איך להפעיל את השגיאה כאן */}
                        <div>
                            <FloatingLabel
                                className="mb-3 "
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInput"
                                label="Email" >

                                <Form.Control
                                    ref={ProEmailRef}
                                    type="email"
                                    placeholder="name@example.com" />


                            </FloatingLabel>

                            <FloatingLabel
                                className="mb-3 "
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInput"
                                label="מספר העסק" >

                                <Form.Control
                                    ref={ProIdRef}
                                    type="Text"
                                    placeholder="BusinessID" />


                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="סיסמה">

                                <Form.Control
                                    ref={ProPassRef}
                                    type="password"
                                    placeholder="Password" />

                            </FloatingLabel>

                            <div className="FP">

                                <Link to='/ForgetPass'>שכחתי סיסמה</Link>


                            </div>
                        </div>
                        <Button value="logInBtn" variant="outline" className="btn" onClick={gotoIndex} >התחבר/י</Button>
                    </div>
                </div>
            </div>
        </>
    )
}