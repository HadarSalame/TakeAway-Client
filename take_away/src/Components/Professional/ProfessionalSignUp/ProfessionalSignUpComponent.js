import React, { useRef, useState } from 'react';

import './ProfessionalSignUpCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
import { connect } from 'react-redux';
import { addProfessional } from '../../../Redux/Actions/actions'
import { Stack, AlertTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';



export default connect()(function ProfessionalSignUp(props) {
    const { dispatch } = props

    const [selected, setSelected] = useState([]);
    const options = [
        { label: "העדה החרדית", value: "1" },
        { label: "בד''צ בית יוסף", value: "2" },
        { label: "הרב לנדא", value: "3" },
        { label: "הרב אברהם רובין", value: "4" },
        { label: "יורה דעה-הרב שלמה מחפוד", value: "5" },
        { label: "בד''צ מחזיקי הדת", value: "6" },
        { label: "בד''צ שארית ישראל", value: "7" },
        { label: "איגוד הרבנים", value: "8" },
        { label: "רבני צהר", value: "9" },
        { label: "רבנות פתח תקווה", value: "10" },
        { label: "רבנות נתניה", value: "11" }



    ];

    const customValueRenderer = (selected, _options) => {
        return selected.length
            ? selected.map(({ label }) => "✔️ " + label)
            : "בחר כשרות";
    };

    let ProNameRef = useRef();
    let OwnerProNameRef = useRef();
    let ProAddressRef = useRef();
    let ProPhoneRef = useRef();
    let ProEmailRef = useRef()
    let ProPassRef = useRef()
    let ProConPassRef = useRef();
    let ProIdRef = useRef()
    //איך זה עובד עם קבצים??

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
    function gotoIndex() {
        console.log(selected);
        let newBusiness = {
            businessID: ProIdRef.current.value,
            businessName: ProNameRef.current.value,
            businessOwnerName: OwnerProNameRef.current.value,
            businessPhone: ProPhoneRef.current.value,
            businessEmail: ProEmailRef.current.value,
            businessAddress: ProAddressRef.current.value,
            businesspassword: ProPassRef.current.value,
            confirmPassword: ProConPassRef.current.value,
            businessKosher: selected.map(s => s.label),
        }

        if (newBusiness.businessPhone.length !== 10
            && newBusiness.businessID !== ""
            && newBusiness.businessName !== ""
            && newBusiness.businessOwnerName !== ""
            && newBusiness.businessEmail !== ""
            && newBusiness.businessPhone !== ""
            && newBusiness.businessAddress !== ""
            && newBusiness.businesspassword !== ""
            && newBusiness.confirmPassword !== ""
        ) {
            if (
                newBusiness.businesspassword !== newBusiness.confirmPassword
            ) {
                handleShowErrorAlertPass()


            } else {

                axios.post('http://localhost:3030/business/CreateBusiness', newBusiness).then(res => {
                    if (res.data === 'the bussines allredy exist' || res.data === "password") {
                        handleShowErrorAlertExist()

                    }
                    else {

                        dispatch(addProfessional(res.data.Business));
                        navigate("/Index")
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
                <div>
                    <h1 style={{ textAlign: 'center', marginTop: '10%' }}>הרשמה לעסקים</h1>
                </div>
                <div className=" row border col-xl-6 col-sm-10 col-8">

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

                    <div>
                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputName"
                            label="שם העסק" >

                            <Form.Control
                                ref={ProNameRef}
                                type="Text"
                                placeholder="businessName" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputOwnerName"
                            label="שם בעל העסק" >

                            <Form.Control
                                ref={OwnerProNameRef}
                                type="Text"
                                placeholder="BusinessOwnerName" />

                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3 "
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputId"
                            label="מספר העסק" >

                            <Form.Control
                                ref={ProIdRef}
                                type="Text"
                                placeholder="BusinessID" />
                        </FloatingLabel>


                        <FloatingLabel
                            className="mb-3"
                            controlId="floatingInputAddress"
                            label=" כתובת העסק" >

                            <Form.Control
                                ref={ProAddressRef}
                                type="Text"
                                placeholder="BusinessAddress" />
                        </FloatingLabel>

                        {/* phone */}
                        <FloatingLabel
                            className="mb-3"
                            controlId="floatingInputPhone"
                            label="טלפון" >

                            <Form.Control
                                ref={ProPhoneRef}
                                type="phone"
                                placeholder="businessPhone" />
                        </FloatingLabel>

                        <FloatingLabel
                            className="mb-3"
                            style={{ 'direction': 'rtl' }}
                            controlId="floatingInputEmail"
                            label="E-mail" >

                            <Form.Control
                                ref={ProEmailRef}
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
                                ref={ProPassRef}
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
                                ref={ProConPassRef}
                                type="password"
                                placeholder="Password Authentication" />

                        </FloatingLabel >


                        <FloatingLabel
                            className="mb-3 form"
                        >

                            <MultiSelect
                                className='form'

                                style={{ direction: 'rtl', hight: '40px' }}
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="kosher"
                                valueRenderer={customValueRenderer}


                            />
                        </FloatingLabel>




                        <Button value="ProfessionalSignUpPart1" variant="outline" onClick={gotoIndex} className="btn">הרשמה</Button>

                    </div>
                </div>
            </div>
        </>
    )
})