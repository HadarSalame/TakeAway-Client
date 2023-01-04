import React, { useRef, useState } from 'react';
import './SignUpCss.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form ,Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Alert, Stack, AlertTitle } from '@mui/material';
import { connect } from 'react-redux';
import { addUser } from '../../../Redux/Actions/actions'
import CancelIcon from '@mui/icons-material/Cancel';



export default connect()(function SignUp(props) {

    const { dispatch } = props

    let FirstNameRef = useRef();
    let LastNameRef = useRef();
    let PhoneRef = useRef();
    let EmailRef = useRef();
    let PassRef = useRef();
    let conPassRef = useRef();

    

    const [showErrorAlert, setShowErrorAlert] = useState(false)
    const handleCloseErrorAlert = () => setShowErrorAlert(false);
    const handleShowErrorAlert = () => setShowErrorAlert(true);

    const [showErrorAlertPass, setShowErrorAlertPass] = useState(false)
    const handleCloseErrorAlertPass = () => setShowErrorAlertPass(false);
    const handleShowErrorAlertPass = () => setShowErrorAlertPass(true);

    const [showErrorAlertExist, setShowErrorAlertExist] = useState(false)
    const handleCloseErrorAlertExist = () => setShowErrorAlertExist(false);
    const handleShowErrorAlertExist = () => setShowErrorAlertExist(true);



    let navigate = useNavigate();
    function SignUpClaint() {
        let newClaint = {
            claintFirstName: FirstNameRef.current.value,
            claintLastName: LastNameRef.current.value,
            claintPhone: PhoneRef.current.value,
            claintEmail: EmailRef.current.value,
            password: PassRef.current.value,
            confirmPassword: conPassRef.current.value

        }
        if (newClaint.claintPhone.length !== 10
            && newClaint.claintFirstName !== ""
            && newClaint.claintLastName !== ""
            && newClaint.claintPhone !== ""
            && newClaint.claintEmail !== ""
            && newClaint.password !== ""
            && newClaint.confirmPassword !== ""

        ) {
            if (
                newClaint.password !== newClaint.confirmPassword
            ) {
                handleShowErrorAlertPass()

            } else {
              
                axios.post('http://localhost:3030/Claint/CreateClaint', newClaint).then(res => {
                    if (res.data === 'exist' || res.data === "password") {
                        handleShowErrorAlertExist()
                    }
                    else {
                        console.log(res.data)
                        //הסרת כפתורי ההתחברות וההרשמה ולשים כפתור התנתקות ושלום למשתמש
                        dispatch(addUser(res.data.CreateClaint));
                        navigate("/PAComponent")
                    }
                }).catch(err => console.log(err))
            }
        }
        else {
            handleShowErrorAlert()
        }

    }
    return (
        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
                {/* for users */}
                <div className='signUp' style={{ margin: '10%' }}>
                    {/* //הרשמה למשתמשים מכילה
                    //שם, שם משפחה, נייד, מייל, סיסמה, אימות סיסמה
                    //אישור תנאי האתר וכפתור הרשמה */}
                    <h1 style={{ textAlign: 'center' }}>הרשמה למשתמשים</h1>

                    <Modal show={showErrorAlert} onHide={handleCloseErrorAlert} >

                        <Modal.Body className='alertModal'>
                            <CancelIcon sx={{ color: "#cb2121cc", fontSize: '106px' }} />
                            <br></br>

                            <h3 style={{ direction: 'rtl' }}>שגיאה!</h3>
                            <h5>  יש למלא את כל הפרטים</h5>

                            <Button variant="primary" className='btn'
                                style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                                onClick={handleCloseErrorAlert}>
                                סגור
                            </Button>

                        </Modal.Body>
                    </Modal>

                    <Modal show={showErrorAlertPass} onHide={handleCloseErrorAlertPass} >

                        <Modal.Body className='alertModal'>
                            <CancelIcon sx={{ color: "#cb2121cc", fontSize: '106px' }} />
                            <br></br>

                            <h3 style={{ direction: 'rtl' }}>שגיאה!</h3>
                            <h5>  הסימאות אינן זהות</h5>

                            <Button variant="primary" className='btn'
                                style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                                onClick={handleCloseErrorAlertPass}>
                                סגור
                            </Button>

                        </Modal.Body>
                    </Modal>

                    <Modal show={showErrorAlertExist} onHide={handleCloseErrorAlertExist} >

                        <Modal.Body className='alertModal'>
                            <CancelIcon sx={{ color: "#cb2121cc", fontSize: '106px' }} />
                            <br></br>

                            <h3 style={{ direction: 'rtl' }}>שגיאה!</h3>
                            <h5>  המשתמש קיים במערכת</h5>

                            <Button variant="primary" className='btn'
                                style={{ alignItems: 'center', marginTop: '3% ', marginLeft: 0, marginRight: 0 }}
                                onClick={handleCloseErrorAlertExist}>
                                סגור
                            </Button>

                        </Modal.Body>
                    </Modal>

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
                                        ref={FirstNameRef}
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
                                        ref={LastNameRef}

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
                                        ref={PhoneRef}
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
                                        ref={EmailRef}
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
                                        ref={PassRef}
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
                                        ref={conPassRef}
                                        type="password"
                                        placeholder="Password Authentication" />

                                </FloatingLabel>
                            </div>


                            <Button value="SignUpBtn" variant="outline" className="btn" onClick={SignUpClaint} >הרשמ/י</Button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
})