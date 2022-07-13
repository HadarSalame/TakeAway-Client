import React, { useRef, useState } from 'react';

import './ProfessionalSignUpCSS.css'
import { Button, InputGroup, FormControl, FloatingLabel, Form, Select, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";





export default function ProfessionalSignUp(props) {
    let ProNameRef = useRef();
    let OwnerProNameRef = useRef();
    let ProAddressRef = useRef();
    let ProPhoneRef = useRef();
    let ProEmailRef = useRef()
    let ProPassRef = useRef()
    let ProIdRef = useRef()
    //איך זה עובד עם קבצים??
    const [selectedKosher, setSelectedKosher] = useState()



    let navigate = useNavigate();
    function gotoIndex() {
        let newBusiness = {
            businessID: ProIdRef.current.value,
            businessName: ProNameRef.current.value,
            businessOwnerName: OwnerProNameRef.current.value,
            businessPhone: ProPhoneRef.current.value,
            businessEmail: ProEmailRef.current.value,
            businessAddress: ProAddressRef.current.value,
            businesspassword: ProPassRef.current.value,
            businessKosher:selectedKosher,
        }
        axios.post('http://localhost:3030/business/CreateBusiness',newBusiness).then(res=>{
            alert(res.data)
            navigate("/Index")
        }).catch(err=>console.log(err))
        
    }

    return (
        <>
            <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>הרשמה לעסקים</h1>
                </div>
                <div className=" row border col-xl-6 col-sm-10 col-8">
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
                            controlId="floatingInputName"
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

                        <div style={{ display: 'flex' }}>
                            <FloatingLabel
                                className="mb-3"
                                style={{ width: '686px' }}
                                controlId="floatingInputId"
                                label=" כתובת העסק" >

                                <Form.Control
                                    ref={ProAddressRef}
                                    type="Text"
                                    placeholder="BusinessAddress" />
                            </FloatingLabel>




                        </div>
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
                                type="password"
                                placeholder="Password Authentication" />

                        </FloatingLabel>

                        <Form.Select aria-label="Default select example" style={{ height: '58px' }} onChange={(e) => setSelectedKosher(e.target.value)}>
                            <option disabled>כשרות העסק</option>
                            <option value="1">העדה החרדית</option>
                            <option value="2">הרב לנדא</option>
                            <option value="3">בד''צ בית יוסף</option>
                            <option value="4">הרב אברהם רובין</option>
                            <option value="5">יורה דעה-הרב שלמה מחפוד</option>
                            <option value="6">בד''צ מחזיקי הדת</option>
                            <option value="7">בד''צ שארית ישראל</option>
                            <option value="8">רבנות פתח תקווה</option>
                            <option value="9">רבני צהר</option>
                        </Form.Select>

                        <h1>???</h1>
                        <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <FloatingLabel
                                className="mb-3"
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="תעודת כשרות" >
                                <Form.Control
                                    style={{ 'hight': '40px' }}

                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> */}
                            <FloatingLabel
                                className="mb-3"
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="לוגו" >
                                <Form.Control
                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group>

                        {/* <Form.Group controlId="formFile">
                            {/* <Form.Label>Default file input example</Form.Label> 
                            <FloatingLabel
                                className="mb-3"
                                style={{ 'direction': 'rtl' }}
                                controlId="floatingInputFile"
                                label="אישור משרד הבריאות" >
                                <Form.Control
                                    type="file"
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                        </Form.Group> */}

                        <Button value="ProfessionalSignUpPart1" variant="outline" onClick={gotoIndex} className="btn">המשך</Button>

                    </div>
                </div>
            </div>
        </>
    )
}