import React, { useRef, useState } from 'react';
import './LoginCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import CancelIcon from '@mui/icons-material/Cancel';


import { connect } from 'react-redux';
import { addUser, signhoutClient, signhoutProfessional } from '../../../Redux/Actions/actions'

export default connect()(function Login(props) {

    const { dispatch } = props

    let UserEmailRef = useRef()
    let UserPassRef = useRef()

    // const [showAlert, setShowAlert] = useState(false)

    const [showErrorAlert, setShowErrorAlert] = useState(false)
    const handleCloseErrorAlert = () => setShowErrorAlert(false);
    const handleShowErrorAlert = () => setShowErrorAlert(true);



    let navigate = useNavigate();

    function gotoIndex() {
        console.log(UserEmailRef, UserPassRef);
        axios.get(`http://localhost:3030/claint/claintLogin/${UserEmailRef.current.value}/${UserPassRef.current.value}`).then((res) => {

            console.log(res.data);
            if (res.data === 'null' || res.data === 'undefined') {
                handleShowErrorAlert()
            }
            else {
                dispatch(addUser(res.data));
                dispatch(signhoutProfessional());
                // setShowAlert(false)
                navigate('/PAComponent')
            }
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <>

            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>



                <br></br>
                <div style={{ margin: '10%' }}></div>
                <h1 style={{ textAlign: 'center' }}>התחברות למשתמש</h1>
                <br></br>
                <br></br>
                <div className=" row" >
                    <div className='border col-xl-6 col-sm-10 col-8'>

                        <Modal show={showErrorAlert} onHide={handleCloseErrorAlert} >

                            <Modal.Body className='alertModal'>
                                <CancelIcon sx={{ color: "#cb2121cc", fontSize: '106px' }} />
                                <br></br>

                                <h3 style={{ direction: 'rtl' }}>שגיאה!</h3>
                                <h5> אחד הפרטים אינו תקין</h5>

                                <Button variant="primary" className='btn'
                                    style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                                    onClick={handleCloseErrorAlert}>
                                    סגור
                                </Button>

                            </Modal.Body>
                        </Modal>

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

                            {/* <div className="FP">

                                <Link to='/ForgetPass'>שכחתי סיסמה</Link>



                            </div> */}
                        </div>
                        <Button value="logInBtn" variant="outline" className="btn" style={{ justifyContent: 'center' }} onClick={gotoIndex}>התחבר/י</Button>
                    </div>
                </div>
            </div>
        </>
    )
})
